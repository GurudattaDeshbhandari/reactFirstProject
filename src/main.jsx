import { createRoot } from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


createRoot(document.getElementById('root')).render( 
  <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
  



