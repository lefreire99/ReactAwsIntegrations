npx create-react-app projectideas

_____________________________________________

Crear Usuario para credenciales

IAM
Add new user
Attach policies directly
AmazonS3FullAccess
Credentials Tab -> Access Key -> Create Access Key

______________________________________________

`npm i aws-sdk --save`

__________________________________________




__________________________________

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::<Your-Bucket-name>",
                "arn:aws:s3:::<Your-Bucket-name>/*"
            ]
        }
    ]
}

___________________________________________


[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]
