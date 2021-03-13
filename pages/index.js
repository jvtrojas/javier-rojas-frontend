import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import LanguageComponent from '../components/subtitles/language';
import EventTicket from '../components/event-ticket/eventTicket';
import withAuth from '../components/hoc/withAuth';
import Tooltip from '../components/tooltip/tooltip';

const SAMPLE_TEXT = `AuralArk is the division of the creative platform simulacro focused on how space is perceived in sonic performances. We are in the search of futuristic spaces to experiment media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows. By researching the aural architecture attributes of a venue, and relating to the will of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology. `;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";


class Index extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="auralspecifics-page">
                <div className="container-fluid">
                {/* HEADER */}
                    <div className="row header-container wrap example">
                        <div>
                            <div className="header-anchor black-background">
                                <a href="#">HOME!!</a>                       
                            </div>
                        </div>
                        <div>
                            <div className="header-anchor aural-logo-header">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                        </div>
                        <div>
                            <div className="header-anchor black-background">
                                <a href="#">VISUAL!!</a>                       
                            </div>
                        </div>
                        <div>
                            <div className="header-anchor aural-logo-header">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                        </div>
                            <div>
                            <div className="header-anchor black-background">
                                <a href="#">ABOUT!!</a>                       
                            </div>
                            </div>
                        <div className="header-anchor aural-logo-header">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                    </div>
                    
                {/* Row 1 */}
                    <div className="row row-no_top_padding wrap example">
                        <div className="border-block">

                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                    </div>

                {/* Row 2 */}
                    <div className="row wrap example">
                        <div className="border-block">

                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                    </div>

                {/* Row 3 */}
                    <div className="row wrap example">
                        <div className="border-block">

                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">
                        
                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                        <div className="border-block">

                        </div>
                    </div>

                {/* FIND US AT */}
                    <div className="row wrap example">
                        <div className="col-lg-7 col-md-8 col-sm-4 col-12">
                            <div className="info-title">
                                <h1>FIND</h1>
                                <h1>US at:</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style find-us-white-square">
                            <span className="text-content">
                                <p>
                                    Instagram: <a href="https://www.instagram.com/simulacro._/">@SIMULACRO</a>
                                </p>
                                <p>
                                    Email: <a href="mailto:hey.simulacro@gmail.com">hey.simulacro@gmail.com</a>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default Index;


