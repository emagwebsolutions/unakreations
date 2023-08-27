import Link from 'next/link';
import Hamburgeropen from './Hamburgeropen';
import Hamburgerclose from './Hamburgerclose';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const Nav = () => {
  const nav = useRef<HTMLElement>(null);

  const opennav = (e: React.MouseEvent<HTMLDivElement>) => {
    const cur = nav.current ? nav.current : '';
    const navElem = cur ? cur.getAttribute('data-nav') : '';
    if (navElem === 'false') {
      cur && cur.setAttribute('data-nav', 'true');
    }
  };

  const closenav = (e: React.MouseEvent<HTMLDivElement>) => {
    const cur = nav.current ? nav.current : '';
    const navElem = cur ? cur.getAttribute('data-nav') : '';
    if (navElem === 'true') {
      cur && cur.setAttribute('data-nav', 'false');
    }
  };

  useEffect(() => {
    const onclick = (e: any) => {
      if (e.target.matches('nav')) {
        e.target.setAttribute('data-nav', 'false');
      }
    };
    window.addEventListener('click', onclick);
    return () => {
      window.removeEventListener('click', onclick);
    };
  }, []);

  return (
    <>
      <section className="nav-section">
        <span>
          Call us now on:
          <a href="tel:+233576705880">+233 57 670 5880</a>
        </span>
        <span>Email us: info@unakreations.com</span>
      </section>

      <Hamburgeropen opennav={opennav} name="U & A Creation" />

      <nav data-nav="false" ref={nav} className="nav">
        <div className="nav-wrapper">
          <Hamburgerclose closenav={closenav} />
          <div className="logo">
            <Image src="/logo.jpg" width="70" height="60" alt="Logo" />
          </div>

          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#">About Us</Link>
              <ul>
              <li>
                  <Link href="/overview">Overview</Link>
                </li>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/service">Services</Link>
              <ul>
                <li>
                  <Link href="klodin">U&A Klodin</Link>
                </li>
                <li>
                  <Link href="/grafix">U&A GRAFIX</Link>
                </li>
                <li>
                  <Link href="/advertising">Advertising</Link>
                </li>
                <li>
                  <Link href="/printing">Printing</Link>
                </li>
                <li>
                  <Link href="/training">Training</Link>
                </li>
                <li>
                  <Link href="/administrative">Administrative Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#">Portfolio</Link>
              <ul>
                <li>
                  <Link href="/branding">Branding</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li className="request-btn">
              <Link href="/">Request a free quote</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
