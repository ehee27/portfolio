import './about.css'
import BackgroundAnimation from '../backgroundAnimation/BackgroundAnimation'

const About = () => {
  return (
    <section id="about">
      <div className="title">
        <h3>SCOTT LUCAS</h3>
      </div>
      <div className="sub-title">
        <p>Fullstack Software Engineer | Web Applications</p>
      </div>
      <div className="about-body">
        <p>
          I’m passionate about tech, the environment, my hobbies and art. I’ve
          been instrumental in building a web design agency from the ground up
          but I’m seeking a new challenge. I’ve had diverse life experience as a
          former professional baseball player, a group fitness coach and a
          commercial actor.
        </p>
        <br></br>
        <p>
          I’m a root cause full circle communicator, team-oriented energy giver
          and a creative problem solver. I’m eager to take the next step in my
          software development career utilizing my previous work experience,
          leadership and teamwork abilities.
        </p>
      </div>
      <div className="about-animation">
        <BackgroundAnimation />
      </div>
    </section>
  )
}

export default About
