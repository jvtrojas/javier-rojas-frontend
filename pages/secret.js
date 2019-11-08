import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {getSecretData, getSecretDataServer} from '../actions';

class Secret extends React.Component {

    static async getInitialProps({req}) {
        const anotherSecretData = await getSecretData(req);
        return {anotherSecretData};
        //const superSecretValue = 'super secret value';
        //return {superSecretValue};
    }

    constructor(props) {
        super(props);
        this.state = {
            secretData: []
        }
    }

    async componentDidMount() {
        const secretData = await getSecretData();
        this.setState({
            secretData
        });
    }

    displaySecretData() {
        const {secretData} = this.state;
        if(secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return(
                    <div key={index}>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                )
            })
        }
    }

    render() {
        const {superSecretValue} = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Secret page only for members!</h1>
                    <h2>{superSecretValue}</h2>
                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth()(Secret);