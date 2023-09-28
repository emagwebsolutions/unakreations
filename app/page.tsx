'use client';

import Universal from '@/components/Universal';
import Sectionfour from '@/components/home/Sectionfour';
import Sectionone from '@/components/home/Sectionone';
import Sectionthree from '@/components/home/Sectionthree';
import Sectiontwo from '@/components/home/Sectiontwo';
import Slider from '@/components/home/Slider';

import { FacebookShareButton, FacebookIcon } from 'next-share';

export default function Home() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Universal>
      <FacebookShareButton
        url={'https://github.com/next-share'}
        quote={'next-share is a social share buttons for your next React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <Slider />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </Universal>
  );
}
