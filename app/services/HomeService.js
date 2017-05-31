/**
 * Created by yupeng on 17/5/30.
 */
import request from '../util/request';

export function fetchAd() {
    return request('./api/homead')
}

export function fetchRecommendList(city,page) {
    return request(`./api/homelist/${city}/${page}`)
}