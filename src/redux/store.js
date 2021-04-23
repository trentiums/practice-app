import middlewares from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
      key: 'root',
      storage,
    }
    const persistedReducer = persistReducer(persistConfig, reducers)
    const store = createStore(persistedReducer, storeEnhancers(applyMiddleware(middlewares)))
    
export const persistor = persistStore(store);
export default store
