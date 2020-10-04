import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import ArticleList from "./components/articles/ArticleList";
// import ArticleInfo from "./components/articles/ArticleInfo";
// import ArticleAdd from "./components/articles/ArticleAdd";
// import ArticleEdit from "./components/articles/ArticleEdit";

const App = () => {
   return (
      <div className='App'>
         <Router>
            <Navigation />
            <div className='container'>
               <Main />
            </div>
         </Router>
      </div>
   );
}

const Navigation = () => {
   return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
         <div className='container'>
            <ul className='navbar-nav mr-auto'>
               <li className='nav-item'>
                  <NavLink exact className='nav-link' activeClassName='active' to='/'>
                     Articles
                  </NavLink>
               </li>
               <li className='nav-item'>
                  <NavLink exact className='nav-link' activeClassName='active' to='/about'>
                     About
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
}

const Main = () => {
   return (
      <Switch>
         <Route exact path='/' component={ArticleList} />
         {/* <Route exact path='/articles/new' component={ArticleAdd} />
         <Route exact path='/articles/:_id' component={ArticleInfo} />
         <Route exact path='/articles/:_id/edit' component={ArticleEdit} /> */}
         <Route exact path='/about' component={About} />
      </Switch>
   );
}

export default App;
