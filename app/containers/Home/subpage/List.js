/**
 * Created by yupeng on 17/5/29.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { fetchRecommendList } from '../../../services/HomeService'
import ListComponent from '../../../components/ListComponent'
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore:false,
            recommendList:[]
        }
    }
    render() {
        let { recommendList } = this.state;
        return (
            <div>
                <h2>猜你喜欢</h2>
                {
                    recommendList.length !== 0
                        ? <ListComponent recommendList={recommendList}/>
                        : <div>加载中</div>

                }
            </div>
        )
    }

    componentDidMount() {
        this._loadFirstPage()
    }

    _loadFirstPage() {
        let { cityName } = this.props;
        fetchRecommendList(cityName,0).then(
            (response) => {
                const { hasMore, data } = response;
                console.log('data',data)

                this.setState({
                    hasMore,
                    recommendList: data,
                })
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
)(List)
