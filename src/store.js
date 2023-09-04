import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);



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

