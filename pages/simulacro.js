import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
class Simulacro extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} headerType="index">
                <BasePage className="simulacro-page">
                    <div className="flex-container">
                        <div className="row1">1231212312</div>
                        <div className="row2">132312312</div>
                    </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;