import AppRoutes from '../../../core/app-routes/AppRoutes';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="section">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
