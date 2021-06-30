//import { SwitchCameraTwoTone } from "@material-ui/icons";

export const initialState = {
    basket: [],
    user: null,
    product: [{
        title: 'T-Shirt',
        imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        body: 'This is a very nice Shirt',
    },
    {
        title: 'Food',
        imageUrl: 'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=',
        body: 'This are some foods',
    }],
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {


    console.log(action);

    switch(action.type) {
        case "Set_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
         //logic to add to basket
         return {
             ...state,
            basket: [...state.basket,action.id],
         };
        case  "REMOVE_FROM_BASKET":
            //logic to remove from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

                if(index >= 0) {
                    newBasket.splice(index, 1);
                }
                else {
                    console.warn(
                        'cant remove product (id: ${action.id}) as its not in basket'
                    );
                }

            return {...state,
            basket: newBasket,
        };
         default:
                return state;
    }
}

export default reducer;