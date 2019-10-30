import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';

class Portfolio extends React.Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err) {
            console.log(err);
        }
        return { posts: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return(
                <li key={index}>
                    <Link as={`/portfolio/${post.id}`} href={'/portfolio/[id]'}>
                        <a> {post.title} </a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const me    = this,
        {posts}     = me.props;
        console.log(posts)
        return (
            <BaseLayout>
                <h1> Portfolios page </h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolio;