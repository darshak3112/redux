import { ADD_TO_CART } from '../Constants/constants'
const initialState = {
    cardData: []
}
export default function cardItems(state=[], action) {
    switch (action.type) {
        case ADD_TO_CART:
            //console.warn("reducer",action)
            return [
                ...state,
                { cardData: action.data }
            ]
        // eslint-disable-next-line
            break;
        default:
            return state
    }
}