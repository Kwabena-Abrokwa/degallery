# Degallery Frontend

## The Folder Structure of Degallery Frontend

Starting from the SRC folder, the structure is divided into 2
Logic Folder
Interface Folder

## Logic Folder

It contains all the API Logics and computations that has to do with the application.
Subfolders include;
ReduxStore: Contains all the activities that has to do with redux and application state management.
API: Contains Axios configurations.
ReduxStore Folder
Subfolders include
App folder: It contains the configuration of the redux store and custom redux hooks (useSelector and useDispatch).
Features Folder: This is where all the logics go according to pages and actions needed to be executed.
Interceptors
It only contains Axios configuration file

## Interface Folder

It contains all the UI Pages and its components.
Subfolders include;
Screens Folder: Where all screens UI are stored. Inside the Screens, we have Auth Folder for only Authenticated Screen and Guest Folder for only Guest screens.
Components Folder: It keeps the reusable components in the application
Constants Folder: Stores all UI features like colors and typographies.
Assets Folders: To keep all assets
Data: To store all static data of the application
