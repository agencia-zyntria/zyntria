import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Industries } from './components/Industries'
import { Services } from './components/Services'
import { HowItWorks } from './components/HowItWorks'
import { Metrics } from './components/Metrics'
import { LeadCapture } from './components/LeadCapture'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Industries />
      <Services />
      <HowItWorks />
      <Metrics />
      <LeadCapture />
      <Footer />
    </div>
  )
}

export default App
