import React, { useEffect, useMemo, useState } from 'react'
import styles from './Search.module.scss';
import { Loader, Post } from '../../components'
import { useHeaderStore, useSearchStore } from '../../store';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { MdFilterListAlt } from 'react-icons/md'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { formattedDate, getAllCategories, getAllDates, getAllPlaces } from '../../utils';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const { searchResults, searchText, isLoading } = useHeaderStore(store => store);
    const { category, date, onChangeFilter, place } = useSearchStore();
    const [filteredResults, setFilteredResults] = useState([]);
    const navigate = useNavigate();

    const filteredClassName = useMemo(() => classNames({
        [styles.filter]: true,
        [styles.selected]: date !== "all" || category !== 'all' || place !== 'all'
    }), [date, category, place]);

    useEffect(() => {
        onChangeFilter('category', 'all');
        onChangeFilter('date', 'all');
        onChangeFilter('place', 'all');
    }, [onChangeFilter, searchText])

    useEffect(() => {
        const arr = [];
        for (let searchResult of searchResults) {
            if (category !== 'all' && searchResult.category !== category) {
                searchResult = null;
            }
            if (place !== 'all' && searchResult.place !== place) {
                searchResult = null;
            }
            if (date !== 'all' && searchResult.date !== date) {
                searchResult = null;
            }
            if (searchResult) {
                arr.push(searchResult);
            }
        }
        setFilteredResults(arr);
    }, [searchResults, category, date, place])

    useEffect(() => {
        if (searchText === "")
            navigate('/');
    }, [navigate, searchText])

    return (
        isLoading ? <Loader /> :
            <div className={styles.container}>
                <h1>Search Results</h1>
                <div className={styles.bottom}>
                    <span>{filteredResults.length} Results</span>
                    <Menu direction='left' menuButton={<MenuButton className={filteredClassName}><MdFilterListAlt /></MenuButton>}>
                        <SubMenu label="Category">
                            <MenuItem onClick={e => onChangeFilter('category', 'all')} key={category}>All</MenuItem>
                            {
                                getAllCategories().map(category => (
                                    <MenuItem onClick={e => onChangeFilter('category', category)} key={category}>{category}</MenuItem>
                                ))
                            }
                        </SubMenu>
                        <SubMenu label="Date">
                            <MenuItem onClick={e => onChangeFilter('date', 'all')} key={category}>All</MenuItem>

                            {
                                getAllDates().map(date => (
                                    <MenuItem onClick={e => onChangeFilter('date', date)} key={date}>{formattedDate(date)}</MenuItem>
                                ))
                            }
                        </SubMenu>
                        <SubMenu label="Place">
                            <MenuItem onClick={e => onChangeFilter('place', 'all')} key={category}>All</MenuItem>
                            {
                                getAllPlaces().map(place => (
                                    <MenuItem onClick={e => onChangeFilter('place', place)} key={place}>{place}</MenuItem>
                                ))
                            }
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.postContainer}>
                    {
                        filteredResults.length > 0 ? (
                            filteredResults.map((post, index) => (
                                <Post key={index} post={post} />
                            ))
                        ) : (
                            <p>No Result Found!</p>
                        )
                    }
                </div>
            </div>

    )
}

export default Search