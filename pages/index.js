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
                            <div className="header-anchor">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                        </div>
                        <div>
                            <div className="header-anchor black-background">
                                <a href="#">VISUAL!!</a>                       
                            </div>
                        </div>
                        <div>
                            <div className="header-anchor">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                        </div>
                            <div>
                            <div className="header-anchor black-background">
                                <a href="#">ABOUT!!</a>                       
                            </div>
                            </div>
                        <div className="header-anchor">
                                <a href="#">AURAL_ARCHITECTURE!!</a>          
                            </div>
                    </div>
                    
                {/* ES */}
                    <div className="row wrap example">
                        <div className="col-lg-7 col-md-8 col-sm-4 col-12">
                            <div className="lang-title">
                                <h1>ES</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content">
                            <p>
                               <u>AuralArk</u> es un projecto centrado en cómo se percibe el espacio en las actuaciones sonoras. Estamos en busca de espacios futuristas para experimentar eventos mediáticos, un nuevo espacio hiperreal creado para la evolución de espectáculos audiovisuales e intermedia.
                            </p>
                            <p>
                            Al investigar los atributos de arquitectura auditiva de un lugar, y en relación con la voluntad del espectáculo, la cantidad de personas y las horas de funcionamiento, diseñamos entornos arquitectónicos específicos respaldados por tecnología de alta gama.
                            </p>
                            </span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style">
                        <span className="text-content">
                            <p>
                            Ofrecemos un sistema completo para transformar un lugar convencional en una nueva realidad de medios creada por la tecnología. El sistema de sonido multicanal 3D inmersivo, el mapeo arquitectónico, los sensores y la codificación creativa son algunas de las herramientas tecnológicas que utilizamos en la búsqueda de la experiencia artística total.
                            </p>
                            <p>
                            Nuestro sistema es adecuado para fines infinitos. Cine inmersivo, meditaciones sonoras, sesiones de escucha profunda, actuaciones artísticas, maratones de gabber o club de delirio inmersivo.
                            </p>
                            </span> </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style">
                        <span className="text-content">
                        <p>
                            Estamos interesados ​​en una fusión holística de espacio y experiencia multimedia desafiando los atributos espaciales de cada lugar.
                            </p>
                            <p>
                            Nuestro sistema es adecuado para fines infinitos. Cine inmersivo, meditaciones sonoras, sesiones de escucha profunda, actuaciones artísticas, maratones de gabber o club de delirio inmersivo. Estamos interesados ​​en una fusión holística de espacio y experiencia multimedia desafiando los atributos espaciales de cada lugar.
                            </p>
                            <p>
                            Este proyecto es creado por la colaboración del arquitecto/artista audiovisual Javier Rojas y el ingeniero electrónico/artista sonoro Maximiliano Fried.
                            </p>
                        </span> </div>
                    </div>
                {/* GRAN VIDRIO */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 col-style">
                        <div className="ticket-box">
                            <span className="text-content white-space">
                                <p className="ticket-info">@EL GRAN VIDRIO - ART GALLERY</p>
                                <p className="ticket-info">Córdoba, Argentina</p>
                                <p className="ticket-info">DNT - FASHION SHOW</p>
                                <p className="ticket-info">200 people</p>
                                <p className="ticket-info">X4 speakers </p>
                                <p className="ticket-info">1 subsound</p>
                            </span>
                        </div>
						</div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/gran-vidrio/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/gran-vidrio/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/gran-vidrio/pic3.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-8 col-sm-12 col-12">
						<iframe className="mixcloud-style" width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fjavitorojas%2Fdnt-desfile-screenshoot-19072019-el-gran-vidrio-c%C3%B3rdoba-argentina%2F" frameBorder="0" ></iframe>
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
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style">
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


