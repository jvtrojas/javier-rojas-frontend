import React from 'react';
import DataRow2 from '../components/DataRow2';
import Data from '../public/js/data-projects.json';
import { getMiscs } from '../lib/api';

export async function getStaticProps() {
    const miscs = await getMiscs();
    return {
        props: { miscs },
        revalidate: 1,
    };
}

const data = Data.map((each) => {
    return each;
});

function Miscellaneous({ blackSquareTrigger, miscs }) {
    return (
        <div className='projects-page'>
            {miscs && miscs.map((misc, index) => {
                return <DataRow2 data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={misc} apiData={misc} rowNumber={index} key={index} />;
            })}
        </div>
    );
}

export default Miscellaneous;
