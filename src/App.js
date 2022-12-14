import { useContext } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SuccessModel from './components/SuccessModel/SuccessModel';
import ImageContainer from './containers/ImageContainer/ImageConatiner';
import InstanceContainer from './containers/InstanceContainer/InstanceContainer';
import ReviewContainer from './containers/ReviewContainer/ReviewContainer';
import SecurityContainer from './containers/SecurityContainer/SecurityContainer';
import StorageContainer from './containers/StorageContainer/StorageContainer';
import { MainContext } from './context/ImageContext/MainContext';


function App() {
  const {isAuthenticated} = useContext(MainContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='image' element={<ImageContainer/>}></Route>
          <Route path='instance' element={isAuthenticated ? <InstanceContainer/>: <Navigate to="/image"/>}></Route>
          <Route path='storage'  element={isAuthenticated ?<StorageContainer/>: <Navigate to="/image"/>}></Route>
          <Route path='security'  element={isAuthenticated ?<SecurityContainer/>: <Navigate to="/image"/>}></Route>
          <Route path='review'  element={isAuthenticated ? <ReviewContainer/> : <Navigate to="/image"/>}></Route>
          <Route path='*' element={<p>Page not found</p>}/>
        </Route>
        <Route path='/model' element={<SuccessModel/>}/>
      </Routes>
    </div>
  );
}

export default App;
