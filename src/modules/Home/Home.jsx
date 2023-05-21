import React, { useEffect } from 'react'
import styles from './Home.module.scss';
import { Post } from '../../components'
import { useHeaderStore, useHomeStore } from '../../store';

const Home = () => {
    const { getTrendingPosts, trendingPosts } = useHomeStore(store => store);
    const setSearchText = useHeaderStore(store => store.setSearchText)

    useEffect(() => {
        setSearchText('');
    }, [setSearchText])

    useEffect(() => {
        if (trendingPosts.length === 0)
            getTrendingPosts();
    }, [getTrendingPosts, trendingPosts.length])

    return (

        <div className={styles.container}>
            <h1>Trending News</h1>
            <div className={styles.postContainer}>
                {
                    trendingPosts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </div>

    )
}

export default Home