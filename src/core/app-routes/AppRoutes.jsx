import { Route, Routes } from 'react-router-dom';
import Mockman from 'mockman-js';
import HomePage from '../../pages/home-page/HomePage';
import MockbeeDocumentationPage from '../../pages/mockbee-documentation-page/MockbeeDocumentationPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route
        path="/mockbee-documentation"
        element={<MockbeeDocumentationPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
