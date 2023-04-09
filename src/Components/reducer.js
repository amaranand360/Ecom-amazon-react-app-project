
export const initialState = {
    basket: [],
    user:null,
};



//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

  
const reducer = (state,action)=> {
    // console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //
            return { ...state, 
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR removingm CART
            const index = state.basket.findIndex(
                //Does any basket item match with the id of the clicked product
                (basketItem) => basketItem.id === action.id
              );
        
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1);
              } else {
                console.warn(
                  ` Can't remove (id: ${action.id}) as it's not in the basket`
                );
                /* 90:8:0.3 */
              }
              return {
                ...state,
                basket: newBasket,
              };

        case 'SET_USER':
          return {
            ...state,
            user: action?.user
          }

        default:
            return state;
    }   
}

export default reducer;