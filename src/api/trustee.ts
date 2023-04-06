import { axios2 } from '../utils/request';

// post请求
export const fetchData:any = () => {
    return axios2({
      url: '/mdm/trustee/query',
      method: 'post',
      data: {
        _startRow: 0,
        _rowCount: 30,
      },
    });
};

// get请求
export const reportTmpQuey:any = () => {
  return axios2({
    url: '/mdm/dic/all/class_id?_dc=1680144723940',
    method: 'get',
  });
};