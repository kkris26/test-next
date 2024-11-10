import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Define the component props using the slice type from Prismic
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

// Hero component with video sourced from Prismic

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const videoUrl = (slice.primary.video_link as { url: string }).url;
  return (
    
    
    <div className="relative flex flex-col h-full w-full">
<video
  autoPlay
  muted
  loop
  className="z-[1] w-full h-[100vh] object-cover"
>
  <source
    src={videoUrl}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

      
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] text-white flex flex-col gap-5 text-center w-[300px]">
  <PrismicRichText
    field={slice.primary.heading}
    components={{
      heading1: ({ children }) => <h1 className="text-7xl">{children}</h1>,
    }}
  />

  <PrismicRichText
    field={slice.primary.body}
    components={{
      paragraph: ({ children }) => <p className=" w-[30%] text-white">{children}</p>,
    }}
  />
</div>

    </div>
  );
};

export default Hero;
