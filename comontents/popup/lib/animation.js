/*
 * @Description: 弹框所需动画
 * @Author: carlos
 * @E-mail: xiaoshuangogo@163.com
 * @Date: 2020-03-09 18:02:23
 * @LastEditTime: 2020-03-10 15:38:00
 */

module.exports = {
    /**
     * @description: 
     * @param {_this} 可以传入组件对象
     * @param {opacity} 透明度
     * @param {delay} 动画延时
     * @param {show} show动画或者hide动画
     * @param {direction} 进入方向 可选自top、left、right、bottom
     * @param {distance} 偏移距离
     * @return: 
     */
    animationPopupShow: function (_this, opacity, delay, show, direction) {      // 弹出层show和hide动画
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: delay
        })
        function computeDirection (animation, opacity, direction, show) {
            switch (direction) {
                case 'top':
                    show ? animation.translateY(0).opacity(opacity).step() :
                    animation.translateY('-100%').opacity(opacity).step()
                    break;
                case 'bottom':
                    show ? animation.translateY(0).opacity(opacity).step() :
                    animation.translateY('100%').opacity(opacity).step()
                    break;
                case 'left':
                    show ? animation.translateX(0).opacity(opacity).step() :
                    animation.translateX('-100%').opacity(opacity).step()
                    break;
                case 'right':
                    show ? animation.translateX(0).opacity(opacity).step() :
                    animation.translateX('100%').opacity(opacity).step()
                    break;
                default:
                    break;
            }
            return animation
        }
        animation = computeDirection(animation, opacity, direction, show)
        return animation.export()
    },
    animationModelShow: function (_this, opacity, delay) {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: delay
        })
        animation.opacity(opacity).step()
        return animation
    }
}