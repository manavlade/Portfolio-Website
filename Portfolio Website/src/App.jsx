import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import titleimg from "../src/assests/titleimg.png"

function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Manav Lade | Full Stack Developer Portfolio</title>
          <meta
            name="description"
            content="Explore the portfolio of Manav Lade, a Full Stack Developer skilled in React.js, Next.js, Node.js, MongoDB, and more. Discover scalable web applications, innovative projects, and professional experience in software development."
          />
          <meta name="keywords" content="Manav Lade, Full Stack Developer, React.js, Next.js, Node.js, MERN Stack, Portfolio, Software Developer, Scalable Web Applications, MongoDB, Frontend Development, Backend Development, Cloud Engineer" />
          <meta name="author" content="Manav Lade" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Manav Lade | Full Stack Developer Portfolio" />
          <meta property="og:description" content="Explore Manav Lade's portfolio showcasing expertise in full stack development, scalable web applications, and software engineering. Discover professional projects and experience in React.js, Node.js, and more." />
          <meta property="og:image" content={titleimg} />
          <meta property="og:url" content="https://your-portfolio-link.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Manav Lade | Full Stack Developer Portfolio" />
          <meta name="twitter:description" content="Explore Manav Lade's professional portfolio featuring expertise in full stack development, software engineering, and scalable solutions." />
          <meta name="twitter:image" content={titleimg} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        
        <Navbar />e
      </div>

    </>
  )
}

export default App
