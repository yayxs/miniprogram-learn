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
  data: {
    first: false,
    latest: true
  },
  onLeft() {

  },
  onRight() {
    let index = this.data.data.index
    console.log(index)
   classicModel.getPre((res)=>{
     console.log(res)
     this.setData({
       data:res
     })
   },index)
  },
  onLike(ev) {
    console.log(ev)
    let flag = ev.detail.flag
    likeModel.like(flag, this.data.data.id, this.data.data.type)
  }

});