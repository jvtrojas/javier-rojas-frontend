import React from 'react';
import ProjectRow from "../components/ProjectRow/ProjectRow";
// import DataRow2 from '../components/DataRow2';
import Data from '../public/js/data-projects.json';
import { getProjects } from '../lib/api';

export async function getStaticProps() {
    const projects = await getProjects();
    return {
        props: { projects },
        revalidate: 1,
    };
}

function Projects2({ projects }) {
    return (
            <>
                {projects?.map((project) => (
                    <ProjectRow
                        // blackSquareTrigger={blackSquareTrigger}
                        // displayFirstContainer={true}
                        // firstContainerContent={project}
                        apiData={project}
                        // rowNumber={index}
                        key={project.id}
                    />
                )
                )}
            </>
    );
}

export default Projects2;
