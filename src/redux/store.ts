import * as F from '@/redux/features/index';
import * as S from "./services/index"
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

// Combine reducers
const rootReducer = combineReducers({
    auth: F.authReducer, 
    [S.authApi.reducerPath]: S.authApi.reducer, 
});

// Configure Redux persist
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(
                S.authApi.middleware, 
            ),
});

// Create Redux persistor
export const persistor = persistStore(store);