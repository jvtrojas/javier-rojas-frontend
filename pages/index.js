import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import DataRowHomepage from '../components/DataRowHomepage';
import { getHomepage } from '../lib/api';

export async function getStaticProps() {
    const homepageData = await getHomepage();

    return {
        props: { homepageData },
        revalidate: 1,
    };
}

function Index({blackSquareTrigger, anchorIsHovered, classToggle, homepageData}) {
    return (
        <BaseLayout className="global" >
            <div className="container-fluid">
                {homepageData && homepageData.map((cat)=>{
                    const pictures = cat.pictures;
                    const totalPics = cat.pictures.length;
                    const numberOfRows = Math.ceil(totalPics/30);
                    let content = [];
                    for(var i = 1; i <= numberOfRows; i++) {
                            let tempArray = [];
                            let start = (i -1) * 30;
                            let end = start + 29;
                            tempArray = pictures.slice(start, end)
                            tempArray = tempArray.map((elem)=> {
                                return {
                                    ...elem,
                                    row: i}
                            })
                            content.push(<DataRowHomepage data={tempArray} blackSquareTrigger={blackSquareTrigger} classToggle={classToggle} anchorIsHovered={anchorIsHovered} rowNumber={i} key={i}/>);
                    }
                return content;
            })}
            </div>
        </BaseLayout>
    )
}
export default Index;


