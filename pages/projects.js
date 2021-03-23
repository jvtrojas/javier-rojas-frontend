import Data from '../public/js/data-home.json';

const data = Data.map(each => {return each})
const row1 = [];
const row2 = [];
const row3 = [];

data.forEach(object => object.row==1 ? row1.push(object) : "")
data.forEach(object => object.row==2 ? row2.push(object) : "")
data.forEach(object => object.row==3 ? row3.push(object) : "")

function Projects() {
    return(
        <div className="container-fluid">
            {/* Row 1 */}
            <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">
                { 
                    row1.map(
                        image => {
                            return(
                                    <div className="row-pics-container">
                                        <img className="row-pics" src={ image.src } alt={ image.title } />
                                    </div>
                            )
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
                                    <div className="row-pics-container">
                                        <img className="row-pics" style={{order:'1'}} src={ image.src } alt={ image.title } />
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
                                    <div className="row-pics-container">
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