import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";


const roomSlideContent = [
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-1.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-2.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-3.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-4.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-5.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-6.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-7.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-8.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-2.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-1.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-4.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-3.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-6.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-6.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-8.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-7.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-4.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-5.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-2.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-3.jpg"
  },
  {
    imageTop: "http://localhost:3000/images/gallerry/gallery-1.jpg",
    imageBot: "http://localhost:3000/images/gallerry/gallery-8.jpg"
  },
]

interface GallerySliderCardProps {
  imageTop: string;
  imageBot: string;
}

const RenderSliderCard = ({
  imageTop,
  imageBot
}: GallerySliderCardProps
) => {
  return (
    <div className="overflow-hidden rounded-xl flex flex-col gap-[15px]">
      <div>
        <Image
          alt={'gallery'}
          className="w-full h-full"
          unoptimized
          width={0}
          height={0}
          src={imageTop}
        />
      </div>
      <div>
        <Image
          alt={'gallery'}
          className="w-full h-full"
          unoptimized
          width={0}
          height={0}
          src={imageBot}
        />
      </div>
    </div>
  )
};

const slideOption: SplideProps = {
  options: {
    rewind: false,
    type: 'loop',
    perPage: 4,
    gap: '1rem',
    perMove: 1,
    pagination: false,
    lazyLoad: true,
    drag: 'free',
  },
};

const GallerySlider = () => {
  return (
    <div className="rooms holiday">
      <Splide {...slideOption}>
        {roomSlideContent.map((splide, index) => (
          <SplideSlide key={index} className="cursor-grab">
            <RenderSliderCard {...splide} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
};

export default GallerySlider;