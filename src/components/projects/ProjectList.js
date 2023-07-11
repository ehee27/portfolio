import { projectData } from '../../projects'
import ProjectCard from './ProjectCard'
import { Grid } from '@material-ui/core'

const ProjectList = () => {
  return (
    <section id="projects">
      <div className="title">
        <h3>MY PROJECTS</h3>
      </div>
      <Grid container spacing={2}>
        {projectData.map(project => {
          return (
            <Grid item key={project.id} xs={12} sm={6} md={4} lg={4}>
              <ProjectCard project={project} />
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default ProjectList
