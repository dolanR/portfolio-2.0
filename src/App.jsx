import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'

function App() {

  return (
    <div>
      <Routes> 
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
