import { axios2 } from '../utils/request';

// 表格数据
export const fetchData:any = (parmas) => {
    return axios2({
      url: '/mdm/trustee/query',
      method: 'post',
      data: {
        _startRow: 0,
        _rowCount: 30,
        ...parmas
      },
    });
};

// 审核状态下拉
export const getCheckData:any = () => {
  return axios2({
    url: '/mdm/dic/is_check/allByClassId',
    data: {
      _dc: new Date().getTime()
    },
    method: 'get',
  });
};