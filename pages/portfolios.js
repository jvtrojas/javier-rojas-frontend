import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
//import {Link} from '../routes';
import BasePage from '../components/BasePage';
import Link from 'next/link';
import {Col, Row, Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';

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
//route="portfolio" params={{id: post.id}}
    renderPosts(posts) {
        return posts.map((post, index) => {
            return(
                <Col md="4">
                <React.Fragment key={index}>
                    <span>
                    <Card className="portfolio-card">
                        <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                        <CardBody>
                        <p className="portfolio-card-city"> Some Location {index} </p>
                        <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                        <CardText className="portfolio-card-text">Some Description {index}</CardText>
                        <div className="readMore"> </div>
                        </CardBody>
                    </Card>
                    </span>
                </React.Fragment>
                </Col>
            )
        })
    }
    render() {
        const me    = this,
        {posts}     = me.props;
        console.log(posts)
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="portfolio page">
                    <Row>
                        {this.renderPosts(posts)}
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolio;