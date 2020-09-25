

const SET_PHONES = "SET_PHONES";
const SET_IS_READY = "SET_IS_READY"


let initialState ={
    isReady: false,
    items: null
}

export const phoneReducers = (state= initialState, action) =>{
    switch (action.type){
        case SET_PHONES:
        return{
            ...state,
            items: action.payload,
            isReady: true
        };
        case SET_IS_READY:
            return {
                isReady: action.payload
            };
        default:
            return state;
    }
};
//action
export const setPhone = (phones) => ({
    type: SET_PHONES,
    payload: phones
})