import axios from "axios";

export const API_URLS = {
	image_URL: "https://kwabena-abrokwa.s3.af-south-1.amazonaws.com",
	users_Local_API_URL: "http://localhost:8085/api/users/",
	users_Live_API_URL: "https://degallery.azurewebsites.net/api/users/",
};

export default axios.defaults.baseURL = API_URLS.users_Live_API_URL;
