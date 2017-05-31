/**
 * Created by yupeng on 17/5/29.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe';
import './index.less';
class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        let opt = {
            callback: function (index) {
                this.setState({index})
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe className='carousel' swipeOptions={opt}>
                    <div>
                        <ul className="category-page clear-fix">
                            <li className="spot">景点</li>
                            <li className="ktv">KTV</li>
                            <li className="shopping">购物</li>
                            <li className="life">生活服务</li>
                            <li className="sport">健身运动</li>
                            <li className="hair">美发</li>
                            <li className="children">亲子</li>
                            <li className="snack">小吃快餐</li>
                            <li className="buffet">自助餐</li>
                            <li className="bar">酒吧</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="category-page clear-fix">
                            <li className="spot">景点</li>
                            <li className="ktv">KTV</li>
                            <li className="shopping">购物</li>
                            <li className="life">生活服务</li>
                            <li className="sport">健身运动</li>
                            <li className="hair">美发</li>
                            <li className="children">亲子</li>
                            <li className="snack">小吃快餐</li>
                            <li className="buffet">自助餐</li>
                            <li className="bar">酒吧</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="category-page clear-fix">
                            <li className="spot">景点</li>
                            <li className="ktv">KTV</li>
                            <li className="shopping">购物</li>
                            <li className="life">生活服务</li>
                            <li className="sport">健身运动</li>
                            <li className="hair">美发</li>
                            <li className="children">亲子</li>
                            <li className="snack">小吃快餐</li>
                            <li className="buffet">自助餐</li>
                            <li className="bar">酒吧</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="page-divider">
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : ''}/>
                        <li className={this.state.index === 1 ? 'selected' : ''}/>
                        <li className={this.state.index === 2 ? 'selected' : ''}/>
                    </ul>
                </div>
            </div>

        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = Category