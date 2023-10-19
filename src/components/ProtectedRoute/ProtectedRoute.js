import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader'

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ element, ...props  }) => {
  const user = React.useContext(CurrentUserContext);
  return ( user===undefined? <Preloader/> :  (user?.email ? element  : <Navigate to="/" replace/> ) )
}

export default ProtectedRoute;
