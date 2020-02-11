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
class Simulacro2 extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="simulacro2-page">
                    <div id="1er">
                        <h2 title="ozmoze identity and webdesign"> ozmoze — agency for popculture </h2>
                        <p> i did an internship for motor entertainment gmbh founded by the current cultural secretary of state of berlin tim renner. together in a team of three i was responsible for the brand identity and design for ozmoze — agency for popculture. the web-concept was later copied by <a href="balenciaga.com">balenciaga.com</a></p>
                        <div className="entirerow" id="z-index">
                            <div className="column">
                                <img src="https://www.nyfvnigg.com" alt=" " hidden />
                            </div>
                            <div classNameName="column">
				                <img src="https://www.dropbox.com/s/pnga0b3ng3c92m3/Photo%2002.12.17%2C%2011%2052%2011.jpg?raw=1" alt="project 1 image" />
			                </div>
                            <div className="column">
				                <img src="https://www.dropbox.com/s/odxiyxmofpsd99h/Photo%2021.02.17%2C%2017%2042%2009.jpg?raw=1" alt="project 1 image"/>
			                </div>

			                <div className="column">
				                <img src="https://www.dropbox.com/s/ttetkpepyd0opgu/Ozmoze%20Identity.png?raw=1" alt="project 1 image" />
			                </div>

			                <div className="column">
				                <img src="https://www.dropbox.com/s/g7hl11e9iaf9n28/Photo%2019.03.17%2C%2014%2056%2043.jpg?raw=1" alt="project 1 image"/>
			                </div>

			                <div className="column">
				                <img src="https://www.dropbox.com/s/2cqwtapj6bmcjd5/Photo%2010.10.17%2C%2010%2014%2051.jpg?raw=1" alt="project 1 image"/>
			                </div>
                        </div>
                    </div>

                    <br/>
	                <hr/>

                <div id="1er">
		            <h2 title="bachelorthesis"> bachelorthesis visual communication </h2>
		            <p> in my bachelorthesis the brutalist design bible i tried to define and abstractly visualize as well as translate this movement into different media. download the complete thesis <a href="https://www.dropbox.com/s/ryyjhu58xbo972a/BrutalistDesignBible_MircoZimmer_BA.pdf?raw=1">here</a>.</p>
		            <div className="entirerow">
                        <div className="column">
                            <img src="https://www.dropbox.com/s/o6apzlpjf35e366/Photo%2012.11.17%2C%2008%2054%2011%20%281%29.jpg?raw=1" alt="project 1 image"/>
                        </div>

                        <div className="column">
                            <img src="https://www.dropbox.com/s/cwfircct9g2f0i8/preview%20%202%202.png?raw=1" alt="project 1 image"/>
                        </div>

                        <div className="column">
                            <img src="https://www.dropbox.com/s/j2hxjbl6p6snn31/Photo%2008.02.18%2C%2018%2032%2052.jpg?raw=1" alt="project 1 image"/>
                        </div>

                        <div className="column">
                            <img src="https://www.dropbox.com/s/84tv3032p3hkphq/Pierre%20Buttin.png?raw=1" alt="project 1 image"/>
                        </div>

                        <div className="column">
                            <img src="https://www.dropbox.com/s/7m0iyxhc7d2s2xl/BA%20200x100.png?raw=1" alt="project 1 image"/>
                        </div>
		            </div>
                </div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Simulacro2;