// page/classic/classic.js
// import { HTTP } from '../../util/http.js';
// let http = new HTTP();

import {
  ClassicModel
} from '../../models/classic';

import {
  LikeModel
} from '../../models/like';
let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({
  onLoad: function (options) {
    classicModel.getLatest(res => {
      console.log(res);
      this.setData({
        data: res
      });
    });
  },
  onLike(ev) {
    console.log(ev)
    let flag = ev.detail.flag
    likeModel.like(flag, this.data.data.id, this.data.data.type)
  }
  // onLoad() {
  //   classic.getLatest(res => {
  //     console.log(res);
  //   });
  //   // wx.request({
  //   //   url: 'http://bl.7yue.pro/v1/classic/latest',
  //   //   header: {
  //   //     appkey: `zLInIPqV0qOnEMKA`
  //   //   },
  //   //   success: res => {
  //   //     console.log(res);
  //   //   }
  //   // });
  //   // http.request({
  //   //   url: `classic/latest`,
  //   //   success: res => {
  //   //     console.log(res);
  //   //   }
  //   // });
  // }
});