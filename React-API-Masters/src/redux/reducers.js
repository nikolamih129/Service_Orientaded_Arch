import actionTypes from "./action-types";
import {combineReducers} from "redux";

export function listView(state = true, action) {
    switch (action.type) {
        case actionTypes.SET_LIST_VIEW:
         return action.payload;
        default:
            return state
    }
}

export function songs(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_SONGS:
         return [...action.payload];
         default:
            return state
    }
}

export function favoriteSongs(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE_SONG:
            return [...state, action.payload];
        case actionTypes.REMOVE_FAVORITE_SONG:
            return state.filter(song => action.payload.key !== song.key);
        case actionTypes.SET_FAVORITE_SONGS:
            return [...action.payload];
        default:
            return state
    }
}

export default combineReducers({
    listView,
    songs,
    favoriteSongs,
})