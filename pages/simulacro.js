import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
const SAMPLE_TEXT = `We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers,
to personalise ads and content based on your interests, measure the performance of ads and content,
and derive insights about the audiences who saw ads and content.
Click below to consent to the use of this technology and the processing of your personal data for these purposes.
You can change your mind and change your consent choices at any time by returning to this site.`;
const EN_TEXT = "EN";
import Tooltip from '../components/tooltip/tooltip';
class Simulacro extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="simulacro-page">
                <div className="container-fluid">
                <div className="row wrap example ">
<div className="col-lg-4 col-md-4 col-sm-4 col-4 title-lang">
    <span className="title-lang">ES</span>
</div>
        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT}</span> </div>
        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT}</span> </div>

</div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;