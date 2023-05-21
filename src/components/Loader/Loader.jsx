import React from 'react'
import styles from './Loader.module.scss';
import { BiLoaderAlt } from 'react-icons/bi'

const Loader = () => {
    return (
        <div className={styles.container}>
            <span className={styles.rotate}><BiLoaderAlt /></span>
        </div>
    )
}

export default Loader