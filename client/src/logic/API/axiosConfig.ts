import axios from "axios";

export const API_URLS = {
	image_URL: "",
	users_Local_API_URL: "http://localhost:8082/api/admin",
	users_Live_API_URL: "",
};

export default axios.defaults.baseURL = API_URLS.users_Local_API_URL;
