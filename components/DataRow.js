import { useState } from 'react';


function DataRow({data, blackSquareTrigger, rowNumber, displayFirstContainer, firstContainerContent}) {

    const rowArray = [];

    data.forEach(object => object.row==rowNumber? rowArray.push(object) : "")

    let [ isSelected, setIsSelected ] = useState(0);

    const handleClickRow = () => {
        isSelected++
        isSelected == 3 ? isSelected = 0 : ""
        setIsSelected(isSelected)
        console.log(isSelected)
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
                                {<div dangerouslySetInnerHTML={{ __html: firstContainerContent }} />}
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
                                        className={`row-pics-container ${ isSelected == 1 ? 'big-row' : isSelected == 2 ? 'small-row' : isSelected == 0 ? 'default-row' : null }`} 
                                        key={dataJSON.id} 
                                    >
                                        { 
                                            dataJSON.info
                                            ?
                                            <div className="info">
                                                <h3>{ dataJSON.title }</h3>
                                                <p>{ dataJSON.info }</p>
                                            </div>
                                            :
                                            ""
                                        }
                                        <img className="row-pics" src={ dataJSON.src } alt={ dataJSON.title } />
                                    </div>
                                )
                            } else if(dataJSON.datatype=="yt") {
                                return(
                                    <div 
                                        className={`row-pics-container youtube-link ${ isSelected == 1 ? 'big-row' : isSelected == 2 ? 'small-row' : isSelected == 0 ? 'default-row' : null }`}
                                        key={dataJSON.id} 
                                    >
                                        <iframe width="auto" height="100%" 
                                            src={`https://www.youtube.com/embed/${dataJSON.src}`} title="YouTube video player" 
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                        />
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