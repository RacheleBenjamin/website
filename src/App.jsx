import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudy from './components/CaseStudy'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Research from './components/Research'
import { useHashRoute } from './hooks/useHashRoute'

export default function App() {
  const route = useHashRoute()
  const isResearch = route === 'research'

  return (
    <div className="font-sans antialiased">
      <Nav variant={isResearch ? 'research' : 'home'} />
      {isResearch ? (
        <Research />
      ) : (
        <main>
          <Hero />
          <CaseStudy />
          <Experience />
          <Contact />
        </main>
      )}
    </div>
  )
}
