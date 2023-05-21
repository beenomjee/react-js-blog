import React, { useState } from 'react'
// import styles from './ProtectedRoute.module.scss';
import { Loader } from '../';

const ProtectedRoute = ({ element: Element }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        isLoading ? <Loader /> : <Element />
    )
}

export default ProtectedRoute;