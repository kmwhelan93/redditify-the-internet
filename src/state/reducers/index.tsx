import {Action, combineReducers} from "redux";
import {ActionTypes} from "../actions/index";

export interface IAction {
    type: string;
    payload: any;
}

const showCommentsReducer = (state: boolean = false, action: IAction) => {
    switch(action.type) {
        case ActionTypes.SHOW_COMMENTS:
            return true;
        case ActionTypes.HIDE_COMMENTS:
            return false;
        case ActionTypes.TOGGLE_COMMENTS:
            return !state;
        default:
            return state;
    }
};

export const reducers = combineReducers({showComments: showCommentsReducer});