import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../widget/Header/Header.tsx'
import Footer from '../widget/Footer/Footer.tsx'

const PortfolioUI = () => {
  const ContactPage = lazy(() => import('./ContactPage/ContactPage.tsx'))
  const WorksPage = lazy(() => import('./WorksPage/WorksPage.tsx'))
  const BlogPage = lazy(() => import('./BlogPage/BlogPage.tsx'))
  const WorkDetailPage = lazy(() => import('./WorksPage/WorkDetailPage.tsx'))

  return (
    <Suspense fallback={<span>Загрузка...</span>}>
      <Header />
      <Routes>
        <Route path='/' element={<ContactPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/works/1' element={<WorkDetailPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default PortfolioUI
