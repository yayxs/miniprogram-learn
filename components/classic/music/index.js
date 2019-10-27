// components/classic/music/index.js
import { beh } from '../beh.js';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [beh],
  properties: {
    hidden: Boolean
  },
  // properties: {
  //   img: {
  //     type: String
  //   },
  //   content: {
  //     type: String
  //   }
  // },

  /**
   * 组件的初始数据
   */
  data: {
    play: './images/player@play.png',
    noplay: './images/player@pause.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {}
});
