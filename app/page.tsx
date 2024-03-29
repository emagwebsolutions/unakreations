'use client';

import Share from '@/components/Share';
import Universal from '@/components/Universal';
import Sectionfive from '@/components/home/Sectionfive';
import Sectionfour from '@/components/home/Sectionfour';
import Sectionone from '@/components/home/Sectionone';
import Sectionthree from '@/components/home/Sectionthree';
import Sectiontwo from '@/components/home/Sectiontwo';
import Slider from '@/components/home/Slider';

export default function Home() {
  return (
    <Universal>
      <Slider />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
    </Universal>
  );
}
