import type { NextPage } from 'next';
import Navbar from 'components/navbar/index';
import Footer from 'components/footer/index';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
