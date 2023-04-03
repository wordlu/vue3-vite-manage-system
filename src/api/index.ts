import axios from '../utils/request';

// post请求
export const fetchData = () => {
    return axios({
      url: '/mdm/index/getTitleMessage',
      method: 'post',
      data: {
        "date": "20220630"
      }
    });
};

// get请求
export const reportTmpQuey = () => {
  return axios({
    url: '/mdm/dic/all/class_id?_dc=1680144723940',
    method: 'get',
  });
};