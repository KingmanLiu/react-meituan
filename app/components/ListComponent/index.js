/**
 * Created by yupeng on 17/5/29.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let List = this.props.recommendList
        return (
            <div id="list-component">
                {
                    List.map((item, index) => (
                        <div key={index} className="item-container clear-fix">
                            <div className="img-container float-left">
                                <img src={item.img} alt="" />
                            </div>


                            <div className="item-right float-left">
                                <div className="aaa">ddddd</div>
                                {/*<div className="item-right-fist-row clear-fix">*/}
                                    {/*<h3 className="float-left">{item.title}</h3>*/}
                                    {/*<span className="float-right">{item.distance}</span>*/}
                                {/*</div>*/}
                                {/*<p className="subtitle">{item.subTitle}</p>*/}
                                {/*<div >*/}
                                    {/*<span className="price">¥{item.price}</span>*/}
                                    {/*<span>已售100</span>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

}



export default List
