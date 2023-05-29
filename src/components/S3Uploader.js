import React from 'react'
import AWS from 'aws-sdk';
import { useState } from 'react';

AWS.config.update({
    accessKeyId: 'ASIA6PKUP76JKWVV74TN',
    secretAccessKey: '+ggBjBd82cUeeIqsSxJYD/H5dfJUMo5rtf/JSy/U',
    region: 'us-east-1',
    sessionToken: 'FwoGZXIvYXdzEFIaDJaURsVDp/2LhG/ASSK9Ac8bREWD3B89+VjoJPntcwEaWie/imWlBCMG4ZCEykdXzSUYmTCHIZVe0jYAZeHE+mA+JGS443z0Q2RNHC1xtaQkXymXQ7gzsKfBtujbUiQ36756Dq5Tqhuw+v35XicMdf+RpLWQDHHc+ewEAwPhdkuNpeKqtfX3aDAfQqOC0L8GMLV76q2dGmJzyenpJQF6s3S8LbJ9MSFvAVbxJbllJAWhk+t3G3Lv6O57grHgygR799PiAhZTBw69qk+LcSjtqNOjBjItT8ttfkrQE/LQtmD/EnTsXLDlFOSDqrf7TNBvEXKE3qN1l996RdjfRjCWm12n'
  });

export const S3Uploader = () => {
    const s3 = new AWS.S3();
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileSelect = (e) => {
        setFile(e.target.files[0]);
      }

      const uploadToS3 = async () => {
        if (!file) {
          return;
        }
        const params = { 
          Bucket: 's3testreact2023', 
          Key: `${Date.now()}.${file.name}`, 
          Body: file 
        };
        const { Location } = await s3.upload(params).promise();
        setImageUrl(Location);
        console.log('cargando a s3', Location);
      }
      return (
        <div style={{ marginTop: '150px' }}>
          <h1>Subida de archivo simple</h1>
          <input type="file" onChange={handleFileSelect} />
          {file && (
            <div style={{ marginTop: '10px' }}>
              <button onClick={uploadToS3}>Upload</button>
            </div>
          )}
          {imageUrl && (
            <div style={{ marginTop: '10px' }}>
              <img src={imageUrl} alt="uploaded" />
            </div>
          )}
        </div>
      );
}
