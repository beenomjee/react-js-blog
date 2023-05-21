import React from 'react'
import { Link } from 'react-router-dom';
import { formattedDate } from '../../utils';
import styles from './Post.module.scss';


const Post = ({ post }) => {
    return (
        <div className={styles.container}>
            <img src={post.img} alt="Lorem Ipsum 8" />
            <div>
                <h2><Link to={`/post/${post.slug}`}>{post.title}</Link></h2>
                <p><span>{post.description}</span></p>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <span>{post.category}</span>
                        <span>{post.place}</span>
                    </div>
                    <span>Published on {formattedDate(post.date)}</span>
                </div>
            </div>
        </div>
    )
}

export default Post