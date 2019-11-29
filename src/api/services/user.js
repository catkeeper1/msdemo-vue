import baseApi from "../common/baseApi";

const services = new baseApi('/GTInterview-api/', {
  'Content-Type': 'application/x-www-form-urlencoded',
  'lang': 'zh_TW'
})

export default {
  login(params) {
    return services.post('/cmsAPI/login', params)
  }
}