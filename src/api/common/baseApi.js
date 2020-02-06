import axios from 'axios'
import qs from "qs";
import {
  Loading,
  // MessageBox
} from 'element-ui'

let LoadingUtil = null;
let sessionToken = null;

class ApiManager {
  //dataType为formData和json两种。
  constructor(baseURL, headers, dataType) {
    this.dataType = dataType
    this.instance = this.createInstance(baseURL, headers)
  }
  //初始化
  createInstance(baseUrl, headers) {
    const instance = axios.create({
      baseURL: baseUrl,
      headers: headers
    })
    // 请求前 做的处理 可用于获取vuex中的user
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      let token = sessionToken;
      if(token != null) {
        config.headers['x-auth-token'] = token;
      }

      var lang = sessionStorage.getItem('lang');
      if(lang != null) {
        config.headers['lang'] = lang;
      }

      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    instance.interceptors.response.use(function (res) {
      // 对相应数据处理
      console.log("server reply:");
      console.log(res);
      var token = res.headers['x-auth-token'];
      if(token != null) {
        sessionToken = token;
      }

      return res;
    }, function (error) {
      // 对响应错误处理

      console.log(error);

      return Promise.reject(error);
    });
    return instance
  }
  get(url, params) {
    return this.start('get', url, params)
  }
  post(url, params) {
    return this.start('post', url, {}, params)
  }
  start(method, url, params, data) {
    this.showLoading()
    if (this.dataType == 'formData') {
      data = qs.stringify(data)
    }

    return this.instance({
      method: method,
      url: url,
      params: params,
      data: data
    }).then(res => {
      LoadingUtil.close()

      return res
    }).catch(err => {
      LoadingUtil.close();
      return Promise.reject(err);
      
    })
  }
  showLoading() {
    LoadingUtil = Loading.service({
      fullscreen: true
    })
  }
}

export default ApiManager