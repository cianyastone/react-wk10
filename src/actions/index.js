import { 
//    PREFER_ADD_ITEM,
//    PREFER_REMOVE_ITEM, 
   CART_ADD_ITEM,
   CART_REMOVE_ITEM,
   SET_ACTIVITY_DETAIL,
} from "../utils/constants"

import activities from "../json/activity.json";

export const AddCartItem = (dispatch, activity, qty) => {
    const item1 ={
        id: activity.id,
        name: activity.name,
        image: activity.image,
        price: activity.price,
        countInStock: activity.countInStock,
        qty,
    };
    dispatch({
        type: CART_ADD_ITEM,
        payload: item1,
    })
};

export const RemoveCartItem = (dispatch, activityId) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: activityId,
    });
};

export const SetActivityDetail = (dispatch, activityId, qty) => {
    const activity = activities.find(
        x => x.id === activity.id
    );

    if(qty ===0)
        dispatch({
            type: SET_ACTIVITY_DETAIL,
            payload:{
                activity,
            }
        })
    else
        dispatch({
            type: SET_ACTIVITY_DETAIL,
            payload:{
                activity,
                qty,
            }
        })
};


// function reducer(state, action) {
//    switch (action.type) {
//       case PREFER_ADD_ITEM:
//          const item = action.payload;
//          const activity = state.preferItems.find((x) => x.id === item.id);
//          if (activity) {
//             preferItems = state.preferItems.map((x) =>
//                x.id === activity.id ? item : x
//             );
//             return { ...state, preferItems };
//          }
//          preferItems = [...state.preferItems, item];
//          return { ...state, preferItems };
//       case PREFER_REMOVE_ITEM:
//          preferItems = state.preferItems.filter((x) => x.id !== action.payload);
//          return { ...state, preferItems };
//       case CART_ADD_ITEM:
//             const item1 = action.payload;
//             const activity1 = state.cartItems.find((x) => x.id === item1.id);
//             if (activity1) {
//                cartItems = state.cartItems.map((x) =>
//                   x.id === activity1.id ? item1 : x
//                );
//                return { ...state, cartItems };
//             }
//             cartItems = [...state.cartItems, item1];
//             return { ...state, cartItems };
//          case CART_REMOVE_ITEM:
//             cartItems = state.cartItems.filter((x) => x.id !== action.payload);
//             return { ...state, cartItems };   
//          case SET_PRODUCT_DETAIL:
//             return { ...state, productDetail: { ...state.productDetail, ...action.payload} };   
//       default:
//          return state;
//    }
// }

// export function StoreProvider(props) {
//    const [state, dispatch] = useReducer(reducer, initialState);
//    const value = { state, dispatch };

//    return (
//       <StoreContext.Provider value={value}>
//          {props.children}
//       </StoreContext.Provider>
//    );
// }