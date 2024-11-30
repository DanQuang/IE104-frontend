// Importing the axios library
import axios from "axios";

// Defining the base URL for the API
const BASE_URL = "http://localhost:8000/api";

// Creating a custom Axios instance with the base URL
const axiosInst = axios.create({ baseURL: BASE_URL });

// Adding a response interceptor to handle success and error responses globally
axiosInst.interceptors.response.use(
  (response) => {
    // If the response is successful, return it as is
    return response;
  },
  (error) => {
    // If there's an error, check if the error contains response data
    if (error.response) {
      // If the server responded with an error, return the error data
      return Promise.reject(error.response.data);
    } else {
      // If no response was received (e.g., network error), return a generic error message
      return Promise.reject("Something went wrong");
    }
  }
);

// Exporting the custom axios instance for use in other files
export default axiosInst;
