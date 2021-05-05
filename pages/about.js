import '../styles/mains.scss';
import Link from 'next/link';

function About({anchorIsHovered, classToggle}) {


    return (
        <div className="about-page">
            <div className="wrap row first-row row-no_top_padding row-slide-wrapper hide-scrollbar">
                <div className="about-us-en-container first-container test-element">
                    <div className="language-black-block">
                        EN
                    </div>
                    <div className="first-container-txt-section">
                        <h2>JAVIER ROJAS<br></br>TRANSDISCIPLINARY ARTIST<br></br> AURAL ARCHITECT</h2>
                        <p>Sound Artist & Experimental Producer with international experience boosting audio sensorial experiences through storytelling resulted from artistic co-creation and crosshatch of 3D multi-channel sound systems, spatial sound design, CG graphics, creative coding, industrial architecture, photography, graphics, and experience design. 
Based between Berlin, Barcelona and London.</p>
                        <p>2019 - MA - Sound artist x Universitat de Barcelona (SPA)<br></br>2014 - BA - Architect x Universidad Blas Pascal (ARG) </p>
                    </div>
                </div>
                <div className="about-us-en-container second-container test-element">
                    <h3>Professional Experience</h3>

                    <a href="https://guerrillatunes.bandcamp.com/album/en-el-reverso-de-lo-real" target="_blank">hola</a>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2019 - Today:</strong> Co-founder and collaborator of Simulacro
                    Transdisciplinary platform based between Berlin (DE) and Córdoba (ARG),blending creative disciplines for artistic projects.</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>FEB 2018: </strong> 
                    Gallowglass 
                    A/V Hardware technician for “Mobile World Congress 2018”. Barcelona (ES)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2016 -17: </strong>  
                    Quaranta & Coraglio Arquitectos. Architecture office - 
                    Senior architect - Project manager, visualization works. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2015 -16: </strong> 
                    Todocad.com. Visualization studio
                    Senior 3D artist - Modeling, animation and postproduction. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2015: </strong> 
                    Blas Pascal University
                    Teaching Assistant, Tecnología VI - Structural design. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2014 - 15: </strong>  
                    ARMOY s.a. Metal workshop
                    Project manager and technical designer. CNC programming. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2012: </strong>Aguas de la Cañada design school 
                    Teacher for design software. Autocad 2D, 3D max + Vray, Adobe creative Suite, Google Sketchup. Córdoba (ARG)</p>

                    <h3 className="h3-col-span-2">Technological Advisory</h3>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2020 - TODAY: </strong>Comissions for Barbara Held - Creative coding for concerts with artists such as: Phill Niblock, Daniel Neumann, Shiva Feshareki. Barcelona (ES) and New York (USA)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>SEPT 2020: </strong>Susi Hinz at Callie’s Berlin for Berlin Art Week - Multichannel sound system installation and 3D spacialization. Berlin (DE)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>FEB 2019: </strong>Haize Lizarazu Performance MANUAL at Mediastruch Artist Residency. Sabadell (ES)</p>


                    <h3>Collaborations</h3>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2020: </strong>Web and mobile design for the worldwide album premiere: WEDDING by Fonso, Simulacro in collaboration with amateur.rocks (WEB)</p>
                </div>
            </div>
            <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                <div className="about-us-es-container first-container test-element">
                    <div className="language-black-block">
                        ES
                    </div>
                    <div className="first-container-txt-section">
                        <h2>JAVIER ROJAS<br></br> ARTISTA TRANSDISCIPLINAR<br></br> ARQUITECTO AUDITIVO</h2>
                        <p>Artista transdisciplinar y arquitecto auditivo, trabajando con tecnologías, multimedia y diseño. Fusionando diversas tecnologías de software y construcción, utilizando sonido tridimensional, gráficos CG, programación creativa, sistemas de sonido multicanal, diseño industrial, arquitectura metálica, fotografía y diseño gráfico.</p>
                        <p>2019 - MA - Artista sonoro x Universitat de Barcelona (SPA) <br></br>2014 - BA - Arquitecto x Universidad Blas Pascal (ARG) </p>
                    </div>
                </div>
                <div className="about-us-en-container second-container test-element">
                    <h3>Experiencia profesional</h3>
                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2019 - Actualidad:</strong> Cofundador y colaborador de Simulacro. Plataforma transdisciplinar con sede en Berlín (DE) y Córdoba (ARG), mezclando disciplinas creativas para proyectos artísticos.</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>FEB 2018: </strong> 
                    Gallowglass 
                    Técnico de hardware A/V para el "Mobile World Congress 2018". Barcelona (ES)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2016 -17: </strong>  
                    Quaranta & Coraglio Arquitectos. Despacho de arquitectura - 
                    Arquitecto senior - Jefe de proyecto, trabajos de visualización. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2015 -16: </strong> 
                    Todocad.com. Estudio de visualización.
                    Artista 3D senior - Modelado, animación y postproducción. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2015: </strong> 
                    Universidad Blas Pascal
                    Ayudante de cátedra, Tecnología VI - Diseño de estructuras. Córdoba (ARG)</p> 

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2014 - 15: </strong>  
                    ARMOY s.a. Taller de metales
                    Jefe de proyecto y diseñador técnico. Programación de control numérico. Córdoba (ARG)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2012: </strong>Escuela de diseño de Aguas de la Cañada. 
                    Profesor de software de diseño. Autocad 2D, 3D max + Vray, Adobe creative Suite, Google Sketchup. Córdoba (ARG)</p>

                    <h3 className="h3-col-span-2">Asesoramiento tecnológico</h3>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2020 - HOY: </strong>Comisiones para Barbara Held - Codificación creativa para conciertos con artistas como: Phill Niblock, Daniel Neumann, Shiva Feshareki. Barcelona (ES) y Nueva York (USA)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>Septiembre 2020: </strong>Susi Hinz en Callie's Berlín para la Semana del Arte de Berlín - Instalación de sistema de sonido multicanal y espacialización 3D. Berlín (DE)</p>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>FEB 2019: </strong>Haize Lizarazu Performance MANUAL en la residencia de artistas Mediastruch. Sabadell (ES)</p>


                    <h3>Colaboraciones</h3>

                    <p><strong className={`${anchorIsHovered ? classToggle : null} link-default`}>2020: </strong>Diseño web y móvil para el estreno mundial del disco: WEDDING de Fonso, Simulacro en colaboración con amateur.rocks (WEB)</p>

                    </div>

                    <div className="mixcloud-player">
                    <iframe width="80%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fjavitorojas%2Fsoundscapes-collection-bells%2F" frameborder="0" ></iframe>
                         </div>
            </div>
        </div>
    )
}


export default About;