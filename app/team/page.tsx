'use client';

import Card from '@/components/Card';
import Universal from '@/components/Universal';
import Pageheader from '@/components/Pageheader';
import { useOurteamQuery } from '@/store/features/fetchData';
import { useEffect, useState } from 'react';

export default function Team() {
  const [getData, setData] = useState('');
  const { data } = useOurteamQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <Universal>
      <Pageheader />
      <section className="team">
        <div>
          <div className="container">
            <h3>Meet our designers and developers</h3>
            <div>
              We are a digital agency helping businesses of all size get a
              better return from online activities.
            </div>
          </div>
        </div>

        <div className="container blog-flex card-gap justify-center">
          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>
          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>
          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>
          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>

          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>
          <Card img="/graphics.jpg">
            <h4>Fullname</h4>
            <p>job title</p>
          </Card>
        </div>

        <div>
          <h2>Marketing works! Design delivers.</h2>
          <p>
            We are a digital agency helping businesses of all size get a better
            return from online activities.
          </p>
        </div>
      </section>
    </Universal>
  );
}
