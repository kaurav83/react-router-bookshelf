import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({user, component: Component, data, ...rest}) => {
    return (
        <div>
            <Route 
                {...rest} render={
                    props => (
                        user ?
                            <Component data={data} {...props} />
                            :
                            <Redirect to="/login" />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;