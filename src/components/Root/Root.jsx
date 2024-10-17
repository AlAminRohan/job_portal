
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div >
            <Outlet></Outlet>
            <NavBar></NavBar>
        </div>
    );
};

export default Root;