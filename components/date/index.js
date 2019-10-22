// components/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type:Number,
      observer(newValue, oldValue, ownerInstance, instance){
        let val = newValue < 10 ? `0${newValue}` : newValue
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  attached: function () {
    // 在组件实例进入页面节点树时执行
    let date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth()
    console.log(m)
    this.setData({
      y,
      m:this.data.monthArr[m]
    })
  },
  data: {
    y: 0,
    m: "",
    _index:"",
    monthArr: [`一月`, `二月`, `三月`, `四月`, `五月`, `六月`, `七月`, `八月`, `九月`, `十月`, `十一月`, `十二月`]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})