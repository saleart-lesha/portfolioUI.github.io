import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const PortfolioUI = () => {
  const ContactPage = lazy(() => import('./ContactPage/ContactPage.tsx'))
  const WorksPage = lazy(() => import('./WorksPage/WorksPage.tsx'))
  const BlogPage = lazy(() => import('./BlogPage/BlogPage.tsx'))

  return (
    <Suspense fallback={<span>Загрузка...</span>}>
      <Routes>
        <Route path='/' element={<ContactPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </Suspense>
  )
}

export default PortfolioUI
