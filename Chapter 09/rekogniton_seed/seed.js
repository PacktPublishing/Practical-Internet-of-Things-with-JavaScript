/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var config = {
    collectionName: 'AIOWJS-FACES',
    region: 'eu-west-1',
    accessKeyId: 'AKIAJBKXSECPX5KNKWNA',
    secretAccessKey: '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'
};

var AWS = require('aws-sdk');
var fs = require('fs-extra');
var path = require('path');
var klawSync = require('klaw-sync')
    
AWS.config.region = config.region;

var rekognition = new AWS.Rekognition({
    region: config.region,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
});

// AWS allows you to create separate collections of faces to search in. 
// This creates the collection we'll use.
function createCollection() {
    // Index a dir of faces
    rekognition.createCollection({
        'CollectionId': config.collectionName
    }, (err, data) => {
        if (err) {
            console.log(err, err.stack); // an error occurred
        } else {
            console.log(data); // successful response
        }
    });
}


// This loads a bunch of named faces into a db. It uses the name of the image as the 'externalId'
// Reads from a sub folder named 'faces'
function indexFaces() {
    var paths = klawSync('./faces', {
        nodir: true,
        ignore: ['*.json']
    });

    paths.forEach((file) => {
        var p = path.parse(file.path);
        var name = p.name.replace(/\W/g, '');
        var bitmap = fs.readFileSync(file.path);

        rekognition.indexFaces({
            'CollectionId': config.collectionName,
            'DetectionAttributes': ['ALL'],
            'ExternalImageId': name,
            'Image': {
                'Bytes': bitmap
            }
        }, (err, data) => {
            if (err) {
                console.log(err, err.stack); // an error occurred
            } else {
                console.log(data.FaceRecords); // successful response
                fs.writeJson(file.path + '.json', data, (err) => {
                    if (err) return console.error(err)
                });
            }
        });
    });
}

// createCollection needs to be run
// only once. Else you would receive
// `collection already exists` message 
createCollection();
// Index the faces
indexFaces();
