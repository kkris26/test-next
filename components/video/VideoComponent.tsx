// VideoComponent.tsx (Tanpa "use client")
const VideoComponent = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video autoPlay muted loop className="z-[1] w-full h-[100vh] object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
