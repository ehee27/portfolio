import './App.css'
// import { Container, Grid, Button } from '@mui/material'
// import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import ProjectList from './components/projects/ProjectList'
import TechList from './components/tech/TechList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Navbar />
      <main>
        <About />
        <ProjectList />
        <TechList />
      </main>
      <Footer />
    </div>
  )
}

export default App
