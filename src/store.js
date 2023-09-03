import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
// import { combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// const initialState = {
//     user: null,
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_USER':
//             return { ...state, user: action.payload };
//         default:
//             return state;
//     }
// };

// export default combineReducers({
//     user: userReducer,
// });

