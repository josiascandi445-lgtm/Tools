import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const notify = useCallback((message) => {
    clearTimeout(timer.current);
    setToast({ message, id: Date.now() });
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <Home query={query} onQueryChange={setQuery} notify={notify} />
      <Footer notify={notify} />
      <Toast toast={toast} />
    </>
  );
}
