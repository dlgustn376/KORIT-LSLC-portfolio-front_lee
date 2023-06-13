import axios from "axios";

export const getAuthentication = (accessToken) => {
    return axios.get('http://43.201.170.139/api/v1/auth/authenticated', {params: {accessToken}});
}