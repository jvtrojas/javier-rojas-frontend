import React from 'react';
import DataRow2 from '../components/DataRow2';
import Data from '../public/js/data-projects.json';
import { getAbouts } from '../lib/api';

export async function getStaticProps() {
    const abouts = await getAbouts();
    return {
        props: { abouts },
        revalidate: 1,
    };
}

const data = Data.map((each) => {
    return each;
});

function About({ blackSquareTrigger, abouts }) {
    return (
        <div className='projects-page'>
            {abouts && abouts.map((about, index) => {
                return <DataRow2 data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={about} apiData={about} rowNumber={index} key={index} />;
            })}
            
        </div>
        
        
    );
}


export default About;
