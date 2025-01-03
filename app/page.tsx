import Header from './components/Haeder'
import Features from './components/Features'
import Animation from './components/Animation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-600">NeevHQ Careers</h1>
        <p className="text-xl text-center mb-16 text-gray-600">
          Redefining what it means to 'take note' in healthcare
        </p>
        <Animation />
        <Features />
      </main>
      <Footer />
    </div>
  )
}