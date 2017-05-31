/**
 * Created by yupeng on 17/5/29.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="Home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.AdList.map((item, index) => {
                        return (
                        <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }



}



export default HomeAd
