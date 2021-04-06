import { useState } from 'react';


function DataRow({data, shuffleOrder, rowNumber, displayFirstContainer, firstContainerContent}) {


    const rowArray = [];

    data.forEach(object => object.row==rowNumber? rowArray.push(object) : "")

    let [ isSelected, setIsSelected ] = useState(false);

    const handleClickRow4 = () => {
        setIsSelected(prevState => !prevState);
    }

    // shuffle order function
    // const shuffleOrder = () => {
    // let randomNumber = Math.floor(Math.random() * 12)
    // return( { order: `${randomNumber}` } )
    // }

    // if(blackSquareTrigger){
    //     shuffleOrder()
    // } else {
    //     shuffleOrder()
    // }

    console.log(rowArray)
    return(
        <>
            <div onClick={handleClickRow4} className={` ${ rowArray.length === 0 ? "row-test" : ""} wrap row row-no_top_padding row-slide-wrapper hide-scrollbar`}>
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
                                        className={`row-pics-container ${ isSelected ? 'big-row' : "" }`} 
                                        style={shuffleOrder() ? null : shuffleOrder()} 
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
                                        className={`row-pics-container youtube-link ${ isSelected ? 'big-row' : "" }`}
                                        style={shuffleOrder()}  
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