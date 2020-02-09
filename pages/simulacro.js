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
                <div className="container-fluid testimonial-group">
                    <div className="row text-center flex-nowrap example">
                        <div className="col-4 title-lang align-self-center">{EN_TEXT}</div>
                        {/* <div className="col-4 text-content">
                        <Tooltip word="hover me!" pop="hello !!!!"/>
                        </div> */}
                        <div className="col-4 text-content align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 text-content align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 align-self-center"></div>
                        <div className="col-4 align-self-center"></div>
                        <div className="col-4 align-self-center"></div>
                        {/*

                        <div className="col-4"></div>
                        <div className="col-4"></div> */}
                    </div>
                    <div className="row text-center flex-nowrap example">
                        <div className="col-4 title-lang align-self-center">ES</div>
                        <div className="col-4 text-content align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 text-content align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 align-self-center">{SAMPLE_TEXT}</div>
                        <div className="col-4 align-self-center"></div>
                        <div className="col-4 align-self-center"></div>
                        <div className="col-4 align-self-center"></div>
                        <div className="col-4 align-self-center"></div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;