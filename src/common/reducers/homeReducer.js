import Immutable from 'immutable';
import {
    REGISTER,
} from '../action/actionType';

const initState = Immutable.fromJS({
    user:{
        userName:"",
        userId:""
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
//

export function user(state=initState.get('user'),action){
    switch (action.type) {
        case REGISTER:
            return Immutable.fromJS(action.userMsg);
            break;
        default:
            return state;

    }
}
