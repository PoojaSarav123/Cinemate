
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import {Header, Footer} from './components'
import { ScrollToTop } from './components/ScrollToTop';


function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <main className='dark:bg-slate-800'>
       <AllRoutes />
     </main>
    
      <Footer />
    </div>
  );
}

export default App;