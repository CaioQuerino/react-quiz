import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Questions } from '../pages/Questions'
import { FeedBacks } from '../pages/FeedBacks'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/feedbaks" element={<FeedBacks />} />
            <Route path="*" element={<h1>Erro 404 rota não encontrada</h1>} />
        </Routes>
    )
}