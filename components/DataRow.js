import { useState } from 'react';


function DataRow({data, shuffleOrder, rowNumber}) {

    const rowArray = [];

    data.forEach(object => object.row==rowNumber? rowArray.push(object) : "")

    let [ isSelected, setIsSelected ] = useState(false);

    const handleClickRow4 = () => {
        setIsSelected(prevState => !prevState);
    }

    return(
        <>
            <div onClick={handleClickRow4} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    rowArray.map(
                        function(dataJSON) {
                            if(dataJSON.src.length!==11){
                                return(
                                        <div key={dataJSON.id} className={`row-pics-container ${ isSelected ? 'big-row' : "" }`} >
                                            <img className="row-pics" src={ dataJSON.src } alt={ dataJSON.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div key={dataJSON.id} className={`row-pics-container youtube-link ${ isSelected ? 'big-row' : "" }`} >
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