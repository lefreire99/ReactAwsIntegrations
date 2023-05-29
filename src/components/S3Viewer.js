import React, { useEffect } from 'react'
import AWS from 'aws-sdk';
import { useState } from 'react';

AWS.config.update({
    accessKeyId: 'ASIA6PKUP76JKWVV74TN',
    secretAccessKey: '+ggBjBd82cUeeIqsSxJYD/H5dfJUMo5rtf/JSy/U',
    region: 'us-east-1',
    sessionToken: 'FwoGZXIvYXdzEFIaDJaURsVDp/2LhG/ASSK9Ac8bREWD3B89+VjoJPntcwEaWie/imWlBCMG4ZCEykdXzSUYmTCHIZVe0jYAZeHE+mA+JGS443z0Q2RNHC1xtaQkXymXQ7gzsKfBtujbUiQ36756Dq5Tqhuw+v35XicMdf+RpLWQDHHc+ewEAwPhdkuNpeKqtfX3aDAfQqOC0L8GMLV76q2dGmJzyenpJQF6s3S8LbJ9MSFvAVbxJbllJAWhk+t3G3Lv6O57grHgygR799PiAhZTBw69qk+LcSjtqNOjBjItT8ttfkrQE/LQtmD/EnTsXLDlFOSDqrf7TNBvEXKE3qN1l996RdjfRjCWm12n'
});

export const S3Viewer = () => {
    const [listFiles, setListFiles] = useState([]);
    const [s3Domain, setS3Domain] = useState("");
    const s3 = new AWS.S3();

    const getFromS3 = (e) => {
        const params = {
            Bucket: 's3testreact2023'
        };
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
            console.log(err, err.stack);
            } else {
                console.log(data);
                setS3Domain(data.Name);
                setListFiles(data.Contents);
            }
        });
      }

    useEffect(() => {
        getFromS3();
    }, [])

    const formatUrl = (name) => {
        const url = "https://" + s3Domain + ".s3.amazonaws.com/" + name.replaceAll(" ","+");
        console.log(url);
        return url;
    }

  return (
    <div style={{marginTop: '150px', marginBottom: '50px' }}>
        <h1>Visualizar todos los objetos de un bucket</h1> 
        <button onClick={getFromS3}>Recargar</button>
        {(listFiles.length==0) && (
            <h3>No hay objetos que mostrar</h3> 
            )
        }
        {(listFiles.length>0)  && (
            <ul>
                {
                listFiles.map((name, index) => (
                    <li style={{fontSize: "small"}} key={index}>
                    {name.Key}
                    </li>
                ))}
            </ul>
            )
        }
        {(listFiles.length>0)  && (
            <div className="wrapper">
                {
                listFiles.map((name, index) => (
                    <div style={{width: "200px", height: "200px", display: 'flex'} }>
                        <img key={index} src={formatUrl(name.Key)}></img>
                    </div>
                ))}
            </div>
            )
        }
        
        
    </div>
  )
}
