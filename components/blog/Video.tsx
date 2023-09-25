import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url: string;
  children?: React.ReactNode;
};

const Video = ({ url, children }: UR) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };



  const VIDEO_WIDTH = `100%`;
  const VIDEO_HEIGHT = "360"

  const opts: YouTubeProps['opts'] = {
    width: VIDEO_WIDTH,
    height: VIDEO_HEIGHT,
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
      loop: 0,
      start: 0,
    },
  };

  if (url) {
    return (
      <div>
        <YouTube
          videoId={getYouTubeID(url)}
          opts={opts}
          onReady={onPlayerReady}
        />
        <div>{children}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Video
