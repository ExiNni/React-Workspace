import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import NumberGuessingGame from './Game/NumberGuessingGame';
import MovieList from './Movie/MovieList';
import Todos from './TodoList/Todos'
import Quiz from './Game/Quiz'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/numberGuessingGame' element={<NumberGuessingGame />} />
            <Route path='/movie' element={<MovieList />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
