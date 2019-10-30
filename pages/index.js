import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
            console.log(userData)
        } catch(err) {
            console.log(err);
        }
        return {initialData: [1,2,3], userData};
    }

    constructor(props) {
        super(props);
        this.state = {
            title: 'Index Page'
        }
    }

    updateTitle() {
        this.setState({ title: 'new Index title' })
    }
    render() {
        const   me                              = this,
                state                           = me.state,
                props                           = me.props,
                {title}                         = state,
                {initialData, userData}         = props;     
        return (
            <BaseLayout>
                <h1>{title}</h1>
                <h1>{userData.title}</h1>
                <button onClick={() => {this.updateTitle()}}> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
