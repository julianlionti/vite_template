import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import EmotionPage from '../pages/EmotionPage'
import ReduxToolkitPage from '../pages/ReduxToolkitPage'
import LandingPage from '../pages/LandingPage'
import Page404 from '../pages/Page404'

const Main = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/emotion" element={<EmotionPage />}></Route>
        <Route path="/fetch" element={<ReduxToolkitPage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
