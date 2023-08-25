'use client';

import Card from '@/components/Card';
import Universal from '@/components/Universal';
import Aboutheader from '@/components/about/Aboutheader';

export default function Team() {
  return (
    <Universal>
      <Aboutheader />
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

        <div className="container flex card-gap justify-center">
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
