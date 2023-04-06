import { axios1 } from '../utils/request';

// post请求
export const fetchData:any = () => {
    return axios1({
      url: '/mdm/index/getTitleMessage',
      method: 'post',
      data: {
        "date": "20220630"
      }
    });
};

// get请求
export const reportTmpQuey:any = () => {
  return axios1({
    url: '/mdm/dic/all/class_id?_dc=1680144723940',
    method: 'get',
  });
};