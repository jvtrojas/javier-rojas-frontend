import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import NavHeaderLayout from '../components/layouts/NavHeaderLayout';

const SAMPLE_TEXT = `AuralArk is the division of the creative platform simulacro focused on how space is perceived in sonic performances. We are in the search of futuristic spaces to experiment media events, a new hyperreal space created for the evolution of audiovisual and intermedia shows. By researching the aural architecture attributes of a venue, and relating to the will of the show, amount of people, and running hours we design specific architectural settings supported by high-end technology. `;
const SAMPLE_TEXT_ES = `Nosotros y nuestros socios usamos tecnologías, como cookies, y procesamos datos personales, como direcciones IP e identificadores de cookies, para personalizar anuncios y contenido en función de sus intereses, medir el rendimiento de los anuncios y el contenido, y obtener información sobre el público que vio anuncios y contenido. Haga clic a continuación para consentir el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento volviendo a este sitio.`
const SAMPLE_TEXT_DE = `Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über das Publikum zu gewinnen, das sie gesehen hat Anzeigen und Inhalte. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.`
const EN_TEXT = "EN";



class Index extends React.Component {
    render() {
        return (
            <BaseLayout className="global" {...this.props.auth} >
                <div className="container-fluid home-page">
                    {/* Row 1 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>

                    {/* Row 2 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx05" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx05" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>

                    {/* Row 3 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx2" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx2" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>

                    {/* Row 4 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>

                    {/* Row 5 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>

                    {/* Row 6 */}
                    <div className="row row-no_top_padding wrap hide-scrollbar">
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4DAC09A9-4052-4B42-80C8-036A8CFE7235.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/7F9372A4-4074-42E4-96EA-AC9303BF4747.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0149.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_4224.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3966.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3910.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3523.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3454.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3209.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3634.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F16300CD-2731-417D-B71D-2D5ED38B731F.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1030.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_1019.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0627.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0887.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0748.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0747.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0891.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0867.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_7578.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3833.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9A49E492-54FB-4780-943F-5633DDE860B0.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_9767.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0420.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_0888.jpeg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/9B0A5225-CCA4-4A8C-9B88-57775AF16928.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/F568EB25-AF39-458C-99EF-859A54B5E089.jpg" alt="ATERNATIVO"/>
                        <img className="imgx1" src="static/images/9:16/IMG_3541.jpeg" alt="ATERNATIVO"/>
                    </div>
                </div>
            </BaseLayout>
        )
    }
}
export default Index;


