import { useState } from 'react';
import BandcampPlayer from 'react-bandcamp'

function DataRow({data, blackSquareTrigger, rowNumber, anchorIsHovered, classToggle, displayFirstContainer, firstContainerContent}) {

    const rowArray = [];

    data.forEach(object => object.row==rowNumber? rowArray.push(object) : "")

    let [ isSelected, setIsSelected ] = useState(0);

    const handleClickRow = () => {
        isSelected++
        isSelected == 3 ? isSelected = 0 : ""
        setIsSelected(isSelected)
    }

    {/* ROW SHUFFLE FUNCTION */}
    function shuffleRow(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    {/* PARA ACTIVAR SHUFFLE DESCOMENTAR ESTA FUNCION */}
    blackSquareTrigger !== 0 ? shuffleRow(rowArray) : null;

    return(
        <>
            <div onClick={handleClickRow} className={` ${ rowArray.length === 0 ? "row-test" : ""} wrap row row-no_top_padding row-slide-wrapper hide-scrollbar`}>
                {/* Optional first row of text */}
                {   
                    displayFirstContainer == true 
                    ?
                    <div className="data-row-txt">
                        <div className="about-us-en-container first-container test-element">
                            <div className="first-container-txt-section">
                                {<div className={`${ isSelected == 1 ? 'big-row-fc-txt' : isSelected == 2 ? 'small-row-fc-txt' : isSelected == 0 ? 'default-fc-row-txt' : null }`} dangerouslySetInnerHTML={{ __html: firstContainerContent }} />}
                            </div>
                        </div>
                    </div>
                    :
                    ""
                }
                {/* Row of images and media*/}
                {
                    rowArray.map(
                        function(dataJSON) {
                            if(dataJSON.datatype==""||dataJSON.datatype=="img"){
                                return(
                                    <div 
                                        className={`row-pics-container ${ isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null }`} 
                                        key={dataJSON.id} 
                                    >
                                        { 
                                            dataJSON.info
                                            ?
                                            <div className="row-element-info-text">
                                                <h3>{ dataJSON.title }</h3>
                                                <p>{ dataJSON.info }</p>
                                                <a className={`link-default ${anchorIsHovered ? classToggle : null}`} href={ dataJSON.link }> {dataJSON.link} </a>
                                            </div>
                                            :
                                            ""
                                        }
                                        <img className="row-pics" src={ dataJSON.src } alt={ dataJSON.title } />
                                        
                                    </div>
                                )
                            } else if(dataJSON.datatype=="youtube") {
                                return(
                                    <div 
                                        className={`row-pics-container youtube-link ${ isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null }`}
                                        key={dataJSON.id} 
                                    >
                                        <iframe width="auto" height="100%" 
                                            src={`https://www.youtube.com/embed/${dataJSON.src}`} title="YouTube video player" 
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                        />
                                    </div>
                                )
                            } else if(dataJSON.datatype=="vimeo") {
                                return(
                                    <div 
                                        className={`row-pics-container youtube-link ${ isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null }`}
                                        key={dataJSON.id} 
                                    >
                                        <iframe width="auto" height="100%" 
                                            src={`https://player.vimeo.com/video/${dataJSON.src}`} title="YouTube video player" 
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                        />
                                    
                                    </div>
                                )
                            } else if(dataJSON.datatype=="bandcamp") {
                                return(
                                    <div 
                                        className={"bandcamp-container"} 
                                        key={dataJSON.id} 
                                    >
                                        <img className="row-pics" src={ dataJSON.img } alt={ dataJSON.title } />
                                        <BandcampPlayer tracklist="true" size="small" album={ dataJSON.src } />
                                        
                                    </div>
                                    
                                )
                            }
                        }
                    )
                }
            </div>
        </>
    )
}

export default DataRow;