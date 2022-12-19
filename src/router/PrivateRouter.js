import { Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const PrivateRouter = ({ children, isAuth }) => {
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
export default PrivateRouter;