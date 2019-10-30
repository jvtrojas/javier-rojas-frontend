import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class Test extends React.Component {

    static async getInitialProps({query}) {
        const testId = query.id;
        return {testId};
    }

    render() {
        const { testId } = this.props;
        return (
            <BaseLayout>
                <h1> Test Page with id {testId} </h1>   
            </BaseLayout>
        )
    }
}

export default withRouter(Test);
