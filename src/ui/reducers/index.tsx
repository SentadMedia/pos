import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default function createRootReducer(history: any) {
    return combineReducers<any, any>({
        router: connectRouter(history),
    });
}
