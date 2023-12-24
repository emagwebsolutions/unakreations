import Nav from './nav/Nav';
import Footer from './Footer';

const Universal = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Universal;
