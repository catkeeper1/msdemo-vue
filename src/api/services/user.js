import baseApi from "../common/baseApi";

const services = new baseApi('/GTInterview/', {
  'Content-Type': 'application/x-www-form-urlencoded',
  'lang': 'zh_TW'
}, 'formData')

export default {
  login(params) {
    return services.post('/cmsAPI/login', params)
  }
}