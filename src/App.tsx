import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-50 via-white to-base-50 text-base-900 dark:from-base-900 dark:via-base-900 dark:to-base-950">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
