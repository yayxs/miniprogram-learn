// page/classic/classic.js
import { HTTP } from '../../util/http.js';
let http = new HTTP();
Page({
  onLoad() {
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: {
    //     appkey: `zLInIPqV0qOnEMKA`
    //   },
    //   success: res => {
    //     console.log(res);
    //   }
    // });
    http.request({
      url: `classic/latest`,
      success: res => {
        console.log(res);
      }
    });
  }
});
