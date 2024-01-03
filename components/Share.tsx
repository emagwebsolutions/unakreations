import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';


const Share = ({ excerpt }: { excerpt: string }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';


  return (
    <div className="share-icons">
      <div className="share-box">
        <div></div>
        <h4>Share Post</h4>
      </div>

      <FacebookShareButton url="https://www.unakreations.com" hashtag={'#unakreations'}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
