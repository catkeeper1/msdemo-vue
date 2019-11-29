import axios from 'axios'
import qs from "qs";
// import {
//   Loading,
//   MessageBox
// } from 'element-ui'


class ApiManager {
  constructor(baseURL, headers) {
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
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    instance.interceptors.response.use(function (config) {
      // 对相应数据处理
      console.log(3);

      return config;
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

    return this.instance({
      method: method,
      url: url,
      params: params,
      data: qs.stringify(data)
    })
  }
}

export default ApiManager