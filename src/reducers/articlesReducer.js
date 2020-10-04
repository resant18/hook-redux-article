import * as ArticleAction from '../actions';

export default (state, action) => {    
   Object.freeze(state);
   const newState = Object.assign({}, state);

   switch (action.type) {
      case ArticleAction.FETCH_ARTICLES_SUCCESS:
         return action.articles;
      case ArticleAction.FETCH_ARTICLES_FAILURE:
         return action.message;
      default:
         return state;
   }
} 