import React from 'react'
import projects from '../ProjectData'


function Projects() {

    const projectRow = projects.map(project => {
        const {year, title, madeAt, builtWith, link, id} = project
        return (
            <tr key={id}>
                <td>{year}</td>
                <td>{title}</td>
                <td>{madeAt}</td>
                <td>{builtWith.map(lang => `${lang}, `)}</td>
                <td><a href={link} target="_blank">Link</a></td>
            </tr>
            )
        })


    return (
        <>
        <h1>Projects</h1>
        <h3>All Projects</h3>
       <table>
           <tr>
               <th>Year</th>
               <th>Title</th>
               <th>Made at</th>
               <th>Built with</th>
               <th>Link</th>
           </tr>
            {projectRow}
       </table>
       </>
    )
}

export default Projects