import {
    DELETE,
    CLOSE_POPUP,
    SHOW_POPUP,
    ADD}
from '../actions/types';

const INITIAL_STATE = {
    imagesList: [
        {src: 'images/druzi_cafe.png', alt: 'Druzi cafe', description: 'american and european food', time: '30-40 min'},
        {src: 'images/hot_dogs.png', alt: 'Yizha', description: 'american burgers and hot dogs, street food', time: '35-45 min'},
        {src: 'images/mac.png', alt: 'McDonalds', description: 'burgers', time: '25-35 min'},
        {src: 'images/milk_bar.png', alt: 'Milk bar', description: 'deserts, european food', time: '15-20 min'}
    ],
    showPopup: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE:
            return {...state, imagesList: state.imagesList.filter((img, index) => action.payload !== index)};
        case CLOSE_POPUP:
            return {...state, showPopup: false};
        case SHOW_POPUP:
            return {...state, showPopup: true};
        case ADD:
            return {...state, imagesList: [...state.imagesList, action.payload]};
        default:
            return state;
    };
};