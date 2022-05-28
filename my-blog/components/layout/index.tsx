import type { NextPage } from 'next';
import Navbar from '../navbar/index';
import Footer from '../navbar/index';

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
