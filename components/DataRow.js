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
                        function(image) {
                            if(image.src.length!==11){
                                return(
                                        <div className={`row-pics-container ${ isSelected ? 'big-row' : "" }`} style={shuffleOrder()} >
                                            <img className="row-pics" src={ image.src } alt={ image.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div className={`row-pics-container youtube-link ${ isSelected ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                <iframe width="auto" height="100%" 
                                                    src={`https://www.youtube.com/embed/${image.src}`} title="YouTube video player" 
                                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
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