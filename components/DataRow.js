import { useState } from 'react';


function DataRow({data, rowNumber}) {

    const rowArray = [];

    data.forEach(object => object.row==rowNumber? rowArray.push(object) : "")

    let [ isSelected, setIsSelected ] = useState(false);

    const handleClickRow4 = () => {
        setIsSelected(prevState => !prevState);
    }

    // shuffle order function
    const shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 12)
    return( { order: `${randomNumber}` } )
    }

    // if(blackSquareTrigger){
    //     shuffleOrder()
    // } else {
    //     shuffleOrder()
    // }


    return(
        <>
            <div onClick={handleClickRow4} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    rowArray.map(
                        function(dataJSON) {
                            if(dataJSON.datatype==""||dataJSON.datatype=="img"){
                                return(
                                    <div 
                                        className={`row-pics-container ${ isSelected ? 'big-row' : "" }`} 
                                        style={shuffleOrder()} 
                                        key={dataJSON.id} 
                                    >
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
                            } else if(dataJSON.datatype=="txt") {
                                return(
                                    <div 
                                        className={`row-pics-container row-txt ${ isSelected ? 'big-row' : "" }`}
                                        style={shuffleOrder()}  
                                        key={dataJSON.id} 
                                    >
                                        <h3>{dataJSON.title}</h3>
                                        <p>{dataJSON.content}</p>
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