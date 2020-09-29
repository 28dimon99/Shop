/*


const ADD_PHONE = "ADD_PHONE";
const REMOVE_PHONE = "REMOVE_PHONE";

let initialState = {
    ready: false,
    items: []
}

export default (state = initialState, action)=>{
    switch (action.type){
        case ADD_PHONE:
            return{
                ...state,
                ready:true,
                items: [
                    ...state.items,
                    action.payload
                ]
            };

        case REMOVE_PHONE:
            return{
                ...state,
                items: state.items.filter(o.id !=action.payload.id)

            };
        default :
            return state;

    }
}
export const addPhone = (phones) => ({
    type: ADD_PHONE,
    payload: phones
})

export const removePhone = (phones) => ({
    type: REMOVE_PHONE,
    payload: phones
})*/
