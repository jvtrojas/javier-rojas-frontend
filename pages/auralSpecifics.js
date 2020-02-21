import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import BackgroundGrid from '../components/svg/background-grid';
import LanguageComponent from '../components/subtitles/language';
import EventTicket from '../components/event-ticket/eventTicket';
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
				<BackgroundGrid/>
                <div className="row wrap example no-horizontal-scroll no-padding-top">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-3 maxwidth">
                            <div className="title-head">
                                <h1 className="front-text">AUDITORY ARRAY</h1>
                                <p className="back-text">AUDITORY ARRAY</p>
                            </div>
                            </div>
                             {/* <div className="col-lg-6 col-md-4 col-sm-4 col-3 index">
                        <img className="gif" src="static/images/fondogifff.gif" alt="project 1 image"/>
                            </div> */}
                    </div>
                    <div className="row wrap example no-padding-top">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
							<LanguageComponent text="ES"/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content">{SAMPLE_TEXT_ES}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content">{SAMPLE_TEXT_ES}</span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content"><Tooltip word="hover me !" pop="hello" /></span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"></div>
                    </div>
                    <div className="row wrap example">
					<div className="col-lg-6 col-md-8 col-sm-12 col-12">
							<LanguageComponent text="EN"/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12"> <span className="text-content">{SAMPLE_TEXT}</span> </div>
                        {/* <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <span className="text-content">
                                <div className="variable">
                                    <span className="work">AURAL</span>SPECIFIC
                                </div>
                            </span>
                        </div> */}
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12 ">
                            </div>
                    </div>
                    <div className="row wrap example">
                    {/* <div className="col-lg-4 col-md-4 col-sm-4 col-3 index">
                        <img className="gif" src="static/images/fondogifff.gif" alt="project 1 image"/>
                            </div> */}
                        {/* <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
                        <img src="static/images/VISTASCOLOR-01-2.png" alt="project 1 image"/>
                            </div> */}
                    </div>
                    {/* GRAN VIDRIO */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
						<EventTicket/>
						</div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/gran-vidrio/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/gran-vidrio/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/gran-vidrio/pic3.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12">
						<iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fjavitorojas%2Fdnt-desfile-screenshoot-19072019-el-gran-vidrio-c%C3%B3rdoba-argentina%2F" frameborder="0" ></iframe>
                            </div>
                    </div>
                    {/* CASA BLANCA */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
						<EventTicket/>
						</div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/m5dpOmklgXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-8-1-lasalablanca-4hs-full-set%2F" frameborder="0" ></iframe>
                        </div>
                    </div>
                    {/* UNQUILLO */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
						<EventTicket/>
						</div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12  flex-col">
						<img src="static/images/unquillo/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12  flex-col">
						<img src="static/images/unquillo/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12  flex-col">
						<img src="static/images/unquillo/pic3.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12  flex-col">
						<img src="static/images/unquillo/pic4.jpg" alt="project 1 image"/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12  flex-col">
						<img src="static/images/unquillo/pic5.jpg" alt="project 1 image"/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2L4d7ZG6ze8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-82-unquillo-c%C3%B3rdoba%2F" frameborder="0" ></iframe>
                        </div>
                    </div>
                    {/* BSAS */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-3 title-lang">
						<EventTicket/>
						</div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/bsas/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/bsas/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/bsas/pic3.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12 flex-col">
						<img src="static/images/bsas/pic4.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Akc4sWYB75A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-81-sandroestudio-villa-crespo-caba%2F" frameborder="0" ></iframe>
                        </div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default AuralSpecifics;
