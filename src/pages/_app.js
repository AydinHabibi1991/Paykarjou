import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css';
import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import AppProvider from '@/context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <MainLayout>{<Component {...pageProps} />}</MainLayout>
    </AppProvider>
  );
}
