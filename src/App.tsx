import { useEffect } from 'react'
import { useCountStore } from './stores/common.store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  const { count: countFromStore } = useCountStore();


  useEffect(() => {

  }, [])

  return (
    <>
    <Header />
      <RouterProvider router={router} />
    <Footer />
    </>
  )
}

export default App
