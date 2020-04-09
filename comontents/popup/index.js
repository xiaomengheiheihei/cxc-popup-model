/*
 * @Description: Please
 * @Author: carlos
 * @E-mail: xiaoshuangogo@163.com
 * @Date: 2020-03-09 17:30:35
 * @LastEditTime: 2020-03-11 13:58:34
 */
const app = getApp()
const animationPopupUtil = require('./lib/animation').animationPopupShow
const animationModelUtil = require('./lib/animation').animationModelShow

Component({
    properties: {
        title: {            // 标题
            type: String,
            value: ''
        },
        showTitle: {        // 是否显示标题
            type: Boolean,
            value: false
        },
        showModelFooter: {  // 是否显示footer
            type: Boolean,
            value: false
        },
        popupHeight: {      // 弹出层高度
            type: String,
            value: '100%'
        },
        direction: {        // 弹出方向
            type: String,
            value: 'bottom'
        },
        mask: {             // 遮罩
            type: Boolean,
            value: false
        },
        model: {            // 是否为模态框
            type: Boolean,
            value: true
        }
    },
    data: {
        popupAnimation: '',
        modelAnimation: '',
        showMyPopup: false     // 弹窗层控制
    },
    ready: function () {

    },
    methods: {
        showPopup () {
            this.setData({
                popupAnimation: animationPopupUtil(this, 1, 0, true, this.data.direction),
            })
        },
        showModel () {
            this.setData({
                modelAnimation: animationModelUtil(this, 1, 0),
                showMyPopup: true
            })
        },
        hidePopup () {
            this.setData({
                popupAnimation: animationPopupUtil(this, 0, 0, false, this.data.direction),
            })
        },
        hideModel () {
            this.setData({
                modelAnimation: animationModelUtil(this, 0, 0),
                showMyPopup: false
            })
        },
        close () {
            this.setData({
                modelAnimation: animationModelUtil(this, 0, 0),
                showMyPopup: false
            })
        }
    },
})