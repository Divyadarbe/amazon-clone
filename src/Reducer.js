
export const initialState={
    basket: [],
    user: null
};
export const getBasketTotal=(basket)=>
   basket?.reduce((amount,item)=>item.price+amount,0) ;

function Reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {...state, user: action.user}
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket,action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            // we copied the basket
            let newBasket = [...state.basket];
            // we check to see if product exists
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            if(index>= 0){
                //item exists in the basket
                newBasket.splice(index,1);
            }
            else{
                console.warn(`can't remove product(id: ${action.id}) as it doesn't exist`);
            }

            return {...state,
                 basket: newBasket};
            
        default:
            return state;    
    }
}
export default Reducer;