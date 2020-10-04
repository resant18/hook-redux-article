import axios from "axios";

export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export const receiveArticles = (articles) => ({
   type: FETCH_ARTICLES_SUCCESS,
   articles   
});

export const receiveArticlesError = (error) => ({
   type: FETCH_ARTICLES_FAILURE,
   message: error.message || 'Something went wrong'
})

// export const fetchArticles = dispatch => {
//    return axios.get("api/article").then(
//       articles => dispatch(receiveArticles(articles)),
//       error => dispatch(receiveArticlesError(error))
//    )
// }


// export const fetchArticles = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve([
//             { id: 1, title: "The Battle of Trump and Coronavirus" },
//             { id: 2, title: "How Nails Grow" },
//             { id: 3, title: "How is Homeschool Affects Parenting "}
//          ])
//       }, 1000)   
//    })
// }

// export const fetchArticles = () => ({
//    articles: [
//       { id: 1, title: "The Battle of Trump and Coronavirus" },
//       { id: 2, title: "How Nails Grow" },
//       { id: 3, title: "How is Homeschool Affects Parenting " },
//    ]}
// );