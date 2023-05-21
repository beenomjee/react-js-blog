import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <span>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</span>
        </footer>
    )
}

export default Footer