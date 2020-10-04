import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleList = () => {   
   const articles = useSelector(state => state.articles);
   
   return (
      <div>
         <h2>
            Articles
            <Link to='articles/new' className='btn btn-primary float-right'>
               Create Article
            </Link>
         </h2>
         {
            articles.length && articles.map(article => (
               <div key={ article._id }>
                  <hr />
                  <h4><Link to={`/articles/${article._id}`}>{article.title}</Link></h4>
                  <small>id: {article._id}</small>
               </div>
            ))
         }
      </div>
   );
}

export default ArticleList;