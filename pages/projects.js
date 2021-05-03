import React from 'react';
import DataRow from '../components/DataRow';
import Data from '../public/js/data-projects.json';


const data = Data.map(each => {return each})

function Projects({blackSquareTrigger}) {

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
        `
    ]


    return(
            <div className="projects-page">
                <DataRow data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={projectsFirstContainerTxt[0]} rowNumber="1" />
                <DataRow data={data} blackSquareTrigger={blackSquareTrigger} displayFirstContainer={true} firstContainerContent={projectsFirstContainerTxt[1]} rowNumber="2" />
            </div>
    )    
}

export default Projects