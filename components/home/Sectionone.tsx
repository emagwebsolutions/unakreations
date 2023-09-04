import Image from 'next/image';
import Servicebuttons from '../Servicebuttons';
import Brands from '../Brands';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import useGetQuery from '@/axios/useGetQuery';

const Sectionone = () => {
  type MSSN = {
    title: string;
    body: any;
    slug: string;
  }[];

  type BRNDS = {
    title: string;
    img: string;
    slug: string;
  }[];

  const { data } = useGetQuery('overview', '/overview');
  const getData: MSSN = data?.data || [];

  const { data: branding } = useGetQuery('branding', '/branding');
  const getBrand: BRNDS = branding?.data || [];

  const vision = getData.filter((v) => v.slug === 'vision');
  const labels = getBrand.filter((v) => v.slug === 'labels');
  const billboard = getBrand.filter((v) => v.slug === 'billboards');
  const signage = getBrand.filter((v) => v.slug === 'signage');
  const businesscard = getBrand.filter((v) => v.slug == 'business-cards');
  const graphics = getBrand.filter((v) => v.slug === 'graphicsdesign');

  return (
    <section>
      <div className="container">
        <div className="sec1-caption">
          <div>
            <h1>{vision[0]?.title}</h1>
            <div className="divider"></div>
            <div>
              <PortableText value={vision[0]?.body} />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="container home-flex gap-2">
        <div>
          <div className="home-flex gap-2">
            <Brands img={labels[0]?.img} title={labels[0]?.title} />

            <Brands img={billboard[0]?.img} title={billboard[0]?.title} />
          </div>
          <div className="home-flex gap-2">
            <Brands img={businesscard[0]?.img} title={businesscard[0]?.title} />

            <Brands img={graphics[0]?.img} title={graphics[0]?.title} />
          </div>
        </div>

        <div>
          <div className="big-ser-img">
            <Image width="1000" height="500" src={signage[0]?.img} alt="" />
          </div>

          <div className="home-flex gap-2">
            <Servicebuttons name="PORTFOLIO" url="/portfolio" fa="pencil" />
            <Servicebuttons name="SERVICES" url="/klodin" fa="gear" />
          </div>
          <div className="home-flex gap-2">
            <Servicebuttons name="GET QUOTE" url="/contact" fa="book" />
            <Servicebuttons name="CONTACT" url="/contact" fa="envelope" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
