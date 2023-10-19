import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader'

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ element, condition, otherwiseRedirectTo='/', ...props  }) => {
  if(condition===undefined) return <Preloader/>;
  const conditionResult = (typeof condition === 'function')? condition(): Boolean(condition);
  return ( conditionResult ? element  : <Navigate to={otherwiseRedirectTo} replace/> );
}

export default ProtectedRoute;
