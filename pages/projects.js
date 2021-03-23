import Data from '../public/js/data-home.json';
import BlackSquareShuffler from '../components/layouts/BlackSquareShuffler';

const data = Data.map(each => {return each})
const row1 = [];
const row2 = [];
const row3 = [];

data.forEach(object => object.row==1 ? row1.push(object) : "")
data.forEach(object => object.row==2 ? row2.push(object) : "")
data.forEach(object => object.row==3 ? row3.push(object) : "")

const shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 12)
    return( { order: `${randomNumber}` } )
}

function Projects() {

    return(
        <div className="container-fluid">
            {/* Row 1 */}
            <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row1.map(
                        function(image) {
                            if(image.src.length!==11){
                                return(
                                        <div className="row-pics-container" style={shuffleOrder()} >
                                            <img className="row-pics" src={ image.src } alt={ image.title } />
                                        </div>
                                )
                            } else {
                                    return(
                                            <div className="row-pics-container" style={shuffleOrder()} >
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

            {/* Row 2 */}
            <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row2.map(
                        image => {
                            return(
                                    <div className="row-pics-container" style={shuffleOrder()} >
                                        <img className="row-pics" src={ image.src } alt={ image.title } />
                                    </div>
                            )
                        }
                    )
                }
            </div>

            {/* Row 3 */}
            <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row3.map(
                        image => {
                            return(
                                    <div className="row-pics-container" style={shuffleOrder()} >
                                        <img className="row-pics" src={ image.src } alt={ image.title } />
                                    </div>
                            )
                        }
                    )
                }
            </div>

        </div>
    )    
}

export default Projects