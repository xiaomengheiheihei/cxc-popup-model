const app = getApp()

Page({
  data: {
    showTitle: true,
    title: '我是标题',
    showModelFooter: true,
    popupHeight: '100%',
    direction: 'right',
    model: false
  },
  onLoad: function () {

  },
  showPopup () {
    this.selectComponent('#mypopup').showPopup()
  },
  hide () {
    this.selectComponent('#mypopup').hideModel()
  }
})
