import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';

// 创建axios实力
const service:AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 6000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
});

function stringify (data) {
  let ret = ''
  for (const it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  ret = ret.substring(0, ret.lastIndexOf('&'))
  return ret
}

// 将请求数据转换成 formdata 接收格式
// transformRequest在向服务器发送前，修改请求数据
service.defaults.transformRequest = (data) => {
  return stringify(data)
}

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
