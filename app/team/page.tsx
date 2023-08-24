'use client';

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

        <div className="container"></div>

        <div></div>
      </section>
    </Universal>
  );
}
