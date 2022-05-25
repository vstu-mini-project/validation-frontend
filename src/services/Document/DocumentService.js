import axios from "axios";
import { API_DOCUMENTS } from "../../global/ApiEndpoints";
import authHeader from '../Autorization/authHeader';

const API_URL = API_DOCUMENTS + "/passports";

class DocumentService {

    getDocuments(){
        return axios.get(API_URL, { headers: authHeader() });
    }
    
}

export default new DocumentService();