import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

const Share = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <FacebookShareButton
        url={
          'https://www.unakreations.com/blog/5-cheek-hurting-videos-of-black-sherif-that-show-he-could-succeed-at-comedy-too'
        }
        hashtag={'#unakreations'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons for your next React apps.'}
      >

        
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons for your next React apps.'}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  );
};

export default Share;
