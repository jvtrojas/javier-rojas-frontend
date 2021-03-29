import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Data from '../public/js/data-home.json';
import { useState } from 'react';

const SAMPLE_TEXT = `AuralArk is the division of the creative platform simulacro focused on how space is perceived in sonic performances. We are in the search of futuristic spaces to experiment media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows. By researching the aural architecture attributes of a venue, and relating to the will of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology. `;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";

const data = Data.map(each => {return each})
const row1 = [];
const row2 = [];
const row3 = [];

data.forEach(object => object.row==1 ? row1.push(object) : "")
data.forEach(object => object.row==2 ? row2.push(object) : "")
data.forEach(object => object.row==3 ? row3.push(object) : "")

// shuffle order function - on reload
const shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 12)
    // return( { order: `${randomNumber}` } )
}

function Index() {

    let [ isRow1, setRow1 ] = useState(false);
    let [ isRow2, setRow2 ] = useState(false);
    let [ isRow3, setRow3 ] = useState(false);

    const handleClickRow1 = () => {
        setRow1(prevState => !prevState);
    }
    const handleClickRow2 = () => {
        setRow2(prevState => !prevState);
    }
    const handleClickRow3 = () => {
        setRow3(prevState => !prevState);
    }
    
    return (
        <BaseLayout className="global" >
            <div className="container-fluid">
                {/* Row 1 */}
                <div onClick={handleClickRow1} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                    { 
                        row1.map(
                            function(image) {
                                if(image.src.length!==11){
                                    return(
                                            <div className={`row-pics-container ${ isRow1 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                <img className="row-pics" src={ image.src } alt={ image.title } />
                                            </div>
                                    )
                                } else {
                                        return(
                                                <div className={`row-pics-container youtube-link ${ isRow1 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                    <iframe width="auto" height="100%" 
                                                        src={`https://www.youtube.com/embed/${image.src}`} title="YouTube video player" 
                                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                                    />
                                                </div>
                                        )
                                }
                            }
                        )
                    }
                </div>
        
                {/* Row 2 */}
                <div onClick={handleClickRow2} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                    { 
                        row2.map(
                            function(image) {
                                if(image.src.length!==11){
                                    return(
                                            <div className={`row-pics-container ${ isRow2 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                <img className="row-pics" src={ image.src } alt={ image.title } />
                                            </div>
                                    )
                                } else {
                                        return(
                                                <div className={`row-pics-container youtube-link ${ isRow2 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                    <iframe width="auto" height="100%" 
                                                        src={`https://www.youtube.com/embed/${image.src}`} title="YouTube video player" 
                                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                                    />
                                                </div>
                                        )
                                }
                            }
                        )
                    }
                </div>
        
                {/* Row 3 */}
                <div onClick={handleClickRow3} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                    { 
                        row3.map(
                            function(image) {
                                if(image.src.length!==11){
                                    return(
                                            <div className={`row-pics-container ${ isRow3 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                <img className="row-pics" src={ image.src } alt={ image.title } />
                                            </div>
                                    )
                                } else {
                                        return(
                                                <div className={`row-pics-container youtube-link ${ isRow3 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                    <iframe width="auto" height="100%" 
                                                        src={`https://www.youtube.com/embed/${image.src}`} title="YouTube video player" 
                                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                                    />
                                                </div>
                                        )
                                }
                            }
                        )
                    }
                </div>
            </div>
        </BaseLayout>
    )
}
export default Index;


