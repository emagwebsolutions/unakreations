'use client';

import Universal from '@/components/Universal';
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
    </Universal>
  );
}