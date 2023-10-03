import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

const Share = ({ excerpt }: { excerpt: string }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="share-icons">
      <div className="share-box">
        <div></div>
        <h4>Share Post</h4>
      </div>

      <FacebookShareButton url={shareUrl} hashtag={'#unakreations'}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={excerpt}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={excerpt} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
