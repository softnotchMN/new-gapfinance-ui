import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthorized } = useSelector((state) => state.auth);
  if (!isAuthorized) {
    return (
      <Navigate
        to={{ pathname: '/login', state: { from: children.location } }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
