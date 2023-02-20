import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isAuthenticated = useSelector(state => state.user.token);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    redirect('/authentication')
                )
            }
        />
    );
};

export default PrivateRoute;
