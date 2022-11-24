import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, MovieDetail, SearchPage } from "./routes/index"
import { Navigation, Footer } from './components/index';
import { Context } from './context/context';
import './App.scss';

function App() {

  const { option } = useContext(Context)
    
  return (
    <div className="App"> 
        <Navigation />    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`${option}/:movieId`} element={<MovieDetail />} />  
          <Route path="/search/:query" element={<SearchPage />}/>        
          <Route path="*"                                           
            element={              
              <main style={{ padding: "1rem" }}>
                <p>Ooops something went wrong! Go to <Link to="/">Home page </Link>
                   or Go <span onClick={() => window.history.back()}>Back</span>
                </p>
              </main>
            }            
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
