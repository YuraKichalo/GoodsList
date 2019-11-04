import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import GoodsReducer from './GoodsReducer';

export default combineReducers({
    form: formReducer,
    images: GoodsReducer
})