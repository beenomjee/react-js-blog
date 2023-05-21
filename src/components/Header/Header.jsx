import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdSearch, MdOutlineClose } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './Header.module.scss'
import { useHeaderStore } from '../../store'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { searchText, onSearchTextChange, isLoading } = useHeaderStore(store => store)
    const navigate = useNavigate();

    const onFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <header className={styles.container}>
            <div className={styles.topLine}></div>
            <div className={styles.wrapper}>
                <button onClick={e => setIsNavOpen(p => !p)} className={styles.menu}>{isNavOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt2 />}</button>
                <Link to="/" className={styles.logo}>
                    <img src="/imgs/logo.png" alt="LOGO" />
                    <span>news</span>
                    <span>feed</span>
                </Link>
                <nav className={isNavOpen ? styles.show : ''}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <form onSubmit={onFormSubmit} className={styles.search}>
                    <input onChange={e => onSearchTextChange(e, navigate)} value={searchText} type="text" placeholder='Search' required />
                    {isLoading ? <AiOutlineLoading3Quarters className={styles.rotate} /> : <MdSearch />}
                </form>
                <div className={styles.buttons}>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header