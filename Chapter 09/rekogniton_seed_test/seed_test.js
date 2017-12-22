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
    accessKeyId: 'ACCESSKEYID',
    secretAccessKey: 'SECRETACCESSKEY'
};

var AWS = require('aws-sdk');
var fs = require('fs-extra');
var path = require('path');
    
AWS.config.region = config.region;

var rekognition = new AWS.Rekognition({
    region: config.region,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
});

// Once you've created your collection you can run this to test it out.
function FaceSearchTest(imagePath) {
    var bitmap = fs.readFileSync(imagePath);

    rekognition.searchFacesByImage({
        'CollectionId': config.collectionName,
        'FaceMatchThreshold': 80,
        'Image': {
            'Bytes': bitmap,
        },
        'MaxFaces': 1
    }, (err, data) => {
        if (err) {
            console.error(err, err.stack); // an error occurred
        } else {
            // console.log(data); // successful response
            console.log(data.FaceMatches.length > 0 ? data.FaceMatches[0].Face : data);
        }
    });
}

FaceSearchTest(__dirname + '/faces/no_arvind.jpg');