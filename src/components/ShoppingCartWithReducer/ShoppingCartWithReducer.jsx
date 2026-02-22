import { act, useReducer } from "react";

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
    items : [], // {id, name, price, quantity}
    totalAmount : 0,
    totalItems : 0,
};

const reducer = (state, action) => {
    
    console.log("Action dispatch : ", action);

    switch(action.type) {
        default: {
            return state;
        }

        case ADD_ITEM : {
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            )
            let updateItems;
            if(existingItemIndex >= 0) {
                updateItems = [...state.items];
                updateItems [existingItemIndex] = {
                    ...updateItems[existingItemIndex],
                    quantity : updateItems[existingItemIndex].quantity + 1,
                } 
            } else { 
                updateItems = [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity : 1,
                    }, 
                ];
            };
            return ({
                ...state,
                items : updateItems,
                totalAmount : updateItems.reduce((total, item) => total + item.price*item.quantity, 0),
                totalItems : updateItems.reduce((total, item) => total + item.quantity, 0), 
            });
        }

        case REMOVE_ITEM: {
            const filteredItems = state.items.filter(
                item => item.id !== action.payload.id
            )
            return {
                ...state,
                items : filteredItems,
                totalAmount : filteredItems.reduce((total, item) => total + item.price*item.quantity, 0),
                totalItems : filteredItems.reduce((total, item) => total + item.quantity, 0)
            } 
        }

        case UPDATE_QUANTITY: {
            if (action.payload.quantity === 0) {
                return reducer(state, {
                    type : "REMOVE_ITEM",
                    payload : {id: action.payload.id},
                })
            }
            const updateQuantityItems = state.items.map((item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item);
            
            return {
                ...state,
                items : updateQuantityItems,
                totalAmount : updateQuantityItems.reduce((total, item) => total + item.price * item.quantity, 0),
                totalItem : updateQuantityItems.reduce((total, item) => total + item.quantity, 0),
            }
        }

        case CLEAR_CART : {
            return initialState;
        } 
    };
};

export const ShoppingCartWithReducer = () => {
    const [currentState, dispatch] = useReducer(reducer, initialState);

    const products = [
        {id: 1, name: 'React Course', price: 40.44},
        {id: 2, name: 'Vue Course', price: 30.33},
        {id: 3, name: 'JS Course', price: 20.22},
    ];
    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name} - ${product.price}</h3>
                    <button onClick={() => dispatch ({
                        type : ADD_ITEM,
                        payload : product,
                    })
                    }>Add to Cart</button>
                </div>
            ))}
            <div>
                <h2>Shopping Cart</h2>
                {currentState.items.lenght === 0 ? (
                    <p>Your Cart is empty</p>
                    ) : (
                        <div>
                            {
                                currentState.items.map((item) => (
                                    <div key={item.id}>
                                        <p>
                                            {item.name} - ${item.price} X {item.quantity}
                                        </p>
                                        <button onClick={() => dispatch({
                                            type : UPDATE_QUANTITY,
                                            payload : {id : item.id, quantity : item.quantity + 1},

                                        })}>+</button>
                                         <button onClick={() => dispatch({
                                            type : UPDATE_QUANTITY,
                                            payload : {id : item.id, quantity : item.quantity - 1},

                                        })}>-</button>
                                        <button onClick={() => dispatch({
                                            type : REMOVE_ITEM,
                                            payload : {id : item.id}
                                        })}>Remove</button>
                                    </div>
                                ))}
                        </div>
                    )}
                    <h3>Total Items : {currentState.totalItems}</h3>
                    <h3>Total Amount : {currentState.totalAmount.toFixed(2)}</h3>
                    {currentState.items.length > 0 && (
                        <button onClick={() => dispatch({type : CLEAR_CART})}>Clear Cart</button>
                    )}
            </div>
        </div>
    );
};