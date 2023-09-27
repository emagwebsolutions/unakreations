'use client';

import Universal from '@/components/Universal';
import Sectionfour from '@/components/home/Sectionfour';
import Sectionone from '@/components/home/Sectionone';
import Sectionthree from '@/components/home/Sectionthree';
import Sectiontwo from '@/components/home/Sectiontwo';
import Slider from '@/components/home/Slider';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export default function Home() {
  const shareUrl = 'https://www.unakreations.com/';

  return (
    <Universal>
      <FacebookShareButton
        url={shareUrl}
        quote="U & A Kreation is the best"
        hashtag="#U&AKreation"
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <Slider />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </Universal>
  );
}
