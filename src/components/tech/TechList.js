import './tech.css'
import { Database, Atom, HardDrives } from '@phosphor-icons/react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  techContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '95%',
  },
  techCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0.3rem',
    width: '20%',
    fontSize: '16pt',
    backgroundColor: 'rgba(0, 0, 0, 0.603)',
  },
})

const TechList = () => {
  const classes = useStyles()
  return (
    <section id="tech">
      <div className="title">
        <h3>TECHNOLOGIES</h3>
      </div>

      <div className="tech-description">
        <p>
          I'm a proficient Javascript developer with a passion for creating
          unique applications and solving problems. I studied Fullstack
          development through Fullstack Academy. These are a few of the
          technologies I like to work with.
        </p>
      </div>

      <Grid className={classes.techContainer} container spacing={8}>
        <Grid className={classes.techCard} item xs={12} sm={12} md={3} lg={3}>
          <div className="card-header">
            <Atom size={100} color="white" />
          </div>
          <div className="card-tech">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
          </div>
        </Grid>

        <Grid className={classes.techCard} item xs={12} sm={12} md={3} lg={3}>
          <div className="card-header">
            <HardDrives size={100} color="white" />
          </div>
          <div className="card-tech">
            <p>NodeJS</p>
            <p>Express</p>
          </div>
        </Grid>

        <Grid className={classes.techCard} item xs={12} sm={12} md={3} lg={3}>
          <div className="card-header">
            <Database size={100} color="white" />
          </div>
          <div className="card-tech">
            <p>Postgres</p>
            <p>MongDB</p>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default TechList
