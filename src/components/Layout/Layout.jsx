import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout