import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
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
class AuralSpecifics extends React.Component {
    render() {
        // Random tree
    // const N = 300;
    // const gData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //     .filter(id => id)
    //     .map(id => ({
    //       source: id,
    //       target: Math.round(Math.random() * (id-1))
    //     }))
    // };

    // const Graph = ForceGraph3D()
    //   (document.getElementById('3d-graph'))
    //     .graphData(gData);

        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="auralspecifics-page">
                <div className="container-fluid">
                <div className="row wrap example">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-3 maxwidth">
                            <span className="title-lang subtitle">
                                <p>AURAL SPECIFICS</p>
                            </span>
                            </div>
                             {/* <div className="col-lg-6 col-md-4 col-sm-4 col-3 index">
                        <img className="gif" src="static/images/fondogifff.gif" alt="project 1 image"/>
                            </div> */}
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
                            <span className="title-lang">ES</span>
                            </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 "> <span className="text-content">{SAMPLE_TEXT_ES}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_ES}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content"><Tooltip word="hover me !" pop="hello" /></span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/m5dpOmklgXs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang"><span className="title-lang">EN</span></div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT}</span> </div>
                        {/* <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <span className="text-content">
                                <div className="variable">
                                    <span className="work">AURAL</span>SPECIFIC
                                </div>
                            </span>
                        </div> */}
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12 ">
                                <div className="iframe-container">
                                    <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-82-unquillo-c%C3%B3rdoba%2F" frameBorder="0" ></iframe>
                                </div>
                            </div>
                    </div>
                    <div className="row wrap example">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-3 index">
                        <img className="gif" src="static/images/fondogifff.gif" alt="project 1 image"/>
                            </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
                        <img src="static/images/VISTASCOLOR-01-2.png" alt="project 1 image"/>
                            </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang"><span className="title-lang">BG</span></div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-81-sandroestudio-villa-crespo-caba%2F" frameBorder="0" ></iframe>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-82-unquillo-c%C3%B3rdoba%2F" frameBorder="0" ></iframe>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-8-1-lasalablanca-4hs-full-set%2F" frameBorder="0" ></iframe>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fteatro-de-lo-imaginario%2F" frameBorder="0" ></iframe>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Ffantasia-final-ii%2F" frameBorder="0" ></iframe>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fnot-only-a-still-body%2F" frameBorder="0" ></iframe>
                            </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang"><span className="title-lang">DE</span></div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <img src="https://www.dropbox.com/s/pnga0b3ng3c92m3/Photo%2002.12.17%2C%2011%2052%2011.jpg?raw=1" alt="project 1 image"/>
                        </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang"><span className="title-lang">DE</span></div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <img src="https://www.dropbox.com/s/pnga0b3ng3c92m3/Photo%2002.12.17%2C%2011%2052%2011.jpg?raw=1" alt="project 1 image"/>
                        </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang"><span className="title-lang">DE</span></div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT_DE}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <img src="https://www.dropbox.com/s/pnga0b3ng3c92m3/Photo%2002.12.17%2C%2011%2052%2011.jpg?raw=1" alt="project 1 image"/>
                        </div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default AuralSpecifics;
