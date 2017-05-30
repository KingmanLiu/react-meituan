/**
 * Created by yupeng on 17/5/29.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { fetchAd } from '../../../services/HomeAds'
import HomeAd from '../../components/HomeAd'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            AdList: []
        }
    }
    render() {
        console.log('AdList',this.state.AdList.length);
        return (
            <div>
                {
                    this.state.AdList.length === 0
                    ? <div>加载中...</div>
                    : <HomeAd AdList={this.state.AdList}/>
                }
            </div>
        )
    }

    componentDidMount() {
        fetchAd().then((AdList) => {
            if(AdList.length !== 0) {
                    this.setState({
                        AdList
                    })
                }
            }
        )
    }


}


function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps() {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
