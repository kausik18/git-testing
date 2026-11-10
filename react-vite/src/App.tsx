import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Services from './pages/Services.tsx'
import ServiceDetail from './pages/ServiceDetail.tsx'
import Blog from './pages/Blog.tsx'
import BlogPost from './pages/BlogPost.tsx'
import Contact from './pages/Contact.tsx'
import Faq from './pages/Faq.tsx'
import Privacy from './pages/Privacy.tsx'
import NotFound from './pages/NotFound.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
