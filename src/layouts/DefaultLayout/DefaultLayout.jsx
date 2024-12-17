import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from '../partials/Navbar/NavBar';
import Footer from '../partials/Footer/Footer';
import './defaultLayout.css';

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout className="layout-container">
      <NavBar />
      <Content className="content">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default DefaultLayout;
