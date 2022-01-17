import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homecorousel from './components/Homecorousel';
import LatestTrending from './components/LatestTrending';
import PopularInCrime from './components/PopularInCrime';
import PopularInAction from './components/PopularInAction';
import BestOfSuperheroes from './components/BestOfSuperheroes';
import SingleMovieView from './components/SingleMovieView';
import PopularInRomance from './components/PopularInRomance';
import PopularInHorror from './components/PopularInHorror';
import MoreLikeThis from './components/MoreLikeThis';
import SearchedMovie from './components/SearchedMovie';
import SearchByGenre from './components/SearchByGenre';
import Subscription from './components/Subscription';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllMovies from './components/Allmovies';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>

      <Route exact path="/">
      <Homecorousel/>
      <LatestTrending/>
      <PopularInCrime/>
      <PopularInRomance/>
      <BestOfSuperheroes/>
      <PopularInHorror/>
      <PopularInAction/>

      </Route>
      <Route exact path="/movies/:movid">
      <SingleMovieView/>
      </Route>

      <Route exact path="/movies/category/romance">
      <PopularInRomance/>
      </Route>
      
      <Route exact path="/movies/search/:title">
      <SearchedMovie/>
      </Route>

      <Route exact path="/movies/genre/:genre">
      <SearchByGenre/>
      </Route>

      <Route exact path="/subscription">
      <Subscription/>
      </Route>
       
      <Route eact path="/AllMovies">
      <AllMovies/>
      </Route>

      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
