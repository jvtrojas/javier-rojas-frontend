import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
class Simulacro extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="simulacro-page">
                <div className="horizontal-scroll-wrapper squares">
                    <div className="title-lang" >EN</div>
                    <div>We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site.

</div>
                    <div>item 3</div>
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 6</div>
                    <div>item 7</div>
                    <div>item 8</div>
                    <div>item 9</div>
                </div>
                <div className="horizontal-scroll-wrapper bottom squares">
                    <div className="title-lang">ES</div>
                    <div>item 2</div>
                    <div>item 3</div>
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 6</div>
                    <div>item 7</div>
                    <div>item 8</div>
                    <div>item 9</div>

                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;