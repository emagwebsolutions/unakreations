import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url: string;
  children?: React.ReactNode;
};

const Videocomponent = ({ url, children }: UR) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };

  const VIDEO_WIDTH = `100%`;
  const VIDEO_HEIGHT = `700`;

  const opts: YouTubeProps['opts'] = {
    height: VIDEO_HEIGHT,
    width: VIDEO_WIDTH,
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      loop: 1,
      start: 1,
    },
  };

  if (url) {
    return (
      <div className="youtube">
        <YouTube
          videoId={getYouTubeID(url)}
          opts={opts}
          onReady={onPlayerReady}
          onEnd={onPlayerEnd}
        />
        <div>{children}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Videocomponent;
