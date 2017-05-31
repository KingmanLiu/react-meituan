import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category'
import { connect } from 'react-redux'
import Ad from '../Home/subpage/Ad'
import List from '../Home/subpage/List'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const cityName = this.props.userInfo.cityName;
        return (
            <div>
                <HomeHeader cityName={cityName}/>
                <Category/>
                <div style={{height:'10px'}}/>
                <Ad/>
                <List cityName={cityName}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.userinfo
    }
}
function mapDispatchToProps() {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
