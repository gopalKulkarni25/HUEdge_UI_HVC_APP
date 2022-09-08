import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ImageContainer from './containers/ImageContainer/ImageConatiner';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='first' element={<ImageContainer/>}></Route>
          <Route path='second' element={<p>second route</p>}></Route>
          <Route path='third'  element={<p>thirf route</p>}></Route>
          <Route path='fourth'  element={<p>fourth route</p>}></Route>
          <Route path='five'  element={<p>fifth route</p>}></Route>
          <Route path='*' element={<p>Page not found</p>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
