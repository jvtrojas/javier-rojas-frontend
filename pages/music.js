import BaseLayout from '../components/layouts/BaseLayout';
import BandcampPlayer from 'react-bandcamp'

function Music() {
    return(
        <div className={"bandcamp-container"} >
            <BaseLayout className="global" >
                <div className="container-fluid">
                    <div className="wrap row row-no_top_padding row-slide-wrapper hide-scrollbar">

                        <div>
                            <img className="row-pics bandcamp-pic" src="https://f4.bcbits.com/img/a3239859545_2.jpg" alt="" />
                        </div>
                        <div className="bandcamp-container">
                            <div className="album-info">
                                <div className="album-title">
                                    <h3>Delia Blanco 6_2_12 (2020)</h3>
                                </div>
                                <div className="playlist">
                                    <p>
                                        1. 111111111111111111111111111
                                        <br></br>
                                        2. 22222222222222222
                                        <br></br>
                                        3. 333333333333333333
                                        <br></br>
                                        4. 4444444444444444
                                        <br></br>
                                        5. 55555555555555555
                                        <br></br>
                                        6. 66666666666666666
                                        <br></br>
                                        7. 7777777777777777777
                                    </p>
                                </div>
                                <div className="extra-info">
                                    <p>
                                        Artwork by:
                                        Credits
                                    </p>
                                </div>
                            </div>
                            <div className="player">
                                <BandcampPlayer tracklist="true" size="small" album="2105021443" />
                            </div>  
                        </div>

                        <div>
                            <img className="row-pics bandcamp-pic" src="https://f4.bcbits.com/img/a1946067698_16.jpg" alt="" />
                        </div>
                        <div className="bandcamp-container">
                            <div className="album-info">
                                <div className="album-title">
                                    <h3>En el reverso de lo real (2019)</h3>
                                </div>
                                <div className="playlist">
                                    <p>
                                    1. Eigenwelt
                                    <br></br>
                                    2. Concreción desplazada
                                    <br></br>
                                    3. Interludio arcaico
                                    <br></br>
                                    4. Alchemical Lexicon
                                    <br></br>
                                    5. Eschoyez y el tiempo
                                    <br></br>
                                    6. Fijado magnético
                                    <br></br>
                                    7. Decime quién sos, que querés
                                    <br></br>
                                    8. Sharp Concrete (Long Version)
                                    </p>
                                </div>
                                <div className="extra-info">
                                    <p>
                                        Artwork by:
                                        Credits
                                    </p>
                                </div>
                            </div>
                            <div className="player">
                                <BandcampPlayer tracklist="true" size="small" album="1175541768" />
                            </div>  
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </div>
        )    
}


export default Music