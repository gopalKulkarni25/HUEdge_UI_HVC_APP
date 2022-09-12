import Header from '../Header/Header'
import RouterOutlet from '../RouterOutlet/RouterOutlet';
import CostConatiner from '../../containers/CostContainer/CostContainer'
import NavContainer from '../../containers/NavContainer/NavContainer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/image')
    },[])
    return (
        <>
        <div data-testid='home'>
            <Header heading="HVC"/>
            <NavContainer/>
            <CostConatiner/>
            <RouterOutlet/>
            </div>
        </>
    )
}

export default Home;