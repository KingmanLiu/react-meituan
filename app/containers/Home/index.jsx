import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../components/HomeHeader';
import Category from '../components/Category'
import { connect } from 'react-redux'
import Ad from '../../containers/Home/subpage/Ad'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <Ad/>
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
