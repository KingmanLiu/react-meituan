import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionFromOtherFile from '../actions/userinfo';
import LocalStore from '../util/localStore';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:false
        }
    }
    render() {
        return (
            <div>
                {this.state.initDone ?
                    this.props.children
                    :
                    'loading...'
                }
            </div>
        )
    }

    componentDidMount(){
        //从localstorage里获取城市
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == undefined){
            cityName = '北京'
        }
        // 将城市信息存储到 Redux 中
        this.props.userInfoActions.login({
            cityName
        })
        this.setState({
            initDone:true
        })
    }
}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        //此处userInfoActionFromOtherFile可以包含多个action creator,接下来调用只需要userInfoActions.xxxx这样调用具体方法
        userInfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch)

        // 下面这种不使用bindActionCreator的写法,一对key:value只能调用一个方法,userInfoActions这样调用一个方法
        // userInfoActions:(state) => dispatch(userInfoActionFromOtherFile.login(state))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
