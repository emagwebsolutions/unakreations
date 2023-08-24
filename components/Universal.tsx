import Nav from './nav/Nav';
import Footer from './Footer';
import { useState } from 'react';

const Universal = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setShowNav] = useState(false);

  const handleHamburger = () => {
    setShowNav(true);
  };

  const hideHamburger = () => {
    setShowNav(false);
  };

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Universal;
