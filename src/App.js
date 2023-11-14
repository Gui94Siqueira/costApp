import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Navbar from './components/layout/Navbar'
import Footer from './components//layout/Footer'
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
function App() {
  return (
  <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
  </Router>
  ) 
}

export default App;
