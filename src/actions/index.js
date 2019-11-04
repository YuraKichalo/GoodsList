import {
    DELETE,
    CLOSE_POPUP,
    SHOW_POPUP,
    ADD} 
from './types';

export const deleteItem = (index) => {
    return {
        type: DELETE,
        payload: index
    }
};

export const close = () => {
    return {
        type: CLOSE_POPUP
    };
}

export const show = () => {
    return {
        type: SHOW_POPUP
    };
};

export const addItem = (item) => {
    return {
        type: ADD,
        payload: item
    };
};