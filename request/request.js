/*
wx-request 中的参数如下
{
    url: 'url', //请求的URL
    data: data, //POST 请求中需要传递 data 对象
    dataType: dataType, // 返回的数据格式
    enableCache: true,  //是否开启缓存
    enableHttp2: true,
    enableQuic: true,
    header: header,    //HTTP 请求头 一般传递 TOKEN
    method: method,   // GET /  POST
    responseType: responseType,  // 响应的数据类型
    timeout: 0,   // 请求超时时间
    success: (result) => {},  //成功时 回调
    fail: (res) => {},
    complete: (res) => {},
  }
*/
///参数 parm 是个对象 详见上述备注 wx-request 中的参数，
export const request = (parm) => {
    //详细请查询ES6 Promise 用法
    return new Promise((resolve, reject) => {
        // 请求头中 header 带上 Token 这样，其他页面使用该方法时，无需再传递Token
        parm.header = {
            "Authorization": wx.getStorageSync('Token')
        };
        wx.request({
            ...parm, // 展开对象  结合对象
            success: (result) => {
                console.log(result.statusCode);
                // 401 时  Token 过期 或 无效Token
                resolve(result.data);
            },
            fail: (err) => {
                reject(err);
            }
        })
    })
}
