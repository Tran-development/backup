import React, { useRef, useState } from 'react';
import { InforPost } from '@/interfaces/interfaces';
import { Image } from 'antd';
interface VideoProps {
  index: number | string;
  post: InforPost;
  col: number;
}

const VideoPlayer: React.FC<VideoProps> = ({ post, col }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play().catch(error => {
          console.error('Error attempting to play the video:', error.message);
        });
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="card__content">
      {post?.type_file === 'Img' ? (
        <Image
          src={post.url_file}
          className={
            col === 24
              ? 'xl-video-player'
              : col === 6
              ? 'md-video-player'
              : 'xs-video-player'
          }
          placeholder={<Image preview={false} src={post.url_file} />}
        />
      ) : (
        <div
          className={
            col === 24
              ? 'xl-video-player'
              : col === 6
              ? 'md-video-player'
              : 'xs-video-player'
          }
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            width="100%"
            height={col === 6 ? '200px' : '100%'}
            controls
            playsInline
            muted={true}
            style={{ objectFit: 'fill' }}
          >
            <source src={post.url_file} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
