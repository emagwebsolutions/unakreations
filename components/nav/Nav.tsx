import Link from 'next/link';
import Hamburgeropen from './Hamburgeropen';
import Hamburgerclose from './Hamburgerclose';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useGetQuery from '@/axios/useGetQuery';
import Cartbucket from '../Cartbucket';

const Nav = () => {
  type POST = {
    email: string;
    mobile1: string;
    mobile2: string;
    gpsaddress: string;
    officelocation: string;
    googlemap: string;
    facebook: string;
    twitter: string;
    instagram: string;
  }[];

  const { data } = useGetQuery('contact', '/contact');

  const getData: POST = data?.data || [];

  const arr = getData.map((v) => v);
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

  const path = usePathname();

  return (
    <>
      <section className="nav-section">

        <span>
          CALL:
          <a href="tel:+233576705880">
            {arr[0]?.mobile1}/{arr[0]?.mobile2}
          </a>
        </span>
        <span>Email us: {arr[0]?.email}</span>
        <Cartbucket />
  
      </section>

      <Hamburgeropen opennav={opennav} name="U & A Creation" />

      <nav data-nav="false" ref={nav} className="nav">
        <div className="nav-wrapper">
          <Hamburgerclose closenav={closenav} />
          <div className="logo">
            <Image src="/logo.jpg" width="70" height="60" alt="Logo" />
          </div>

          <ul>
            <li>
              <Link href="/" className={path === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className={
                  path === '/overview'
                    ? 'active'
                    : path === '/team'
                    ? 'active'
                    : ''
                }
              >
                About Us
              </Link>
              <ul>
                <li>
                  <Link href="/overview">Overview</Link>
                </li>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/#"
                className={
                  path === '/klodin'
                    ? 'active'
                    : path === '/grafix'
                    ? 'active'
                    : path === '/advertising'
                    ? 'active'
                    : path === '/printing'
                    ? 'active'
                    : path === '/training'
                    ? 'active'
                    : path === '/administrative'
                    ? 'active'
                    : ''
                }
              >
                Services
              </Link>
              <ul>
                <li>
                  <Link href="/klodin">U&A Klodin</Link>
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
              <Link
                href="/branding"
                className={path === '/branding' ? 'active' : ''}
              >
                Branding
              </Link>
            </li>

            <li>
              <Link href="/blog" className={path === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={path === '/contact' ? 'active' : ''}
              >
                Contact Us
              </Link>
            </li>

            <li className="request-btn">
              <Link href="/contact">Request a free quote</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
