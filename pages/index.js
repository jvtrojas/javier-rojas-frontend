import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import DataRow from '../components/DataRow';
import Data from '../public/js/data-home.json';

const SAMPLE_TEXT = `AuralArk is the division of the creative platform simulacro focused on how space is perceived in sonic performances. We are in the search of futuristic spaces to experiment media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows. By researching the aural architecture attributes of a venue, and relating to the will of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology. `;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";

const data = Data.map(each => {return each})

function Index({blackSquareTrigger, anchorIsHovered, classToggle}) {

    return (
        <BaseLayout className="global" >
            <div className="container-fluid">
                <DataRow data={data} blackSquareTrigger={blackSquareTrigger} classToggle={classToggle} anchorIsHovered={anchorIsHovered}  rowNumber="1" />
                <DataRow data={data} blackSquareTrigger={blackSquareTrigger} classToggle={classToggle} anchorIsHovered={anchorIsHovered} rowNumber="2" />
                <DataRow data={data} blackSquareTrigger={blackSquareTrigger} classToggle={classToggle} anchorIsHovered={anchorIsHovered} rowNumber="3" />
            </div>
        </BaseLayout>
    )
}
export default Index;


