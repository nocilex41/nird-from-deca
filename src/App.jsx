import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PosturalHealth from './pages/PosturalHealth/PosturalHealth'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sante-posturale" element={<PosturalHealth />} />
        </Routes>
    )
}

export default App
