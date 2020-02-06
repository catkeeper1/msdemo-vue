import baseApi from "../common/baseApi";

const formDataApi = new baseApi(process.env.VUE_APP_CMS_API_BASE_URL,{}, "formData");

export default {
  login(params) {
    

    return formDataApi.post('/auth/login', params);
  }
}