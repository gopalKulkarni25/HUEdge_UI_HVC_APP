import Header from '../Header/Header'
import RouterOutlet from '../RouterOutlet/RouterOutlet';
import CostConatiner from '../../containers/CostContainer/CostContainer'
import NavContainer from '../../containers/NavContainer/NavContainer';

const Home = (props) => {
    return (
        <>
            <Header heading="HVC"/>
            <NavContainer/>
            <CostConatiner/>
            <RouterOutlet/>
        </>
    )
}

export default Home;