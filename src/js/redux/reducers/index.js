import * as types from "../constants/actionTypes";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_ARTICLE: {
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        }
        default:
            return state
    }

}

export default rootReducer;