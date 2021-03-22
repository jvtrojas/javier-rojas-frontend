import Data from '../public/js/data-home.json';

const data = Data.map(each => {return each})
const row1 = [];
const row2 = [];

data.forEach(object => object.row==1 ? row1.push(object) : "")
data.forEach(object => object.row==2 ? row2.push(object) : "")

function Projects() {
    return(
        <div className="container-fluid">
            {/* Row 1 */}
            <div className="row row-no_top_padding wrap hide-scrollbar">
                { 
                    row1.map(
                        image => {
                            return(
                                    <div className="border-block">
                                        <img src={ image.src } alt={ image.title } />
                                    </div>
                            )
                        }
                    )
                }
            </div>

            {/* Row 2 */}
            <div className="row row-no_top_padding wrap hide-scrollbar">
                { 
                    row2.map(
                        image => {
                            return(
                                    <div className="border-block">
                                        <img src={ image.src } alt={ image.title } />
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