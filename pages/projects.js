import React from 'react';
import DataRow2 from '../components/DataRow2';
import Data from '../public/js/data-projects.json';
import { getProjects } from '../lib/api';

export async function getStaticProps() {
    const projects = await getProjects();
    return {
        props: { projects },
        revalidate: 1,
    };
}

const data = Data.map((each) => {
    return each;
});

function Projects({ blackSquareTrigger, projects }) {
    return (
        <div className='projects-page'>
            {projects && projects.map((project, index) => {
                return <DataRow2 data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={project} apiData={project} rowNumber={index} key={index} />;
            })}
        </div>
    );
}

export default Projects;
