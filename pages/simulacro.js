import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import Link from 'next/link';
import withAuth from '../components/hoc/withAuth';
const SAMPLE_TEXT = `We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers,
to personalise ads and content based on your interests, measure the performance of ads and content,
and derive insights about the audiences who saw ads and content.
Click below to consent to the use of this technology and the processing of your personal data for these purposes.
You can change your mind and change your consent choices at any time by returning to this site.`;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";
import Tooltip from '../components/tooltip/tooltip';
class Simulacro extends React.Component {
    render() {
        const BsNavLink = (props) => {
            const { route, word1, word2 } = props;
            return (
                <Link href={route}>
                    <a className="nav-link port-navbar-link"><span className="work">{word1}</span>{word2}</a>
                </Link>
            )
        }

        return (
            <BaseLayout {...this.props.auth} >
                                {/* <div className="background-image">
                <img src="/static/images/background.png" />
                </div> */}
                <BasePage className="simulacro-page">
                <div className="container-fluid background">
                <div className="row wrap example">
                        <div className="col-lg-12 col-md-4 col-sm-4 col-3">
                        <span className="text-content">
                            <div className="variable">
                                <BsNavLink route="/auralspecifics" word1="AURAL" word2="SPECIFIC">
                                </BsNavLink>
                                <BsNavLink route="/brickgotic" word1="BRICK" word2="GOTIC">
                                </BsNavLink>
                                <BsNavLink route="/simulacro" word1="BRUTALIZER">
                                </BsNavLink>
                            </div>
                            </span>
                            </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 maxwidth">
                            <span className="title-lang">
                                <p>SIMULACRO</p>
                            </span>
                            </div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro;