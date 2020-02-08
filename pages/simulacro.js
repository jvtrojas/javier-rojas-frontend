import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
const sampleText = `We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers,
to personalise ads and content based on your interests, measure the performance of ads and content,
and derive insights about the audiences who saw ads and content.
Click below to consent to the use of this technology and the processing of your personal data for these purposes.
You can change your mind and change your consent choices at any time by returning to this site.`
import Tooltip from '../components/tooltip/tooltip';
class Simulacro extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="simulacro-page">
                <div className="container-fluid testimonial-group">
                    <div className="row text-center flex-nowrap example">
                        <div className="col-sm-4 title-lang">EN</div>
                        <div className="col-sm-4 text-content">
                        <Tooltip word="hover me!" pop="hello !!!!"/>
                        </div>
                        <div className="col-sm-4 text-content">{sampleText}</div>
                        <div className="col-sm-4 text-content">{sampleText}</div>
                        <div className="col-sm-4">5</div>
                        <div className="col-sm-4">6</div>
                        <div className="col-sm-4">7</div>
                        <div className="col-sm-4">8</div>
                        <div className="col-sm-4">9</div>
                    </div>
                </div>
                <div className="container-fluid testimonial-group">
                    <div className="row text-center flex-nowrap example">
                        <div className="col-sm-4 title-lang">ES</div>
                        <div className="col-sm-4 text-content">{sampleText}</div>
                        <div className="col-sm-4 text-content">{sampleText}</div>
                        <div className="col-sm-4">4</div>
                        <div className="col-sm-4">5</div>
                        <div className="col-sm-4">6</div>
                        <div className="col-sm-4">7</div>
                        <div className="col-sm-4">8</div>
                        <div className="col-sm-4">9</div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;