import axios from "axios";

const url = `https://parseapi.back4app.com/classes/product`;
const headers = {
    "X-Parse-Application-Id": "hSZm2Nzp93VbirKOBuXEb3F9R17Mi3woIMgnV2KR",
    "X-Parse-REST-API-Key": "AYkJTAJyHREhkkbJ3YiR6ITv04F3WAZ2SQNBpq4T",
    "content-type": "application/json"
}


export const getSingleProduct = async (id) => {
    try {
        const response = axios.get(`${url}/${id}`, {
            headers:headers
        })
        return response;
    } catch (error) {
        throw error;
    }
}