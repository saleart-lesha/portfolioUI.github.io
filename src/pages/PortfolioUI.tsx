import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../widget/Header/Header.tsx'

const PortfolioUI = () => {
  const ContactPage = lazy(() => import('./ContactPage/ContactPage.tsx'))
  const WorksPage = lazy(() => import('./WorksPage/WorksPage.tsx'))
  const BlogPage = lazy(() => import('./BlogPage/BlogPage.tsx'))

  return (
    <Suspense fallback={<span>Загрузка...</span>}>
      <Header />
      <Routes>
        <Route path='/' element={<ContactPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </Suspense>
  )
}

export default PortfolioUI
