import Data from '../public/js/data-home.json';
import { useState } from 'react';

const data = Data.map(each => {return each})
const row1 = [];
const row2 = [];
const row3 = [];

data.forEach(object => object.row==1 ? row1.push(object) : "")
data.forEach(object => object.row==2 ? row2.push(object) : "")
data.forEach(object => object.row==3 ? row3.push(object) : "")

// shuffle order function - on reload
const shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 12)
    // return( { order: `${randomNumber}` } )
}

function Projects() {

    let [ isRow1, setRow1 ] = useState(false);
    let [ isRow2, setRow2 ] = useState(false);
    let [ isRow3, setRow3 ] = useState(false);

    const handleClickRow1 = () => {
        setRow1(prevState => !prevState);
    }
    const handleClickRow2 = () => {
        setRow2(prevState => !prevState);
    }
    const handleClickRow3 = () => {
        setRow3(prevState => !prevState);
    }

    return(
        <div className="container-fluid">
            {/* Row 1 */}
            <div onClick={handleClickRow1} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row1.map(
                        function(image) {
                            if(image.src.length!==11){
                                return(
                                        <div key={image.id} className={`row-pics-container ${ isRow1 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                            <img key={image.id} className="row-pics" src={ image.src } alt={ image.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div key={image.id} className={`row-pics-container youtube-link ${ isRow1 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                                <iframe key={image.id} width="auto" height="100%" 
                                                    src={`https://www.youtube.com/embed/${image.src}`} title="YouTube video player" 
                                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                                />
                                            </div>
                                    )
                            }
                        }
                    )
                }
            </div>

            {/* Row 2 */}
            <div onClick={handleClickRow2} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row2.map(
                        function(image) {
                            if(image.src.length!==11){
                                return(
                                        <div key={image.id} className={`row-pics-container ${ isRow2 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                            <img className="row-pics" src={ image.src } alt={ image.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div key={image.id} className={`row-pics-container youtube-link ${ isRow2 ? 'big-row' : "" }`} style={shuffleOrder()} >
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

            {/* Row 3 */}
            <div onClick={handleClickRow3} className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row3.map(
                        function(image) {
                            if(image.src.length!==11){
                                return(
                                        <div key={image.id} className={`row-pics-container ${ isRow3 ? 'big-row' : "" }`} style={shuffleOrder()} >
                                            <img className="row-pics" src={ image.src } alt={ image.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div key={image.id} className={`row-pics-container youtube-link ${ isRow3 ? 'big-row' : "" }`} style={shuffleOrder()} >
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
        </div>
    )    
}

export default Projects