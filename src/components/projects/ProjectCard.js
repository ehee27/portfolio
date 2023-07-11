import './projects.css'
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  cardContainer: {
    width: '100%',
    margin: 'auto',
  },
  cardMedia: {
    height: '180px',
    width: '70%',
    objectFit: 'cover',
    borderRadius: '.25rem',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'left',
    textAlign: 'left',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '11pt',
    padding: '20px 20px 20px 20px',
  },
})

const ProjectCard = ({ project }) => {
  const classes = useStyles()

  const { name, description, link, projectThumb } = project
  return (
    <Container>
      <Card className={classes.cardContainer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <div className="card-title">
            <p>{name}</p>
          </div>

          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="project-pic"
            image={projectThumb}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="p" component="div">
              {description}
            </Typography>
          </CardContent>

          <a href={link}>
            <button>VIEW MORE</button>
          </a>
        </Grid>
      </Card>
    </Container>
  )
}

export default ProjectCard
