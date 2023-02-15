import ForumThread from '../Components/ForumThread'

const Home = ({videoURL, imgURL, audioURL}) => {
  console.log(videoURL);
  console.log(imgURL);
  console.log(audioURL);

  return (
      <div className="tw-pt-24 tw-pb-8">
          <div className="threads-container container">
            {videoURL && <video src={videoURL} controls></video>}
            {imgURL && <img src={imgURL} alt="some image" />}
            {audioURL && <audio src={audioURL} controls></audio>}
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
              <ForumThread />
          </div>
      </div>
  );
}

export default Home