import {ADD_TO_CART} from '../Constants/constants'
export const addToCard = (data) => {
    return {
        type:ADD_TO_CART, 
        data
    }
}