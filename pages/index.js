import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import BackgroundGrid from '../components/svg/background-grid';
import LanguageComponent from '../components/subtitles/language';
import EventTicket from '../components/event-ticket/eventTicket';
import withAuth from '../components/hoc/withAuth';
const SAMPLE_TEXT = `AuralArk is the division of the creative platform simulacro focused on how space is perceived in sonic performances. We are in the search of futuristic spaces to experiment media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows.

By researching the aural architecture attributes of a venue, and relating to the will of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology. `;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";
import Tooltip from '../components/tooltip/tooltip';
class Index extends React.Component {
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
				{/* <BackgroundGrid/> */}
                <div className="row wrap example no-scroll padding">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-3 maxwidth">
                            <div className="title-head">
                                <h1 className="front-text">AURALARK</h1>
                                <p className="back-text">AURALARK</p>
                            </div>
                            </div>
                             {/* <div className="col-lg-6 col-md-4 col-sm-4 col-3 index">
                        <img className="gif" src="static/images/fondogifff.gif" alt="project 1 image"/>
                            </div> */}
                    </div>
                    <div className="row wrap example no-padding-top">
                    <div className="col-lg-7 col-md-8 col-sm-4 col-12">
                            <div className="lang-title">
                                <h1>EN</h1>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-8 col-sm-12 col-12">
							<LanguageComponent text="EN"/>
                        </div> */}
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style">
                            <span className="text-content">
                                <p>
                                <u>AuralArk</u> is an ongoing project focused on how space is perceived in sonic performances. We are in search of futuristic spaces for experimental media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows.
                                </p>
                                <p>
                                By researching the characteristics of the aural architecture of a venue, and relating to the objetives of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology.
                                </p>
                                <p>
                                We offer a complete system to transform a conventional venue into a new media reality created by technology, adapted to the physical and social properties of the space.
                                </p>
                            </span>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content">
                                <p>
                                Immersive 3D multichannel sound system, architectural mapping, sensors, and creative coding are some of the technological tools we use in the quest for total art experience.
                                </p>
                                <p>
                                Our system is suitable for infinite purposes. Immersive cinema, sonic meditations, deep listening sessions, artistic performances, gabber marathons or immersive rave club. We are interested in a holistic merge of space and multimedia experience challenging the spacial attributes of each place.
                                </p>
                                <p>
                               This project is created by the collaboration of architect/audiovisual artist Javier Rojas and electronic engineer/sound artist Maximiliano Fried.
                                </p>
                            </span> </div>
                        {/* <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style"> <span className="text-content"><Tooltip word="hover me !" pop="hello" /></span> </div> */}
                    </div>
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
                    {/* SALA BLANCA */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 col-style">
                        <div className="ticket-box">
                            <span className="text-content white-space-nowrap">
                                <p className="ticket-info">@LA SALA BLANCA - YOGA LOUNGE</p>
                                <p className="ticket-info">Córdoba, Argentina</p>
                                <p className="ticket-info">DEEP LISTENING 8.1</p>
                                <p className="ticket-info">20 people</p>
                                <p className="ticket-info">X8 speakers </p>
                                <p className="ticket-info">1 subsound</p>
                            </span>
                        </div>
						</div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="iframe-container video-style">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/m5dpOmklgXs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe className="mixcloud-style" width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-8-1-lasalablanca-4hs-full-set%2F" frameBorder="0" ></iframe>
                        </div>
                    </div>
                    {/* UNQUILLO */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 col-style">
                        <div className="ticket-box">
                            <span className="text-content white-space-nowrap">
                                <p className="ticket-info white-space-normal">@CENTRO DE ANIMACIÓN QUIRINO CRISTIANI</p>
                                <p className="ticket-info">Unquillo, Argentina</p>
                                <p className="ticket-info">DEEP LISTENING 8.2</p>
                                <p className="ticket-info">100 people</p>
                                <p className="ticket-info">X8 speakers </p>
                                <p className="ticket-info">2 subsound</p>
                            </span>
                        </div>
						</div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="iframe-container video-style">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2L4d7ZG6ze8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/unquillo/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/unquillo/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/unquillo/pic3.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/unquillo/pic4.jpg" alt="project 1 image"/>
                        </div>
                        {/* <div className="col-lg-6 col-md-9 col-sm-12 col-12">
						<img className="img-style" src="static/images/unquillo/pic5.jpg" alt="project 1 image"/>
                        </div> */}
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <iframe className="mixcloud-style" width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-82-unquillo-c%C3%B3rdoba%2F" frameBorder="0" ></iframe>
                        </div>
                    </div>
                    {/* BSAS */}
                    <div className="row wrap example">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 col-style">
                        <div className="ticket-box">
                            <span className="text-content white-space-nowrap">
                                <p className="ticket-info">@SANDRO PHOTOGRAPHY STUDIO</p>
                                <p className="ticket-info white-space-normal">Buenos Aires, Argentina</p>
                                <p className="ticket-info">DEEP LISTENING 8.1</p>
                                <p className="ticket-info">80 people</p>
                                <p className="ticket-info">X8 speakers </p>
                                <p className="ticket-info">1 subsound</p>
                            </span>
                        </div>
						</div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="iframe-container video-style">
                                <iframe className="mixcloud-style" width="560" height="315" src="https://www.youtube.com/embed/Akc4sWYB75A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/bsas/pic1.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/bsas/pic2.jpg" alt="project 1 image"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/bsas/pic3.jpg" alt="project 1 image"/>
                        </div>
						{/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img className="img-style" src="static/images/bsas/pic4.jpg" alt="project 1 image"/>
                        </div> */}
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <iframe className="mixcloud-style" width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FBRICK_GOTIC%2Fdeep-listening-81-sandroestudio-villa-crespo-caba%2F" frameBorder="0" ></iframe>
                        </div>
                    </div>
                    <div className="row wrap example">
                        <div className="col-lg-8 col-md-8 col-sm-4 col-12">
                            <div className="info-title">
                                <h1>BASIC</h1>
                                <h1>RIDER</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12 col-style">
                            <span className="text-content">
                                
                                    <p>2 turntables technics 1200 + cables + stylus</p>
                                    <p>2 pioneer cdj2000 nexus + cables + link cable</p>
                                    <p>8 Channel Mixer with direct output</p>
                                    <p>8 canon-plug cables</p>
                                    <p>8 plug cables for connecting speakers to audio interface</p>
                                    <p>Audio Motu Ultralite mk4 (optional)</p>
                                    <p>8 speakers (optimum) + cables to audio interface</p>
                                
                            </span>
                        </div>
                        <div className="col-lg-9 col-md-4 col-sm-4 col-12 basic-rider-pic">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="1041.574px" height="451.479px" viewBox="0 0 1041.574 451.479" enableBackground="new 0 0 1041.574 451.479"
        >
    <g>
        <g>
        <g>
            <g>
                <rect x="913.446" y="325.386" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.502"/>
                <rect x="913.446" y="325.386" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.502"/>
                <rect x="910.931" y="322.872" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.72" height="64.5"/>
                <rect x="910.932" y="322.872" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.721" height="64.5"/>
                <rect x="908.414" y="320.356" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.5"/>
                <rect x="908.415" y="320.356" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.721" height="64.5"/>
            </g>
            <g>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M974.044,352.606c0,16.209-13.145,29.355-29.355,29.355
                    c-16.214,0-29.357-13.146-29.357-29.355c0-16.212,13.144-29.355,29.357-29.355C960.899,323.251,974.044,336.395,974.044,352.606
                    "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M974.044,352.606c0,16.209-13.145,29.355-29.355,29.355
                    c-16.214,0-29.357-13.146-29.357-29.355c0-16.212,13.144-29.355,29.357-29.355C960.899,323.251,974.044,336.395,974.044,352.606
                    z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M946.936,352.606c0-1.242-1.009-2.248-2.247-2.248
                    c-1.241,0-2.249,1.006-2.249,2.248c0,1.236,1.008,2.248,2.249,2.248C945.927,354.854,946.936,353.843,946.936,352.606"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M946.936,352.606c0-1.242-1.009-2.248-2.247-2.248
                    c-1.241,0-2.249,1.006-2.249,2.248c0,1.236,1.008,2.248,2.249,2.248C945.927,354.854,946.936,353.843,946.936,352.606z"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="984.49" y1="352.606" x2="984.49" y2="380.568"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="984.49" y1="352.606" x2="984.49" y2="380.568"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="976.219" y1="328.677" x2="956.786" y2="366.589"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="976.219" y1="328.677" x2="956.786" y2="366.589"/>
                <rect x="808.211" y="325.386" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.724" height="64.502"/>
                <rect x="808.215" y="325.386" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.721" height="64.502"/>
                <rect x="805.697" y="322.872" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.72" height="64.5"/>
                <rect x="805.697" y="322.872" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.72" height="64.5"/>
                <rect x="803.18" y="320.356" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.719" height="64.5"/>
                <rect x="803.18" y="320.356" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.721" height="64.5"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M868.812,352.606c0,16.209-13.146,29.355-29.357,29.355
                    s-29.355-13.146-29.355-29.355c0-16.212,13.144-29.355,29.355-29.355S868.812,336.395,868.812,352.606"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M868.812,352.606c0,16.209-13.146,29.355-29.357,29.355
                    s-29.355-13.146-29.355-29.355c0-16.212,13.144-29.355,29.355-29.355S868.812,336.395,868.812,352.606z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M841.703,352.606c0-1.242-1.013-2.248-2.249-2.248
                    c-1.241,0-2.248,1.006-2.248,2.248c0,1.236,1.007,2.248,2.248,2.248C840.69,354.854,841.703,353.843,841.703,352.606"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M841.703,352.606c0-1.242-1.01-2.248-2.249-2.248
                    c-1.241,0-2.248,1.006-2.248,2.248c0,1.236,1.007,2.248,2.248,2.248C840.693,354.854,841.703,353.843,841.703,352.606z"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="879.256" y1="352.606" x2="879.256" y2="380.568"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="879.256" y1="352.606" x2="879.256" y2="380.568"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="870.987" y1="328.677" x2="851.554" y2="366.589"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="870.987" y1="328.677" x2="851.554" y2="366.589"/>
                <rect x="718.202" y="321.128" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="718.205" y="321.128" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="716.188" y="319.112" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="716.188" y="319.114" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.052" height="71.014"/>
                <rect x="714.174" y="317.098" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.053" height="71.017"/>
                <rect x="714.174" y="317.098" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.053" height="71.017"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M739.701,339.903c10.768,0,19.498,8.73,19.498,19.496
                    c0,10.77-8.73,19.497-19.498,19.497c-10.765,0-19.498-8.728-19.498-19.497C720.203,348.634,728.937,339.903,739.701,339.903z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M739.701,357.622c-0.982,0-1.779,0.799-1.779,1.781
                    c0,0.984,0.797,1.779,1.779,1.779c0.979,0,1.779-0.795,1.779-1.779C741.48,358.421,740.681,357.622,739.701,357.622z"/>
                <rect x="718.888" y="322.499" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="41.625" height="12.375"/>
                <rect x="653.433" y="321.128" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="653.433" y="321.128" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="651.417" y="319.112" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.054" height="71.014"/>
                <rect x="651.42" y="319.114" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.014"/>
                <rect x="649.403" y="317.098" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.051" height="71.017"/>
                <rect x="649.405" y="317.098" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="51.05" height="71.017"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="674.932" cy="359.4" r="19.497"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M674.932,357.622c-0.983,0-1.781,0.799-1.781,1.781
                    c0,0.984,0.798,1.779,1.781,1.779c0.979,0,1.777-0.795,1.777-1.779C676.709,358.421,675.911,357.622,674.932,357.622z"/>
                <rect x="654.118" y="322.499" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="41.623" height="12.375"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M814.709,236.767c2.848,4.156,8.52,5.214,12.676,2.37
                    c4.152-2.845,5.216-8.517,2.369-12.673c-2.845-4.15-8.521-5.213-12.674-2.371C812.924,226.937,811.863,232.614,814.709,236.767z
                    "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M817.811,234.644c1.673,2.441,5.01,3.065,7.451,1.395
                    c2.438-1.674,3.062-5.007,1.392-7.449c-1.675-2.442-5.009-3.065-7.447-1.396C816.766,228.868,816.137,232.201,817.811,234.644z"
                    />
                <polyline fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="822.054,232.571 819.278,247.396 823.836,233.7             
                    "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M821.039,232.431c0.103-0.557,0.636-0.918,1.194-0.813
                    c0.552,0.1,0.919,0.638,0.815,1.192c-0.104,0.555-0.638,0.922-1.193,0.816C821.298,233.521,820.933,232.988,821.039,232.431"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M824.727,234.048c0.17-0.501-0.104-1.041-0.605-1.207
                    c-0.501-0.168-1.045,0.103-1.21,0.603c-0.167,0.503,0.104,1.046,0.606,1.21C824.018,234.823,824.561,234.553,824.727,234.048"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="819.279" y1="247.396" x2="812.068" y2="285.942"/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="784.898,289.435 779.596,289.435 774.293,289.435
                    774.293,245.56 784.898,245.56               "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M776.57,191.56c0-1.673,1.356-3.023,3.025-3.023
                    c1.674,0,3.024,1.351,3.024,3.023v54h-6.05V191.56z"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="779.596" y1="301.781" x2="779.596" y2="289.437"/>
                <rect x="659.001" y="225.784" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.501"/>
                <rect x="659.001" y="225.784" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.502"/>
                <rect x="657.092" y="223.873" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.723" height="64.503"/>
                <rect x="657.092" y="223.873" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.723" height="64.503"/>
                <rect x="655.184" y="221.968" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.722" height="64.501"/>
                <rect x="655.185" y="221.968" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="89.721" height="64.504"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M689.209,231.872c0,12.795-10.369,23.168-23.166,23.168
                    c-12.799,0-23.171-10.373-23.171-23.168s10.372-23.17,23.171-23.17C678.84,208.702,689.209,219.077,689.209,231.872"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M689.209,231.872c0,12.795-10.369,23.168-23.166,23.168
                    c-12.799,0-23.171-10.373-23.171-23.168s10.372-23.17,23.171-23.17C678.84,208.702,689.209,219.077,689.209,231.872z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M757.144,231.872c0,12.795-10.372,23.168-23.169,23.168
                    c-12.796,0-23.17-10.373-23.17-23.168s10.374-23.17,23.17-23.17C746.771,208.702,757.144,219.077,757.144,231.872"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="733.974" cy="231.872" r="23.169"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M687.906,230.397c0,12.791-10.37,23.166-23.167,23.166
                    c-12.796,0-23.172-10.375-23.172-23.166c0-12.797,10.376-23.174,23.172-23.174C677.536,207.224,687.906,217.601,687.906,230.397
                    "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M687.906,230.397c0,12.791-10.37,23.166-23.167,23.166
                    c-12.796,0-23.172-10.375-23.172-23.166c0-12.797,10.376-23.174,23.172-23.174C677.536,207.224,687.906,217.601,687.906,230.397
                    z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M755.669,230.397c0,12.791-10.375,23.166-23.169,23.166
                    c-12.797,0-23.169-10.375-23.169-23.166c0-12.797,10.372-23.174,23.169-23.174C745.294,207.224,755.669,217.601,755.669,230.397
                    "/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M755.669,230.397c0,12.791-10.375,23.166-23.169,23.166
                    c-12.797,0-23.169-10.375-23.169-23.166c0-12.797,10.372-23.174,23.169-23.174C745.294,207.224,755.669,217.601,755.669,230.397
                    z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M735.031,230.397c0,1.398-1.131,2.533-2.533,2.533
                    c-1.4,0-2.536-1.135-2.536-2.533c0-1.402,1.136-2.535,2.536-2.535C733.9,227.862,735.031,228.995,735.031,230.397"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M735.031,230.397c0,1.398-1.131,2.533-2.533,2.533
                    c-1.4,0-2.536-1.135-2.536-2.533c0-1.402,1.136-2.535,2.536-2.535C733.9,227.862,735.031,228.995,735.031,230.397z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M667.275,230.397c0,1.398-1.138,2.533-2.536,2.533
                    c-1.4,0-2.537-1.135-2.537-2.533c0-1.402,1.137-2.535,2.537-2.535C666.138,227.862,667.275,228.995,667.275,230.397"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M667.275,230.397c0,1.398-1.138,2.533-2.536,2.533
                    c-1.4,0-2.537-1.135-2.537-2.533c0-1.402,1.137-2.535,2.537-2.535C666.138,227.862,667.275,228.995,667.275,230.397z"/>
                <rect x="691.789" y="270.595" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="19.015" height="4.977"/>
                <rect x="691.791" y="270.595" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="19.014" height="4.977"/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="1001.911,295.573 853.627,295.573 853.627,194.669
                    1001.911,194.669 1001.911,251.298               "/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="1001.911,295.573 853.629,295.573 853.629,194.669
                    1001.911,194.669 1001.911,251.298               "/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="998.842,292.506 850.559,292.506 850.559,191.601
                    998.842,191.601 998.842,248.23              "/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="998.842,292.506 850.559,292.506 850.559,191.601
                    998.842,191.601 998.842,248.23              "/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="995.773,289.435 847.488,289.435 847.488,188.532
                    995.773,188.532 995.773,245.161                 "/>
                <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="995.773,289.435 847.489,289.435 847.489,188.532
                    995.773,188.532 995.773,245.161                 "/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="995.773" y1="245.161" x2="847.489" y2="245.161"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="995.773" y1="245.161" x2="847.489" y2="245.161"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M855.402,195.083c0,0.777-0.631,1.406-1.407,1.406
                    s-1.404-0.629-1.404-1.406c0-0.775,0.628-1.404,1.404-1.404S855.402,194.308,855.402,195.083"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="853.997" cy="195.083" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M855.402,199.933c0,0.779-0.631,1.408-1.407,1.408
                    s-1.404-0.629-1.404-1.408c0-0.773,0.628-1.402,1.404-1.402S855.402,199.159,855.402,199.933"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M855.402,199.933c0,0.779-0.631,1.408-1.407,1.408
                    s-1.404-0.629-1.404-1.408c0-0.773,0.628-1.402,1.404-1.402S855.402,199.159,855.402,199.933z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M855.402,204.786c0,0.777-0.631,1.407-1.407,1.407
                    s-1.404-0.63-1.404-1.407c0-0.776,0.628-1.406,1.404-1.406S855.402,204.01,855.402,204.786"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="853.997" cy="204.786" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M879.848,219.528c0,0.778-0.629,1.407-1.405,1.407
                    c-0.779,0-1.406-0.629-1.406-1.407c0-0.773,0.627-1.405,1.406-1.405C879.219,218.123,879.848,218.755,879.848,219.528"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M879.848,219.528c0,0.778-0.629,1.407-1.405,1.407
                    c-0.778,0-1.406-0.629-1.406-1.407c0-0.773,0.628-1.405,1.406-1.405C879.219,218.123,879.848,218.755,879.848,219.528z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M879.848,224.38c0,0.777-0.629,1.408-1.405,1.408
                    c-0.779,0-1.406-0.631-1.406-1.408c0-0.775,0.627-1.404,1.406-1.404C879.219,222.976,879.848,223.604,879.848,224.38"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="878.442" cy="224.38" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M879.848,229.233c0,0.775-0.629,1.404-1.405,1.404
                    c-0.779,0-1.406-0.629-1.406-1.404c0-0.776,0.627-1.406,1.406-1.406C879.219,227.827,879.848,228.457,879.848,229.233"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="878.442" cy="229.233" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.931,219.558c-0.015,0.778-0.659,1.394-1.433,1.378
                    c-0.777-0.015-1.393-0.661-1.377-1.435c0.016-0.777,0.658-1.393,1.432-1.378C886.331,218.141,886.947,218.784,886.931,219.558"
                    />
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="885.526" cy="219.529" r="1.405"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M900.006,206.485c-0.018,0.777-0.661,1.393-1.436,1.378
                    c-0.776-0.015-1.393-0.659-1.377-1.437c0.019-0.773,0.659-1.391,1.435-1.375C899.406,205.068,900.02,205.709,900.006,206.485"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M900.006,206.485c-0.018,0.777-0.661,1.393-1.436,1.378
                    c-0.776-0.015-1.393-0.659-1.377-1.437c0.019-0.773,0.659-1.391,1.436-1.375C899.406,205.068,900.02,205.709,900.006,206.485z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.831,224.407c-0.016,0.777-0.659,1.396-1.436,1.379
                    c-0.775-0.016-1.391-0.657-1.375-1.437c0.017-0.774,0.662-1.388,1.437-1.374C886.232,222.993,886.849,223.635,886.831,224.407"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.831,224.407c-0.016,0.777-0.659,1.396-1.436,1.379
                    c-0.775-0.016-1.391-0.657-1.375-1.437c0.017-0.774,0.662-1.388,1.437-1.374C886.232,222.993,886.849,223.635,886.831,224.407z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.73,229.261c-0.016,0.776-0.658,1.391-1.433,1.375
                    c-0.777-0.011-1.394-0.656-1.375-1.435c0.015-0.772,0.656-1.388,1.433-1.374C886.131,227.839,886.747,228.482,886.73,229.261"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.73,229.261c-0.016,0.776-0.658,1.391-1.433,1.375
                    c-0.777-0.011-1.394-0.656-1.375-1.435c0.015-0.772,0.657-1.388,1.433-1.374C886.133,227.839,886.747,228.482,886.73,229.261z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M897.193,220.964c-0.014,0.775-0.656,1.393-1.432,1.378
                    c-0.778-0.015-1.394-0.657-1.378-1.436c0.016-0.775,0.659-1.39,1.435-1.375C896.594,219.548,897.212,220.187,897.193,220.964"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="895.789" cy="220.935" r="1.405"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M897.096,225.815c-0.017,0.775-0.659,1.393-1.434,1.377
                    c-0.777-0.015-1.394-0.66-1.379-1.435c0.016-0.774,0.662-1.39,1.436-1.378C896.494,224.396,897.109,225.04,897.096,225.815"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="895.689" cy="225.787" r="1.407"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M896.994,230.665c-0.016,0.78-0.658,1.395-1.434,1.379
                    c-0.777-0.016-1.391-0.66-1.374-1.436c0.012-0.776,0.657-1.393,1.432-1.375C896.398,229.247,897.011,229.89,896.994,230.665"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M896.994,230.665c-0.016,0.78-0.658,1.395-1.434,1.379
                    c-0.777-0.016-1.391-0.66-1.374-1.436c0.012-0.776,0.657-1.393,1.432-1.375C896.398,229.247,897.011,229.89,896.994,230.665z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.955,199.963c-0.016,0.779-0.658,1.396-1.435,1.378
                    c-0.774-0.015-1.391-0.656-1.374-1.434c0.016-0.777,0.658-1.393,1.432-1.377C925.356,198.547,925.973,199.188,925.955,199.963"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.955,199.963c-0.016,0.779-0.658,1.396-1.435,1.378
                    c-0.774-0.015-1.391-0.656-1.374-1.434c0.016-0.777,0.658-1.393,1.432-1.377C925.356,198.547,925.973,199.188,925.955,199.963z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.855,204.815c-0.016,0.774-0.657,1.394-1.436,1.378
                    c-0.774-0.017-1.391-0.661-1.374-1.438c0.015-0.774,0.659-1.39,1.435-1.376C925.256,203.398,925.873,204.04,925.855,204.815"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.855,204.815c-0.016,0.774-0.657,1.394-1.436,1.378
                    c-0.774-0.017-1.391-0.661-1.374-1.438c0.015-0.774,0.659-1.39,1.435-1.376C925.256,203.398,925.873,204.04,925.855,204.815z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.755,209.667c-0.016,0.777-0.657,1.39-1.433,1.375
                    c-0.778-0.012-1.393-0.656-1.378-1.436c0.017-0.773,0.66-1.389,1.437-1.373C925.155,208.245,925.772,208.889,925.755,209.667"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.755,209.667c-0.016,0.777-0.657,1.39-1.433,1.375
                    c-0.778-0.012-1.393-0.656-1.378-1.436c0.017-0.773,0.66-1.389,1.437-1.373C925.155,208.245,925.772,208.889,925.755,209.667z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M927.578,217.204c-0.023,1.23-1.038,2.207-2.27,2.18
                    c-1.227-0.025-2.204-1.042-2.177-2.271c0.022-1.227,1.042-2.201,2.27-2.178C926.63,214.962,927.605,215.974,927.578,217.204"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M927.578,217.204c-0.023,1.23-1.038,2.207-2.27,2.18
                    c-1.227-0.025-2.204-1.042-2.177-2.271c0.022-1.227,1.042-2.201,2.27-2.178C926.63,214.962,927.606,215.974,927.578,217.204z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M866.516,259.771c-0.015,0.772-0.659,1.389-1.435,1.376
                    c-0.777-0.015-1.39-0.66-1.374-1.437c0.015-0.775,0.656-1.389,1.432-1.374C865.916,258.352,866.532,258.989,866.516,259.771"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M866.516,259.771c-0.015,0.772-0.658,1.389-1.435,1.376
                    c-0.774-0.015-1.39-0.66-1.374-1.437c0.015-0.775,0.656-1.389,1.432-1.374C865.916,258.352,866.532,258.989,866.516,259.771z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M866.418,264.619c-0.018,0.776-0.659,1.394-1.438,1.375
                    c-0.775-0.015-1.391-0.657-1.375-1.433c0.018-0.773,0.66-1.389,1.436-1.379C865.816,263.2,866.434,263.841,866.418,264.619"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M866.418,264.619c-0.018,0.776-0.659,1.394-1.438,1.375
                    c-0.775-0.015-1.391-0.657-1.375-1.433c0.018-0.773,0.66-1.389,1.436-1.379C865.816,263.2,866.434,263.841,866.418,264.619z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M866.316,269.47c-0.018,0.776-0.658,1.393-1.434,1.377
                    c-0.777-0.015-1.395-0.66-1.377-1.435c0.016-0.776,0.659-1.392,1.435-1.378C865.716,268.05,866.332,268.694,866.316,269.47"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="864.911" cy="269.441" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M868.139,277.011c-0.024,1.226-1.038,2.205-2.27,2.178
                    c-1.228-0.027-2.203-1.043-2.175-2.271c0.022-1.227,1.038-2.203,2.268-2.18C867.19,274.764,868.166,275.78,868.139,277.011"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M868.139,277.011c-0.024,1.226-1.038,2.205-2.27,2.178
                    c-1.228-0.027-2.203-1.043-2.175-2.271c0.022-1.227,1.038-2.203,2.268-2.18C867.19,274.764,868.166,275.78,868.139,277.011z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M965.327,259.09c-0.013,0.774-0.656,1.39-1.432,1.376
                    c-0.778-0.013-1.393-0.658-1.375-1.437c0.016-0.774,0.657-1.39,1.433-1.375C964.73,257.673,965.346,258.312,965.327,259.09"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M965.327,259.09c-0.013,0.774-0.656,1.39-1.432,1.376
                    c-0.778-0.013-1.393-0.657-1.375-1.437c0.016-0.774,0.657-1.39,1.433-1.375C964.73,257.673,965.346,258.312,965.327,259.09z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M965.229,263.941c-0.015,0.775-0.659,1.392-1.435,1.374
                    c-0.774-0.016-1.393-0.659-1.377-1.432c0.017-0.773,0.661-1.391,1.437-1.379C964.63,262.521,965.245,263.162,965.229,263.941"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="963.824" cy="263.913" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M965.131,268.79c-0.018,0.778-0.661,1.393-1.436,1.378
                    c-0.776-0.015-1.393-0.661-1.376-1.437c0.016-0.775,0.657-1.391,1.435-1.376C964.53,267.372,965.147,268.015,965.131,268.79"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="963.725" cy="268.761" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M966.952,276.331c-0.023,1.228-1.039,2.207-2.269,2.18
                    c-1.229-0.028-2.205-1.043-2.178-2.271c0.022-1.229,1.041-2.205,2.27-2.18C966.005,274.083,966.978,275.101,966.952,276.331"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M966.952,276.331c-0.023,1.228-1.039,2.207-2.269,2.18
                    c-1.229-0.028-2.205-1.043-2.178-2.271c0.023-1.229,1.041-2.205,2.27-2.18C966.005,274.083,966.978,275.101,966.952,276.331z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M964.666,251.77c0.775,0.013,1.392,0.657,1.376,1.435
                    c-0.018,0.773-0.659,1.389-1.435,1.372c-0.775-0.015-1.393-0.655-1.377-1.433C963.247,252.368,963.89,251.753,964.666,251.77"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M964.666,251.77c0.775,0.013,1.392,0.657,1.376,1.435
                    c-0.018,0.773-0.659,1.389-1.435,1.372c-0.775-0.015-1.393-0.655-1.377-1.433C963.247,252.368,963.89,251.753,964.666,251.77z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M975.933,235.896c0.775,0.018,1.392,0.662,1.376,1.436
                    c-0.016,0.779-0.66,1.392-1.438,1.377c-0.772-0.016-1.388-0.66-1.375-1.434C974.513,236.499,975.155,235.882,975.933,235.896"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M975.933,235.896c0.775,0.018,1.392,0.662,1.376,1.436
                    c-0.016,0.779-0.66,1.395-1.438,1.377c-0.772-0.016-1.388-0.66-1.375-1.434C974.514,236.499,975.155,235.882,975.933,235.896z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M980.781,235.997c0.776,0.018,1.393,0.658,1.376,1.434
                    c-0.015,0.778-0.656,1.394-1.433,1.375c-0.775-0.014-1.391-0.656-1.378-1.434C979.363,236.597,980.006,235.981,980.781,235.997"
                    />
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="980.753" cy="237.401" r="1.405"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M988.321,234.175c1.229,0.024,2.205,1.038,2.18,2.27
                    c-0.027,1.229-1.044,2.204-2.272,2.178c-1.227-0.023-2.201-1.041-2.178-2.27C986.077,235.124,987.091,234.147,988.321,234.175"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M988.321,234.175c1.229,0.024,2.205,1.038,2.18,2.27
                    c-0.027,1.229-1.044,2.204-2.272,2.178c-1.227-0.023-2.201-1.041-2.178-2.27C986.077,235.124,987.091,234.147,988.321,234.175z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M932.72,281.286c0.775,0.016,1.394,0.658,1.378,1.437
                    c-0.016,0.774-0.66,1.39-1.436,1.374c-0.775-0.017-1.392-0.657-1.377-1.436C931.301,281.886,931.943,281.272,932.72,281.286"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="932.691" cy="282.691" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M937.571,281.386c0.775,0.019,1.395,0.659,1.378,1.435
                    s-0.66,1.392-1.437,1.378c-0.775-0.016-1.392-0.66-1.376-1.438C936.152,281.987,936.796,281.37,937.571,281.386"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M937.571,281.386c0.775,0.019,1.395,0.659,1.378,1.435
                    s-0.66,1.392-1.437,1.378c-0.775-0.016-1.391-0.66-1.376-1.438C936.152,281.987,936.796,281.37,937.571,281.386z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M942.422,281.485c0.776,0.018,1.392,0.662,1.376,1.434
                    c-0.013,0.779-0.658,1.395-1.435,1.379c-0.774-0.017-1.391-0.66-1.375-1.436C941.003,282.085,941.645,281.47,942.422,281.485"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M942.422,281.485c0.776,0.018,1.392,0.662,1.376,1.434
                    c-0.013,0.779-0.658,1.395-1.434,1.379c-0.775-0.017-1.392-0.66-1.376-1.436C941.003,282.085,941.645,281.47,942.422,281.485z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M949.961,280.669c1.228,0.021,2.207,1.037,2.181,2.268
                    c-0.028,1.229-1.043,2.205-2.272,2.176c-1.227-0.021-2.203-1.039-2.178-2.268C947.716,281.616,948.73,280.642,949.961,280.669"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M949.961,280.669c1.229,0.021,2.207,1.037,2.181,2.268
                    c-0.028,1.229-1.043,2.205-2.272,2.176c-1.227-0.021-2.203-1.039-2.178-2.268C947.716,281.616,948.73,280.642,949.961,280.669z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.399,284.27c0.016-0.775,0.659-1.392,1.436-1.379
                    c0.774,0.015,1.39,0.657,1.374,1.437c-0.017,0.774-0.658,1.391-1.434,1.375C925.997,285.685,925.382,285.046,925.399,284.27"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.399,284.27c0.016-0.775,0.659-1.392,1.436-1.379
                    c0.774,0.015,1.39,0.657,1.374,1.437c-0.017,0.774-0.658,1.391-1.434,1.375C925.997,285.685,925.382,285.046,925.399,284.27z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.5,279.417c0.016-0.775,0.657-1.391,1.436-1.377
                    c0.774,0.018,1.39,0.66,1.373,1.436c-0.014,0.771-0.661,1.391-1.436,1.379C926.1,280.837,925.483,280.194,925.5,279.417"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.5,279.417c0.016-0.775,0.657-1.391,1.436-1.377
                    c0.774,0.018,1.39,0.66,1.373,1.436c-0.014,0.771-0.661,1.391-1.436,1.379C926.1,280.837,925.483,280.194,925.5,279.417z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M925.6,274.566c0.017-0.776,0.658-1.394,1.433-1.376
                    c0.778,0.015,1.395,0.659,1.376,1.435c-0.015,0.776-0.659,1.391-1.435,1.376C926.199,275.985,925.583,275.343,925.6,274.566"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="927.005" cy="274.596" r="1.406"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M923.775,267.027c0.025-1.228,1.04-2.207,2.27-2.181
                    c1.229,0.029,2.203,1.043,2.178,2.271c-0.023,1.229-1.041,2.205-2.271,2.18C924.726,269.272,923.749,268.257,923.775,267.027"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M923.775,267.027c0.025-1.228,1.04-2.207,2.27-2.181
                    c1.229,0.029,2.203,1.043,2.178,2.271c-0.023,1.229-1.041,2.205-2.271,2.18C924.726,269.272,923.749,268.257,923.775,267.027z"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M863.603,201.384c-0.024,1.23-1.041,2.207-2.27,2.18
                    c-1.228-0.025-2.204-1.044-2.178-2.273c0.022-1.225,1.04-2.197,2.27-2.174C862.655,199.14,863.629,200.153,863.603,201.384"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M863.603,201.384c-0.024,1.23-1.041,2.207-2.27,2.18
                    c-1.228-0.025-2.204-1.044-2.178-2.273c0.022-1.225,1.04-2.197,2.27-2.174C862.655,199.14,863.629,200.153,863.603,201.384z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.551,258.079c0,1.18-0.955,2.135-2.132,2.135
                    c-1.179,0-2.136-0.955-2.136-2.135c0-1.181,0.957-2.136,2.136-2.136C885.596,255.943,886.551,256.898,886.551,258.079"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="884.417" cy="258.079" r="2.134"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.551,265.447c0,1.181-0.955,2.136-2.132,2.136
                    c-1.179,0-2.136-0.955-2.136-2.136c0-1.179,0.957-2.134,2.136-2.134C885.596,263.313,886.551,264.269,886.551,265.447"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="884.417" cy="265.447" r="2.134"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M886.551,272.817c0,1.18-0.955,2.137-2.132,2.137
                    c-1.179,0-2.136-0.957-2.136-2.137s0.957-2.137,2.136-2.137C885.596,270.681,886.551,271.638,886.551,272.817"/>
                <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="884.417" cy="272.817" r="2.134"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M899.01,267.649c-0.037,1.866-1.581,3.348-3.443,3.31
                    c-1.867-0.036-3.352-1.584-3.31-3.447c0.036-1.866,1.585-3.349,3.446-3.31C897.57,264.237,899.05,265.784,899.01,267.649"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M899.01,267.649c-0.037,1.866-1.581,3.348-3.443,3.31
                    c-1.867-0.036-3.352-1.584-3.31-3.447c0.036-1.866,1.585-3.349,3.446-3.31C897.57,264.237,899.05,265.784,899.01,267.649z"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M884.293,234.311c-0.025,1.229-1.037,2.206-2.27,2.179
                    c-1.227-0.024-2.202-1.042-2.176-2.271c0.024-1.226,1.041-2.202,2.269-2.174C883.346,232.067,884.321,233.083,884.293,234.311"
                    />
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M884.293,234.311c-0.025,1.229-1.037,2.206-2.268,2.179
                    c-1.229-0.024-2.204-1.042-2.178-2.271c0.024-1.226,1.042-2.202,2.269-2.174C883.346,232.067,884.321,233.083,884.293,234.311z"
                    />
                <rect x="932.421" y="251.793" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="25.982" height="25.983"/>
                <rect x="932.421" y="251.793" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="25.982" height="25.983"/>
            </g>
            <g>
                <rect x="774.566" y="145.286" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.861" height="33.752"/>
                <rect x="774.564" y="145.284" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.863" height="33.752"/>
                <rect x="772.537" y="143.259" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.861" height="33.752"/>
                <rect x="772.537" y="143.259" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.861" height="33.752"/>
                <rect x="770.213" y="140.94" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.863" height="33.749"/>
                <rect x="770.213" y="140.938" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="214.865" height="33.752"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="776.113" y1="161.753" x2="776.113" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="776.113" y1="161.753" x2="776.113" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="782.305" y1="161.753" x2="782.305" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="782.305" y1="161.753" x2="782.305" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="788.492" y1="161.753" x2="788.492" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="788.492" y1="161.753" x2="788.492" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="794.679" y1="161.753" x2="794.679" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="794.679" y1="161.753" x2="794.679" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="800.868" y1="161.753" x2="800.868" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="800.868" y1="161.753" x2="800.868" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="807.057" y1="161.753" x2="807.057" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="807.057" y1="161.753" x2="807.057" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="813.244" y1="161.753" x2="813.244" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="813.244" y1="161.753" x2="813.244" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="819.432" y1="161.753" x2="819.432" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="819.432" y1="161.753" x2="819.432" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="825.621" y1="161.753" x2="825.621" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="825.621" y1="161.753" x2="825.621" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="831.811" y1="161.753" x2="831.811" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="831.811" y1="161.753" x2="831.811" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="837.998" y1="161.753" x2="837.998" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="837.998" y1="161.753" x2="837.998" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="844.186" y1="161.753" x2="844.186" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="844.186" y1="161.753" x2="844.186" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="850.373" y1="161.753" x2="850.373" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="850.373" y1="161.753" x2="850.373" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="856.562" y1="161.753" x2="856.562" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="856.562" y1="161.753" x2="856.562" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="862.75" y1="161.753" x2="862.75" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="862.75" y1="161.753" x2="862.75" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="868.938" y1="161.753" x2="868.938" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="868.938" y1="161.753" x2="868.938" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="875.127" y1="161.753" x2="875.127" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="875.127" y1="161.753" x2="875.127" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="881.314" y1="161.753" x2="881.314" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="881.314" y1="161.753" x2="881.314" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="887.502" y1="161.753" x2="887.502" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="887.502" y1="161.753" x2="887.502" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="893.691" y1="161.753" x2="893.691" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="893.691" y1="161.753" x2="893.691" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="899.88" y1="161.753" x2="899.88" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="899.88" y1="161.753" x2="899.88" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="906.066" y1="161.753" x2="906.066" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="906.066" y1="161.753" x2="906.066" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="912.254" y1="161.753" x2="912.254" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="912.254" y1="161.753" x2="912.254" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="918.442" y1="161.753" x2="918.442" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="918.442" y1="161.753" x2="918.442" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="924.632" y1="161.753" x2="924.632" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="924.632" y1="161.753" x2="924.632" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="930.819" y1="161.753" x2="930.819" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="930.819" y1="161.753" x2="930.819" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="937.008" y1="161.753" x2="937.008" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="937.008" y1="161.753" x2="937.008" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="943.195" y1="161.753" x2="943.195" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="943.195" y1="161.753" x2="943.195" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="949.385" y1="161.753" x2="949.385" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="949.385" y1="161.753" x2="949.385" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="955.572" y1="161.753" x2="955.572" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="955.572" y1="161.753" x2="955.572" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="961.761" y1="161.753" x2="961.761" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="961.761" y1="161.753" x2="961.761" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="967.95" y1="161.753" x2="967.95" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="967.95" y1="161.753" x2="967.95" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="974.138" y1="161.753" x2="974.138" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="974.138" y1="161.753" x2="974.138" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="980.326" y1="161.753" x2="980.326" y2="174.689"/>
                <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="980.326" y1="161.753" x2="980.326" y2="174.689"/>
                <rect x="662.938" y="119.468" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.477" height="64.502"/>
                <rect x="662.939" y="119.468" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.479" height="64.502"/>
                <rect x="661.028" y="117.56" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.479" height="64.502"/>
                <rect x="661.031" y="117.56" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.477" height="64.502"/>
                <rect x="659.12" y="115.652" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.479" height="64.504"/>
                <rect x="659.12" y="115.652" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="74.479" height="64.504"/>
                <rect x="665.569" y="125.751" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="21.733" height="9.281"/>
                <rect x="665.571" y="125.751" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="21.733" height="9.281"/>
                <rect x="695.182" y="143.225" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="29.432" height="29.517"/>
                <rect x="695.182" y="143.225" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="29.432" height="29.517"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M686.606,157.985c0,5.617-4.552,10.166-10.167,10.166
                    c-5.617,0-10.17-4.549-10.17-10.166c0-5.619,4.553-10.17,10.17-10.17C682.055,147.815,686.606,152.366,686.606,157.985"/>
                <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M686.606,157.985c0,5.617-4.552,10.166-10.167,10.166
                    c-5.617,0-10.17-4.549-10.17-10.166c0-5.619,4.553-10.17,10.17-10.17C682.055,147.815,686.606,152.366,686.606,157.985z"/>
            </g>
        </g>
    </g>
</g>
<g>
    <g>
        <rect x="367.304" y="145.401" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.151" height="149.078"/>
        <rect x="367.305" y="145.401" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.152" height="149.078"/>
        <rect x="366.012" y="144.114" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.157" height="149.074"/>
        <rect x="366.012" y="144.114" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.157" height="149.074"/>
        <rect x="364.9" y="142.827" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.147" height="149.076"/>
        <rect x="364.901" y="142.827" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="228.148" height="149.076"/>
        <rect x="235.035" y="192.53" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.615" height="63.889"/>
        <rect x="235.035" y="192.53" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.615" height="63.889"/>
        <rect x="231.448" y="188.947" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.618" height="63.889"/>
        <rect x="231.448" y="188.947" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.618" height="63.889"/>
        <rect x="227.866" y="185.36" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.614" height="63.889"/>
        <rect x="227.866" y="185.36" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="88.614" height="63.889"/>
    </g>
    <g>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="342.771,408.858 207.592,408.858 207.592,355.376
            207.592,301.884 342.771,301.884 342.771,355.376         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="342.771,408.858 207.592,408.858 207.592,355.376
            207.592,301.884 342.771,301.884 342.771,355.376         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="338.591,404.681 203.414,404.681 203.414,351.196
            203.414,297.708 338.591,297.708 338.591,351.196         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="338.591,404.681 203.414,404.681 203.414,351.196
            203.414,297.708 338.591,297.708 338.591,351.196         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="334.413,400.501 199.234,400.501 199.234,347.019
            199.234,293.528 334.413,293.528 334.413,347.019         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="334.413,400.501 199.234,400.501 199.234,347.019
            199.234,293.528 334.413,293.528 334.413,347.019         "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="331.289,338.673 202.304,338.673 202.304,317.389
            202.304,296.105 331.289,296.105 331.289,317.389         "/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="334.413" y1="343.057" x2="199.234" y2="343.057"/>
        <rect x="242.616" y="373.082" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="48.411" height="23.39"/>
        <rect x="205.92" y="346.95" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" width="121.807" height="23.387"/>
       
            <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="381.589" y1="324.753" x2="338.984" y2="324.633"/>
       
            <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="275.759" y1="253.898" x2="275.759" y2="293.532"/>
        <polyline fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" points="128.892,278.22 128.892,221.592
            219.075,221.592         "/>
        <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="629.403,129.937 614.605,129.937
            614.605,390.591 627.488,390.591         "/>
    </g>
    <g opacity="0.4" enableBackground="new    ">
        <g>
            <defs>
                <rect id="SVGID_1_" x="369.032" y="149.589" width="219.073" height="137.75"/>
            </defs>
            <use href="#SVGID_1_"  overflow="visible" fill="#FFFFFF"/>
            <clipPath id="SVGID_2_">
                <use href="#SVGID_1_"  overflow="visible"/>
            </clipPath>
            <g clipPath="url(#SVGID_2_)">
                <defs>
                    <rect id="SVGID_3_" x="369.209" y="149.602" width="218.617" height="137.191"/>
                </defs>
                <use href="#SVGID_3_"  overflow="visible" fill="#FFFFFF"/>
                <clipPath id="SVGID_4_">
                    <use href="#SVGID_3_"  overflow="visible"/>
                </clipPath>
                <g clipPath="url(#SVGID_4_)">
                    <defs>
                        <rect id="SVGID_5_" x="369.208" y="149.601" width="218.618" height="137.192"/>
                    </defs>
                    <use href="#SVGID_5_"  overflow="visible" fill="#FFFFFF"/>
                    <clipPath id="SVGID_6_">
                        <use href="#SVGID_5_"  overflow="visible"/>
                    </clipPath>
                    <use href="#SVGID_5_"  overflow="visible" fill="none" stroke="#0000FF" strokeMiterlimit="10"/>
                </g>
                <use href="#SVGID_3_"  overflow="visible" fill="none" stroke="#0000FF" strokeMiterlimit="10"/>
            </g>
            <use href="#SVGID_1_"  overflow="visible" fill="none" stroke="#0000FF" strokeMiterlimit="10"/>
        </g>
    </g>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="276.305" y1="185.36" x2="276.305" y2="-2.713"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="252.689" y1="0" x2="252.689" y2="185.36"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="276.305" y1="185.36" x2="276.305" y2="0"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="268.434" y1="185.36" x2="268.434" y2="-2.713"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="268.434" y1="185.36" x2="268.434" y2="0"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="260.56" y1="185.36" x2="260.56" y2="-2.713"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="260.56" y1="185.36" x2="260.56" y2="0"/>
    <path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M252.689-2.713"/>
    <path fill="none" stroke="#0000FF" strokeMiterlimit="10" strokeDasharray="14" d="M252.689,185.36"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="252.689" y1="153.356" x2="250.158" y2="153.356"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="245.013" y1="153.356" x2="103.522" y2="153.356"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="98.422" y1="161.089" x2="98.422" y2="279.936"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="98.422" y1="275.69" x2="98.422" y2="278.22"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="106.292" y1="278.22" x2="106.292" y2="275.69"/>
   
        <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="106.292" y1="277.438" x2="106.292" y2="150.566"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="113.97" y1="145.485" x2="255.457" y2="145.485"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="258.028" y1="145.485" x2="260.559" y2="145.485"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="113.608" y1="278.22" x2="113.608" y2="275.69"/>
   
        <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="113.608" y1="277.524" x2="113.608" y2="142.651"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="121.303" y1="137.613" x2="263.319" y2="137.613"/>
    <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="265.9" y1="137.613" x2="268.434" y2="137.613"/>
    <line fill="#FFFFFF" stroke="#0000FF" strokeMiterlimit="10" x1="121.49" y1="279.812" x2="121.49" y2="277.282"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="121.49" y1="279.117" x2="121.49" y2="134.195"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="130.722" y1="129.742" x2="271.218" y2="129.742"/>
   
        <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="273.772" y1="129.742" x2="276.305" y2="129.742"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="84.899" y1="278.688" x2="84.899" y2="-4.193"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="84.899" y1="278.688" x2="84.899" y2="276.157"/>
    <path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M84.899,2.934"/>
    <path fill="none" stroke="#050505" strokeMiterlimit="10" strokeDasharray="14" d="M84.899,271.034"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="77.028" y1="278.688" x2="77.028" y2="-4.193"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="77.028" y1="278.688" x2="77.028" y2="276.157"/>
    <path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M77.028,2.934"/>
    <path fill="none" stroke="#050505" strokeMiterlimit="10" strokeDasharray="14" d="M77.028,271.034"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="69.156" y1="278.688" x2="69.156" y2="-4.193"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="69.156" y1="278.688" x2="69.156" y2="276.157"/>
    <path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M69.156,2.934"/>
    <path fill="none" stroke="#050505" strokeMiterlimit="10" strokeDasharray="14" d="M69.156,271.034"/>
    <line fill="none" stroke="#050505" strokeWidth="3" strokeMiterlimit="10" x1="61.283" y1="278.688" x2="61.283" y2="-4.193"/>
    <line fill="#FFFFFF" stroke="#050505" strokeMiterlimit="10" x1="61.283" y1="278.688" x2="61.283" y2="276.157"/>
    <path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M61.283,2.934"/>
    <path fill="none" stroke="#050505" strokeMiterlimit="10" strokeDasharray="14" d="M61.283,271.034"/>
    <g>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="152.175,406.757 35.022,406.757 35.022,348.181
            35.022,289.604 152.175,289.604      "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="152.175,406.757 35.022,406.757 35.022,348.181
            35.022,289.604 152.175,289.604      "/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="66.742" y1="398.171" x2="66.742" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="66.742" y1="398.171" x2="66.742" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="78.008" y1="398.171" x2="78.008" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="78.008" y1="398.171" x2="78.008" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="89.277" y1="398.171" x2="89.277" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="89.277" y1="398.171" x2="89.277" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="100.547" y1="398.171" x2="100.547" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="100.547" y1="398.171" x2="100.547" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="111.815" y1="398.171" x2="111.815" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="111.815" y1="398.171" x2="111.815" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="123.082" y1="398.171" x2="123.082" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="123.082" y1="398.171" x2="123.082" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="134.35" y1="398.171" x2="134.35" y2="349.232"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="134.35" y1="398.171" x2="134.35" y2="349.232"/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="146.716,401.297 29.564,401.297 29.564,342.724
            29.564,284.147 146.716,284.147      "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="146.716,401.297 29.564,401.297 29.564,342.724
            29.564,284.147 146.716,284.147      "/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="61.283" y1="392.714" x2="61.283" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="61.283" y1="392.714" x2="61.283" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="72.551" y1="392.714" x2="72.551" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="72.551" y1="392.714" x2="72.551" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="83.821" y1="392.714" x2="83.821" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="83.821" y1="392.714" x2="83.821" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="95.088" y1="392.714" x2="95.088" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="95.088" y1="392.714" x2="95.088" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="106.355" y1="392.714" x2="106.355" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="106.355" y1="392.714" x2="106.355" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="117.624" y1="392.714" x2="117.624" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="117.624" y1="392.714" x2="117.624" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="128.892" y1="392.714" x2="128.892" y2="343.774"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="128.892" y1="392.714" x2="128.892" y2="343.774"/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="141.259,395.843 24.107,395.843 24.107,337.265
            24.107,278.688 141.259,278.688      "/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" points="141.259,395.843 24.107,395.843 24.107,337.265
            24.107,278.688 141.259,278.688      "/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="55.826" y1="387.255" x2="55.826" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="55.826" y1="387.255" x2="55.826" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="67.094" y1="387.255" x2="67.094" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="67.094" y1="387.255" x2="67.094" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="78.361" y1="387.255" x2="78.361" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="78.361" y1="387.255" x2="78.361" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="89.63" y1="387.255" x2="89.63" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="89.63" y1="387.255" x2="89.63" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="100.896" y1="387.255" x2="100.896" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="100.896" y1="387.255" x2="100.896" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="112.165" y1="387.255" x2="112.165" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="112.165" y1="387.255" x2="112.165" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="123.435" y1="387.255" x2="123.435" y2="338.316"/>
        <line fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" x1="123.435" y1="387.255" x2="123.435" y2="338.316"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M58.328,327.38c-0.027,1.382-1.172,2.482-2.555,2.453
            c-1.385-0.028-2.481-1.174-2.453-2.559c0.025-1.385,1.173-2.482,2.558-2.452C57.261,324.849,58.36,325.996,58.328,327.38"/>
        <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="55.824" cy="327.327" r="2.504"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M69.598,327.38c-0.03,1.382-1.175,2.482-2.558,2.453
            c-1.384-0.028-2.48-1.174-2.452-2.559c0.027-1.385,1.172-2.482,2.557-2.452C68.528,324.849,69.629,325.996,69.598,327.38"/>
        <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="67.093" cy="327.327" r="2.505"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M80.865,327.38c-0.029,1.382-1.174,2.482-2.56,2.453
            c-1.383-0.028-2.478-1.174-2.451-2.559s1.174-2.482,2.559-2.452C79.796,324.849,80.895,325.996,80.865,327.38"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M80.865,327.38c-0.029,1.382-1.174,2.482-2.56,2.453
            c-1.383-0.028-2.478-1.174-2.451-2.559s1.174-2.482,2.559-2.452C79.796,324.849,80.895,325.996,80.865,327.38z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M92.133,327.38c-0.03,1.382-1.174,2.482-2.559,2.453
            c-1.385-0.028-2.479-1.174-2.451-2.559c0.025-1.385,1.171-2.482,2.556-2.452C91.062,324.849,92.161,325.996,92.133,327.38"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M92.133,327.38c-0.03,1.382-1.174,2.482-2.559,2.453
            c-1.385-0.028-2.479-1.174-2.451-2.559c0.025-1.385,1.171-2.482,2.556-2.452C91.062,324.849,92.161,325.996,92.133,327.38z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M103.398,327.38c-0.028,1.382-1.172,2.482-2.557,2.453
            c-1.384-0.028-2.48-1.174-2.454-2.559c0.027-1.385,1.175-2.482,2.56-2.452C102.33,324.849,103.43,325.996,103.398,327.38"/>
        <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="100.893" cy="327.327" r="2.506"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M114.667,327.38c-0.029,1.382-1.174,2.482-2.558,2.453
            c-1.385-0.028-2.48-1.174-2.454-2.559c0.028-1.385,1.173-2.482,2.559-2.452C113.598,324.849,114.697,325.996,114.667,327.38"/>
        <circle fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" cx="112.161" cy="327.327" r="2.506"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M125.936,327.38c-0.03,1.382-1.174,2.482-2.561,2.453
            c-1.382-0.028-2.479-1.174-2.452-2.559s1.175-2.482,2.558-2.452C124.862,324.849,125.963,325.996,125.936,327.38"/>
        <path fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M125.936,327.38c-0.03,1.382-1.174,2.482-2.561,2.453
            c-1.382-0.028-2.479-1.174-2.452-2.559s1.175-2.482,2.558-2.452C124.862,324.849,125.963,325.996,125.936,327.38z"/>
    </g>
    <g>
       
            <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="380.661" y1="291.202" x2="380.661" y2="324.11"/>
    </g>
</g>
<line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="614.67" y1="358.56" x2="588.021" y2="358.56"/>
<rect x="369.924" y="149.229" width="218.8" height="137.449"/>
<text transform="matrix(1 0 0 1 418.1777 218.4009)" fill="#FFFFFF" fontFamily="'PxGrotesk-Screen'" fontSize="17.4149">SPACIAL MIXER</text>
</svg>
                            </div>
                    </div>
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


