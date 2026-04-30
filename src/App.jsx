import'./App.css'
import{ Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      </Routes>

      <Footer /> </>
  )


}

export default App


