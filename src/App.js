import Header from './Components/Header';
import Search from './Components/Search';
import AllMovies from './Components/AllMovies';
import SingleMovie from './Components/SingleMovie';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return ( 
    <Router>
      <>
        <Header/>
        <Search/>
        <Routes>
          <Route exact path='/movies/:title' element={<AllMovies/>}></Route>
          <Route exact path='/byid/:id' element={<SingleMovie/>}></Route>
        </Routes>
        </>
    </Router>
  );
}

export default App;