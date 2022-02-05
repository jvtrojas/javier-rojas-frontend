import { useState } from 'react';
import BandcampPlayer from 'react-bandcamp';
import { isSafari } from 'react-device-detect';

function DataRow({ data, blackSquareTrigger, rowNumber, anchorIsHovered, classToggle, displayFirstContainer, firstContainerContent, apiData }) {
    const rowArray = [];

    apiData.pictures.forEach((object) => (object.row == rowNumber ? rowArray.push(object) : ''));
    let [isSelected, setIsSelected] = useState(0);

    const handleClickRow = () => {
        isSelected++;
        isSelected == 3 ? (isSelected = 0) : '';
        setIsSelected(isSelected);
    };

    const replaceContent = (data) => {
        let content = data.replace(/href/g, "target='_blank' href");
        return content;
    };

    {
        /* ROW SHUFFLE FUNCTION */
    }
    function shuffleRow(array) {
    }

    {
        /* PARA ACTIVAR SHUFFLE DESCOMENTAR ESTA FUNCION */
    }
    blackSquareTrigger !== 0 ? shuffleRow(rowArray) : null;
    const pictures = apiData.pictures;
    return (
        <>
            <div onClick={isSafari ? null : handleClickRow} className={` ${rowArray.length === 0 ? 'row-test' : ''} wrap row row-no_top_padding row-slide-wrapper hide-scrollbar`}>
                {/* Optional first row of text */}
                {apiData.content && displayFirstContainer == true ? (
                    <div className='data-row-txt'>
                        <div className='about-us-en-container first-container test-element'>
                            <div className='first-container-txt-section'>
                                {<div className={`${isSelected == 1 ? 'big-row-fc-txt' : isSelected == 2 ? 'small-row-fc-txt' : isSelected == 0 ? 'default-fc-row-txt' : null}`} dangerouslySetInnerHTML={{ __html: replaceContent(apiData.content) }} />}
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}{' '}
                {apiData && apiData.group && apiData.group.map((g, index) => {
                    return (
                    <div key={index} className={`row-pics-container ${isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null}`}>
                    {g.pictures && g.pictures.map((picture) => {
                        return <img className='row-pics' src={picture.url} />;
                    })}

                    {g.videos && g.videos.map((video) => {
                        return <video className='row-pics' key={video.id} height='100%' src={video.url} frameBorder='0' autoPlay muted loop allowFullScreen={false} playsInline></video>;
                    })}
                    {g.description && g.description && <div className={`row-pics-container ${isSelected == 1 ? 'big-row big-row-text padding-big-row' : isSelected == 2 ? 'small-row small-row-text padding-small-row' : isSelected == 0 ? 'default-row default-row-text padding-default-row' : null}`}  dangerouslySetInnerHTML={{ __html: replaceContent(g.description) }} >

                    </div>}

                </div>
                    )
                })}
               { }
                {/* Row of images and media*/}
                {/* {rowArray.map(function (dataJSON) {
                    if (dataJSON.datatype == '' || dataJSON.datatype == 'img') {
                        return (
                            <div className={`row-pics-container ${isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null}`} key={dataJSON.id}>
                                {dataJSON.info ? (
                                    <div className='row-element-info-text'>
                                        <h3>{dataJSON.title}</h3>
                                        <p>{dataJSON.info}</p>
                                        <a className={`link-default ${anchorIsHovered ? classToggle : null}`} href={dataJSON.link}>
                                            {' '}
                                            {dataJSON.link}{' '}
                                        </a>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <img className='row-pics' src={dataJSON.src} alt={dataJSON.title} />
                            </div>
                        );
                    } else if (dataJSON.datatype == 'youtube') {
                        return (
                            <div className={`row-pics-container youtube-link ${isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null}`} key={dataJSON.id}>
                                <iframe width='auto' height='100%' src={`https://www.youtube.com/embed/${dataJSON.src}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                            </div>
                        );
                    } else if (dataJSON.datatype == 'vimeo') {
                        return (
                            <div className={`row-pics-container youtube-link ${isSelected == 1 ? 'big-row padding-big-row' : isSelected == 2 ? 'small-row padding-small-row' : isSelected == 0 ? 'default-row padding-default-row' : null}`} key={dataJSON.id}>
                                <iframe width='auto' height='100%' src={`https://player.vimeo.com/video/${dataJSON.src}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                            </div>
                        );
                    } else if (dataJSON.datatype == 'bandcamp') {
                        return (
                            <div className={'bandcamp-container'} key={dataJSON.id}>
                                <img className='row-pics' src={dataJSON.img} alt={dataJSON.title} />
                                <BandcampPlayer tracklist='true' size='small' album={dataJSON.src} />
                            </div>
                        );
                    }
                })} */}
            </div>
        </>
    );
}

export default DataRow;
