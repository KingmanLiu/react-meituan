/**
 * Created by yupeng on 17/5/28.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.less'
class HomeHeader extends React.Component {
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <i className="icon-home"/>
                    {this.props.cityName}
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-images"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"/>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader