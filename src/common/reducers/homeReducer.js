import Immutable from 'immutable';
import {

} from '../action/actionType';

const initState = Immutable.fromJS({
    user:{
        },
});

// //今日服药
// export function todayMeds(state=initState.get('todayMeds'), action){
//     switch (action.type) {
//         case TODAYMEDICATION:
//             return Immutable.fromJS(action.meds);
//         default:
//             return state;
//
//     }
// }
