

const SET_PHONES = "SET_PHONES";
const SET_IS_READY = "SET_IS_READY";

let initialState ={
    isReady: false,
    items: []
}
export default (state= initialState, action) =>{
    switch (action.type){
        case SET_PHONES:
        return{
            ...state,
            items: action.payload,
            isReady: true
        };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
};
//action
export const setPhone = (items) => ({
    type: SET_PHONES,
    payload: items
})

