import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/list')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data.item
            })
        )
};
export const deleteItem = (id) => dispatch => {
    axios.delete(`/removeFromList/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
};
export const addItem = (item) => dispatch => {
    axios.post('/addToList', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data.item
            })
        )
};
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};