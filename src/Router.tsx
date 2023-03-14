import { Route, Routes } from 'react-router-dom'
import { Construction } from './pages/Construction'
import { Home } from './pages/Home'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Construction />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
