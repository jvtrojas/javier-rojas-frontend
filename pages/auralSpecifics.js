import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import BackgroundGrid from '../components/svg/background-grid';
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
                <div className="row wrap example no-horizontal-scroll no-padding-top">
                    <div className="position-person">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="92.012px" height="93.203px" viewBox="0 0 92.012 93.203" enable-background="new 0 0 92.012 93.203">
<g>
	<g id="INSERT_6_">
		<g id="LINE_382_">
			<g id="XMLID_5_">
				<g>
					<polygon fill="#FFFFFF" points="53.838,84.742 53.441,82.273 53.254,80.534 53.289,78.497 52.884,75.185 52.674,74.031 
						53.079,73.172 53.233,73.15 53.246,73.203 53.551,75.734 53.676,78.231 54.18,81.051 55.02,82.063 55.871,82.049 
						56.487,81.056 56.209,75.632 55.616,73.334 55.881,73.262 57.055,74.761 57.649,77.094 57.455,79.956 57.542,81.763 
						57.15,84.337 56.485,86.091 55.283,87.061 54.548,86.414 					"/>
					<polygon fill="#FFFFFF" points="58.547,63.962 59.43,63.356 60.762,62.151 60.814,61.91 60.883,61.922 61.718,62.502 
						61.941,62.191 63.675,63.463 65.706,65.381 66.546,66.817 66.43,67.903 65.381,68.478 63.119,68.733 60.403,67.285 
						58.539,63.968 					"/>
					<polygon fill="#FFFFFF" points="59.43,63.356 58.547,63.962 58.539,63.968 58.534,63.959 56.74,64.05 56.386,62.279 
						56.23,60.373 56.021,59.219 55.867,59.119 55.984,58.954 57.266,59.372 59.432,58.747 59.658,57.998 59.814,58.048 
						60.32,58.574 61.16,60.435 60.814,61.91 60.762,62.151 					"/>
					<polygon fill="#FFFFFF" points="56.74,64.05 56.805,66.019 55.926,69.35 55.517,72.942 55.616,73.334 56.209,75.632 
						56.487,81.056 55.871,82.049 55.02,82.063 54.18,81.051 53.676,78.231 53.551,75.734 53.246,73.203 53.233,73.15 52.75,70.377 
						51.092,67.343 50.648,65.635 50.385,63.377 50.41,63.202 51.835,63.389 53.205,62.874 54.338,61.38 55.867,59.119 
						56.021,59.219 56.23,60.373 56.386,62.279 					"/>
					<polygon fill="#FFFFFF" points="44.503,53.745 44.687,52.758 45.272,52.356 46.093,52.509 46.487,52.288 46.995,53.188 
						49.779,55.159 53.41,58.136 53.447,58.827 53.781,59.313 53.362,59.746 53.467,60.535 52.214,60.388 52.031,60.951 
						49.437,59.274 48.716,59.478 46.888,57.857 45.746,56.191 45.344,55.182 44.645,54.8 44.806,54.398 					"/>
					<polygon fill="#FFFFFF" points="58.488,40.402 58.429,43.463 57.897,43.112 57.668,40.25 57.246,38.38 57.448,38.108 
						58.146,37.181 58.23,36.262 57.712,36.338 57.583,36.026 57.964,35.875 58.414,34.851 59.418,34.016 60.337,34.101 
						60.694,34.232 60.45,34.884 60.81,37.087 62.232,39.992 63.045,44.322 62.519,44.404 62.533,45.255 62.115,45.688 
						61.727,46.378 61.165,46.194 60.893,45.799 60.443,45.974 58.98,40.501 					"/>
					<polygon fill="#FFFFFF" points="49.577,26.373 49.696,26.315 49.744,26.404 51.812,28.587 54.29,31.774 56.021,35.765 
						57.232,37.954 57.448,38.108 57.246,38.38 57.668,40.25 57.897,43.112 58.429,43.463 58.831,43.624 59.261,48.652 
						59.875,53.118 60.096,56.568 59.658,57.998 59.432,58.747 57.266,59.372 55.984,58.954 55.867,59.119 54.338,61.38 
						53.205,62.874 51.835,63.389 50.41,63.202 50.249,63.18 48.28,60.929 46.074,58.562 41.876,54.104 42.208,53.598 43.59,54.517 
						44.645,54.8 45.344,55.182 45.746,56.191 46.888,57.857 48.716,59.478 49.437,59.274 52.031,60.951 52.214,60.388 
						53.467,60.535 53.362,59.746 53.781,59.313 53.447,58.827 53.41,58.136 49.779,55.159 46.995,53.188 46.487,52.288 
						46.353,52.04 42.939,50.21 40.863,47.608 38.232,45.241 33.947,42.142 32.668,39.854 31.396,38.423 31.672,36.936 
						31.203,36.251 31.663,35.79 31.924,36.047 32.993,37.182 34.424,38.649 36.444,39.701 37.338,39.961 38.774,39.545 
						39.94,38.309 42.38,36.21 45.316,34.621 47.253,33.874 47.824,32.62 47.595,29.758 46.067,26.489 46.05,26.27 46.197,26.254 
						47.368,25.451 47.64,26.271 49.374,25.651 					"/>
					<polygon fill="#FFFFFF" points="32.042,29.927 31.301,28.847 31.151,27.373 31.586,25.922 32.567,25.249 31.643,25.156 
						30.938,23.917 30.819,22.701 31.405,21.875 32.477,21.14 34.117,21.021 35.015,21.411 35.141,21.47 35.619,22.573 
						35.07,23.241 36.111,22.672 37.395,22.652 39.149,23.316 40.382,24.92 41.52,26.153 41.935,27.59 43.166,30.638 42.951,32.217 
						41.885,33.385 42.046,34.22 42.027,35.13 41.731,35.37 40.6,35.188 40.066,34.923 38.661,35.597 37.074,35.388 35.982,34.839 
						34.616,33.484 33.717,32.368 32.345,31.005 					"/>
					<polygon fill="#FFFFFF" points="43.68,20.499 46.109,20.275 49.014,18.852 50.926,19.129 51.191,19.517 52.193,20.127 
						52.6,21.146 55.528,23.733 57.208,26.182 59.437,28.388 59.958,30.189 59.508,30.789 60.801,33.928 60.694,34.232 
						60.337,34.101 59.418,34.016 58.414,34.851 57.964,35.875 57.583,36.026 56.08,32.28 55.195,30.583 51.39,26.717 50.33,26.002 
						49.696,26.315 49.577,26.373 49.374,25.651 47.64,26.271 47.368,25.451 46.197,26.254 46.05,26.27 46.067,26.489 
						47.595,29.758 47.824,32.62 47.253,33.874 45.316,34.621 42.38,36.21 41.731,35.37 42.027,35.13 42.046,34.22 41.885,33.385 
						42.951,32.217 43.166,30.638 41.935,27.59 41.52,26.153 40.382,24.92 39.149,23.316 37.395,22.652 36.111,22.672 35.07,23.241 
						35.619,22.573 35.141,21.47 35.015,21.411 35.104,21.204 37.878,19.592 40.181,19.164 42.443,19.334 43.414,20.111 					"/>
					<polygon fill="#FFFFFF" points="32.042,29.927 32.345,31.005 33.717,32.368 34.616,33.484 35.982,34.839 37.074,35.388 
						38.661,35.597 40.066,34.923 40.6,35.188 41.731,35.37 42.38,36.21 39.94,38.309 38.774,39.545 37.338,39.961 36.444,39.701 
						34.424,38.649 32.993,37.182 31.924,36.047 31.663,35.79 31.203,36.251 31.672,36.936 31.396,38.423 32.668,39.854 
						33.947,42.142 38.232,45.241 40.863,47.608 42.939,50.21 46.353,52.04 46.487,52.288 46.093,52.509 45.272,52.356 
						44.687,52.758 44.503,53.745 44.806,54.398 44.645,54.8 43.59,54.517 42.208,53.598 40.702,52.606 38.598,52.473 34.83,49.297 
						31.04,45.859 27.939,42.808 27.215,40.709 25.758,39.417 24.983,36.201 26.505,34.441 26.731,31.837 26.742,29.537 
						27.559,27.388 29.272,25.06 30.641,24.121 30.938,23.917 31.643,25.156 32.567,25.249 31.586,25.922 31.151,27.373 
						31.301,28.847 					"/>
				</g>
				<g>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="36.444" y1="39.701" x2="34.424" y2="38.649"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="47.595" y1="29.758" x2="47.824" y2="32.62"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.195" y1="30.583" x2="51.39" y2="26.717"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.528" y1="23.733" x2="57.208" y2="26.182"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.6" y1="35.188" x2="41.731" y2="35.37"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.027" y1="35.13" x2="42.046" y2="34.22"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.04" y1="45.859" x2="27.939" y2="42.808"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.668" y1="39.854" x2="33.947" y2="42.142"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.744" y1="26.404" x2="51.812" y2="28.587"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.181" y1="19.164" x2="42.443" y2="19.334"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.643" y1="25.156" x2="32.567" y2="25.249"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="36.111" y1="22.672" x2="35.07" y2="23.241"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="26.742" y1="29.537" x2="27.559" y2="27.388"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.878" y1="19.592" x2="40.181" y2="19.164"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35.619" y1="22.573" x2="35.141" y2="21.47"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35.07" y1="23.241" x2="35.619" y2="22.573"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="30.819" y1="22.701" x2="30.938" y2="23.917"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.405" y1="21.875" x2="30.819" y2="22.701"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.477" y1="21.14" x2="31.405" y2="21.875"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.117" y1="21.021" x2="32.477" y2="21.14"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29.272" y1="25.06" x2="30.641" y2="24.121"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35.104" y1="21.204" x2="37.878" y2="19.592"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="30.938" y1="23.917" x2="31.643" y2="25.156"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						35.141,21.47 35.015,21.411 34.117,21.021 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.559" y1="27.388" x2="29.272" y2="25.06"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.993" y1="37.182" x2="31.924" y2="36.047"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.424" y1="38.649" x2="32.993" y2="37.182"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.067" y1="26.489" x2="47.595" y2="29.758"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						46.197,26.254 46.05,26.27 45.241,26.328 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="47.368" y1="25.451" x2="46.197" y2="26.254"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="47.64" y1="26.271" x2="47.368" y2="25.451"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.374" y1="25.651" x2="47.64" y2="26.271"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.577" y1="26.373" x2="49.374" y2="25.651"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						50.33,26.002 49.696,26.315 49.577,26.373 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="51.39" y1="26.717" x2="50.33" y2="26.002"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.6" y1="21.146" x2="55.528" y2="23.733"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.193" y1="20.127" x2="52.6" y2="21.146"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="51.191" y1="19.517" x2="52.193" y2="20.127"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="50.926" y1="19.129" x2="51.191" y2="19.517"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.566" y1="30.613" x2="42.659" y2="29.688"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.746" y1="30.885" x2="42.566" y2="30.613"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.381" y1="30.565" x2="41.746" y2="30.885"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.698" y1="31.646" x2="41.381" y2="30.565"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.929" y1="33.458" x2="41.698" y2="31.646"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="39.204" y1="34.497" x2="40.929" y2="33.458"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.795" y1="35.184" x2="39.204" y2="34.497"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="36.574" y1="34.87" x2="37.795" y2="35.184"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.066" y1="34.923" x2="40.6" y2="35.188"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="38.661" y1="35.597" x2="40.066" y2="34.923"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.074" y1="35.388" x2="38.661" y2="35.597"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35.982" y1="34.839" x2="37.074" y2="35.388"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.616" y1="33.484" x2="35.982" y2="34.839"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="33.717" y1="32.368" x2="34.616" y2="33.484"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.935" y1="27.59" x2="41.52" y2="26.153"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="43.166" y1="30.638" x2="41.935" y2="27.59"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.951" y1="32.217" x2="43.166" y2="30.638"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.885" y1="33.385" x2="42.951" y2="32.217"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.046" y1="34.22" x2="41.885" y2="33.385"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.215" y1="40.709" x2="25.758" y2="39.417"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.939" y1="42.808" x2="27.215" y2="40.709"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.396" y1="38.423" x2="32.668" y2="39.854"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.672" y1="36.936" x2="31.396" y2="38.423"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.203" y1="36.251" x2="31.672" y2="36.936"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						32.139,35.318 31.663,35.79 31.203,36.251 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.232" y1="34.393" x2="32.139" y2="35.318"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.315" y1="34.668" x2="38.704" y2="35.289"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.603" y1="32.116" x2="41.579" y2="33.522"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.109" y1="20.275" x2="49.014" y2="18.852"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="43.68" y1="20.499" x2="46.109" y2="20.275"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="43.414" y1="20.111" x2="43.68" y2="20.499"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.443" y1="19.334" x2="43.414" y2="20.111"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.042" y1="29.927" x2="32.345" y2="31.005"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.301" y1="28.847" x2="32.042" y2="29.927"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.151" y1="27.373" x2="31.301" y2="28.847"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.586" y1="25.922" x2="31.151" y2="27.373"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.567" y1="25.249" x2="31.586" y2="25.922"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.395" y1="22.652" x2="36.111" y2="22.672"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="39.149" y1="23.316" x2="37.395" y2="22.652"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.382" y1="24.92" x2="39.149" y2="23.316"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="26.731" y1="31.837" x2="26.742" y2="29.537"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="26.505" y1="34.441" x2="26.731" y2="31.837"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="24.983" y1="36.201" x2="26.505" y2="34.441"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.014" y1="18.852" x2="50.926" y2="19.129"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.345" y1="31.005" x2="33.717" y2="32.368"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.52" y1="26.153" x2="40.382" y2="24.92"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="25.758" y1="39.417" x2="24.983" y2="36.201"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="50.249" y1="63.18" x2="48.28" y2="60.929"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.875" y1="53.118" x2="60.096" y2="56.568"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.467" y1="60.535" x2="52.214" y2="60.388"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.362" y1="59.746" x2="53.467" y2="60.535"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.897" y1="43.112" x2="57.668" y2="40.25"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.81" y1="37.087" x2="62.232" y2="39.992"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.702" y1="52.606" x2="38.598" y2="52.473"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.939" y1="50.21" x2="46.353" y2="52.04"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.338" y1="39.961" x2="36.444" y2="39.701"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="38.774" y1="39.545" x2="37.338" y2="39.961"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="39.94" y1="38.309" x2="38.774" y2="39.545"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.38" y1="36.21" x2="39.94" y2="38.309"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="45.316" y1="34.621" x2="42.38" y2="36.21"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="47.253" y1="33.874" x2="45.316" y2="34.621"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="47.824" y1="32.62" x2="47.253" y2="33.874"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.08" y1="32.28" x2="55.195" y2="30.583"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						57.712,36.338 57.583,36.026 56.08,32.28 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.23" y1="36.262" x2="57.712" y2="36.338"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.146" y1="37.181" x2="58.23" y2="36.262"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						57.246,38.38 57.448,38.108 58.146,37.181 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.668" y1="40.25" x2="57.246" y2="38.38"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.45" y1="34.884" x2="60.81" y2="37.087"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						60.801,33.928 60.694,34.232 60.45,34.884 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.508" y1="30.789" x2="60.801" y2="33.928"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.958" y1="30.189" x2="59.508" y2="30.789"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.437" y1="28.388" x2="59.958" y2="30.189"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.208" y1="26.182" x2="59.437" y2="28.388"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.731" y1="35.37" x2="42.027" y2="35.13"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.83" y1="49.297" x2="31.04" y2="45.859"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="38.598" y1="52.473" x2="34.83" y2="49.297"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.863" y1="47.608" x2="42.939" y2="50.21"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="38.232" y1="45.241" x2="40.863" y2="47.608"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="33.947" y1="42.142" x2="38.232" y2="45.241"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.021" y1="35.765" x2="57.232" y2="37.954"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="54.29" y1="31.774" x2="56.021" y2="35.765"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="51.812" y1="28.587" x2="54.29" y2="31.774"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.414" y1="34.851" x2="57.964" y2="35.875"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.418" y1="34.016" x2="58.414" y2="34.851"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.337" y1="34.101" x2="59.418" y2="34.016"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="54.688" y1="53.512" x2="57.556" y2="47.227"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.756" y1="42.713" x2="54.688" y2="53.512"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.429" y1="43.463" x2="57.897" y2="43.112"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.488" y1="40.402" x2="58.429" y2="43.463"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.98" y1="40.501" x2="58.488" y2="40.402"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.443" y1="45.974" x2="58.98" y2="40.501"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.893" y1="45.799" x2="60.443" y2="45.974"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="61.165" y1="46.194" x2="60.893" y2="45.799"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="61.727" y1="46.378" x2="61.165" y2="46.194"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="62.115" y1="45.688" x2="61.727" y2="46.378"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="62.533" y1="45.255" x2="62.115" y2="45.688"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="62.519" y1="44.404" x2="62.533" y2="45.255"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="63.045" y1="44.322" x2="62.519" y2="44.404"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="62.232" y1="39.992" x2="63.045" y2="44.322"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="41.876" y1="54.104" x2="40.411" y2="53.242"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.074" y1="58.562" x2="41.876" y2="54.104"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.28" y1="60.929" x2="46.074" y2="58.562"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.261" y1="48.652" x2="59.875" y2="53.118"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.831" y1="43.624" x2="59.261" y2="48.652"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						43.59,54.517 42.208,53.598 40.702,52.606 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="44.645" y1="54.8" x2="43.59" y2="54.517"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="45.344" y1="55.182" x2="44.645" y2="54.8"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="45.746" y1="56.191" x2="45.344" y2="55.182"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.888" y1="57.857" x2="45.746" y2="56.191"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.716" y1="59.478" x2="46.888" y2="57.857"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.437" y1="59.274" x2="48.716" y2="59.478"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.031" y1="60.951" x2="49.437" y2="59.274"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.214" y1="60.388" x2="52.031" y2="60.951"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.781" y1="59.313" x2="53.362" y2="59.746"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.447" y1="58.827" x2="53.781" y2="59.313"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.41" y1="58.136" x2="53.447" y2="58.827"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.779" y1="55.159" x2="53.41" y2="58.136"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.995" y1="53.188" x2="49.779" y2="55.159"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						46.353,52.04 46.487,52.288 46.995,53.188 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.022" y1="56.788" x2="47.25" y2="55.45"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.271" y1="57.77" x2="48.022" y2="56.788"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.899" y1="58.491" x2="48.271" y2="57.77"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="44.503" y1="53.745" x2="44.806" y2="54.398"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="44.687" y1="52.758" x2="44.503" y2="53.745"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="45.272" y1="52.356" x2="44.687" y2="52.758"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.093" y1="52.509" x2="45.272" y2="52.356"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.437" y1="59.274" x2="48.899" y2="58.491"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="66.43" y1="67.903" x2="65.381" y2="68.478"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="66.546" y1="66.817" x2="66.43" y2="67.903"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.676" y1="78.231" x2="53.551" y2="75.734"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						55.517,72.942 55.616,73.334 56.209,75.632 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.289" y1="78.497" x2="52.884" y2="75.185"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.881" y1="73.262" x2="57.055" y2="74.761"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						51.835,63.389 50.41,63.202 50.249,63.18 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.205" y1="62.874" x2="51.835" y2="63.389"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="54.338" y1="61.38" x2="53.205" y2="62.874"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						55.984,58.954 55.867,59.119 54.338,61.38 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.266" y1="59.372" x2="55.984" y2="58.954"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.432" y1="58.747" x2="57.266" y2="59.372"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						60.096,56.568 59.658,57.998 59.432,58.747 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.534" y1="63.959" x2="58.479" y2="63.863"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.403" y1="67.285" x2="58.539" y2="63.968"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="63.119" y1="68.733" x2="60.403" y2="67.285"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="65.381" y1="68.478" x2="63.119" y2="68.733"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="65.706" y1="65.381" x2="66.546" y2="66.817"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="63.675" y1="63.463" x2="65.706" y2="65.381"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						61.347,61.75 61.941,62.191 63.675,63.463 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="50.648" y1="65.635" x2="50.385" y2="63.377"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="51.092" y1="67.343" x2="50.648" y2="65.635"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.75" y1="70.377" x2="51.092" y2="67.343"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						53.246,73.203 53.233,73.15 52.75,70.377 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.551" y1="75.734" x2="53.246" y2="73.203"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.926" y1="69.35" x2="55.517" y2="72.942"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.805" y1="66.019" x2="55.926" y2="69.35"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.74" y1="64.05" x2="56.805" y2="66.019"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.386" y1="62.279" x2="56.74" y2="64.05"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.23" y1="60.373" x2="56.386" y2="62.279"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.021" y1="59.219" x2="56.23" y2="60.373"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.674" y1="74.031" x2="53.079" y2="73.172"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.884" y1="75.185" x2="52.674" y2="74.031"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.32" y1="58.574" x2="59.814" y2="58.048"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="61.16" y1="60.435" x2="60.32" y2="58.574"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						60.762,62.151 60.814,61.91 61.16,60.435 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.43" y1="63.356" x2="60.762" y2="62.151"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58.547" y1="63.962" x2="59.43" y2="63.356"/>
					<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
						56.74,64.05 58.534,63.959 58.539,63.968 58.547,63.962 					"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="61.718" y1="62.502" x2="60.883" y2="61.922"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="63.248" y1="63.902" x2="61.718" y2="62.502"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="63.528" y1="65.141" x2="63.248" y2="63.902"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="62.745" y1="65.678" x2="63.528" y2="65.141"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="61.794" y1="65.76" x2="62.745" y2="65.678"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="60.369" y1="65.15" x2="61.794" y2="65.76"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="59.073" y1="63.88" x2="60.369" y2="65.15"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="54.18" y1="81.051" x2="53.676" y2="78.231"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.02" y1="82.063" x2="54.18" y2="81.051"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.871" y1="82.049" x2="55.02" y2="82.063"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.487" y1="81.056" x2="55.871" y2="82.049"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.209" y1="75.632" x2="56.487" y2="81.056"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.254" y1="80.534" x2="53.289" y2="78.497"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.441" y1="82.273" x2="53.254" y2="80.534"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53.838" y1="84.742" x2="53.441" y2="82.273"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="54.548" y1="86.414" x2="53.838" y2="84.742"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55.283" y1="87.061" x2="54.548" y2="86.414"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="56.485" y1="86.091" x2="55.283" y2="87.061"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.15" y1="84.337" x2="56.485" y2="86.091"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.542" y1="81.763" x2="57.15" y2="84.337"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.455" y1="79.956" x2="57.542" y2="81.763"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.649" y1="77.094" x2="57.455" y2="79.956"/>
					
						<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.055" y1="74.761" x2="57.649" y2="77.094"/>
				</g>
			</g>
		</g>
	</g>
</g>
</svg>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-4 col-3 maxwidth nopadding">
                        <BackgroundGrid/>
                    </div>
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
