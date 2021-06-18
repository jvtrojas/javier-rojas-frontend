import React from 'react';
import DataRow2 from '../components/DataRow2';
import Data from '../public/js/data-projects.json';
import { getProjects } from '../lib/api';

export async function getStaticProps() {
    //   const project = await getProject(params.slug)
    const projects = await getProjects();
    //   const collaborators = await getCollaborators()
    return {
        props: { projects },
        revalidate: 1,
    };
}

const data = Data.map((each) => {
    return each;
});

function Projects({ blackSquareTrigger, projects }) {
    let projectsFirstContainerTxt = [
        `
        <h2>PROJECT #1</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
        `,
        `
        <h2>PROJECT #2</h2>
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        <p> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `,
    ];

    return (
        <div className='projects-page'>
            {projects.map((project, index) => {
                return <DataRow2 data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={project} apiData={project} rowNumber={index} key={index} />;
            })}
        </div>
    );
}

export default Projects;
