import { ADD_TODO } from '../constants/action-types';

export function addTodos(payload){
    return {type: ADD_TODO, payload}
}