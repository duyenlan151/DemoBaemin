import axios, { AxiosResponse } from "axios";
import { env } from "../env";
import { IOptions } from '../models/request.model'
// import { Cookies } from 'react-cookie';
// const cookies = new Cookies();

axios.defaults.baseURL = env.apiURL;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: AxiosResponse) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    // return response.json();
    return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: AxiosResponse) {
    if (response?.status >= 200 && response?.status < 300) {
        return response;
    }
    if (response?.status === 401) {
        return 401;
    }
    return response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url: string, options?: IOptions) {
    return axios(url, options)
        .then((response: AxiosResponse) => parseJSON(response))
        .catch((error) => checkStatus(error.response));
}
