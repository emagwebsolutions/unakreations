'use client';

import Card from '@/components/Card';
import Universal from '@/components/Universal';
import Pageheader from '@/components/Pageheader';
import Icons from '@/components/Icons';
import Sectionthree from '@/components/home/Sectionthree';
import { useEffect, useState } from 'react';
import { useOverviewQuery } from '@/store/features/fetchData';

export default function Overview() {
  const [getData, setData] = useState('');
  const { data } = useOverviewQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);


  return (
    <Universal>
      <Pageheader />
      <section className="overview">
        <div>
          <div className="container">
            <div>
              <h2>Vision</h2>
              <div>
                To provide professional, full-service advertising, graphic
                design and website design solutions to businesses who understand
                the role and importance of their marketing material.
              </div>
            </div>
            <div>
              <h2>Mission</h2>
              <div>
                We enable our clients to communicate key messages and empower
                individuals to transform society through the innovative use of
                digital media, storytelling, graphic design and strategy. We
                amplify the impact of our work by inspiring others through our
                values-driven business practices.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <h2>Why choose UNA KREATIONS?</h2>
            <div className="home-flex">
              <Icons fa="umbrella" title="We care about our customers.." />
              <Icons fa="slideshare" title="Professional Services" />
              <Icons fa="bar-chart" title="Our Experience" />
              <Icons fa="phone" title="Communication Is The Key" />
              <Icons fa="id-card" title="Company Profile" />
            </div>
          </div>
        </div>

        <Sectionthree />
      </section>
    </Universal>
  );
}
