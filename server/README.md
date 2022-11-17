# Degallery Frontend

## The Folder Structure of Degallery Frontend

Starting from the SRC folder, the structure is divided into 4 alongside the root file index.ts according to the version of the backend being worked on.
Controller Folder
Models Folder
Routes Folder
Validations Folder
Service Folder

## Controller Folder

It contains all the logics of the backend where the logics are broken down according to the service being rendered to the users of Degallery.
Files include;
Image Controller: Contains all logics that has to do with the images.

## Model Folder

It contains all the models and structure of the database(mongo db).
Files include;
Users Model: It defines the structure of the users field in Degallery database.

## Routes Folder

It states all the end points of the api of Degallery.
Files include;
User Routes: Contains all the end points of resources or services users can access.

## Validations Folder

It contains all the validations of the backend where they are broken down according to the service being rendered to the users of Degallery.
Files include;
Users Validation: All validations needed in the users controller.

## Services Folder

It contains all third party services to the backend.
Files include;
AWSS3Services File: It helps to upload images to AWS S3 storage
