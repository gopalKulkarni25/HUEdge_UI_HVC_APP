import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ImageContainer from './containers/ImageContainer/ImageConatiner';
import InstanceContainer from './containers/InstanceContainer/InstanceContainer';
import SecurityContainer from './containers/SecurityContainer/SecurityContainer';
import StorageContainer from './containers/StorageContainer/StorageContainer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='first' element={<ImageContainer/>}></Route>
          <Route path='second' element={<InstanceContainer/>}></Route>
          <Route path='third'  element={<StorageContainer/>}></Route>
          <Route path='fourth'  element={<SecurityContainer/>}></Route>
          <Route path='five'  element={<p>fifth route</p>}></Route>
          <Route path='*' element={<p>Page not found</p>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
