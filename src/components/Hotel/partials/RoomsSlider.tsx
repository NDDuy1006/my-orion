import { BedIcon, CapacityIcon, ViewIcon } from "@/library";
import clsx from "clsx";
import Image from "next/image";
import styles from "../Hotel.module.scss";
import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import ButtonShare, { BtnConstClassName } from "@/components/global/ButtonShare";

interface RoomSlideProps { }

const roomSlideCardContent = [
  {
    title: 'Superior Suite “Dision for life”',
    size: "45",
    desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
    image: "http://localhost:3000/images/rooms/rooms-1.jpg",
    beds: "3 x King Bed",
    view: "Cave view",
    capacity: "capacity",
    price: 699,
    details: "Room Details",
  },
  {
    title: 'Superior Suite “Dision for life”',
    size: "98",
    desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
    image: "http://localhost:3000/images/rooms/rooms-2.jpg",
    beds: "2 x Peasant Bed",
    view: "Jungle view",
    capacity: "capacity",
    price: 699,
    details: "Room Details",
  },
  {
    title: 'Superior Suite “Dision for life”',
    size: "67",
    desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
    image: "http://localhost:3000/images/rooms/rooms-3.jpg",
    beds: "2 x Peasant Bed",
    view: "Cave view",
    capacity: "capacity",
    price: 899,
    details: "Room Details",
  },
  {
    title: 'Superior Suite “Dision for life”',
    size: "82",
    desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
    image: "http://localhost:3000/images/rooms/rooms-3.jpg",
    beds: "2 x Lord Bed",
    view: "Jungle view",
    capacity: "capacity",
    price: 899,
    details: "Room Details",
  },
];

interface RoomSlideCardProps {
  title: string;
  size: string;
  desc: string;
  image: string;
  beds: string;
  view: string;
  capacity: string;
  price: number;
  details: string;
}

const RenderRoomSlideCard = ({
  title,
  size,
  desc,
  image,
  beds,
  view,
  capacity,
  price,
  details
}: RoomSlideCardProps
) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <div className="w-full h-[400px]">
        <Image
          alt={'gallery'}
          className="w-full h-full"
          unoptimized
          width={0}
          height={0}
          src={image}
        />
      </div>
      <div className="flex-col px-[30px] py-[30px] bg-White">
        <div className="flex justify-between">
          <div className="max-w-[440px]">
            <h3 className={clsx(styles.roomTitle, "font-[lora] mb-2")}>{title}</h3>
            <p className={clsx(styles.roomDesc)}>{desc}</p>
          </div>
          <div>
            <span className={clsx(styles.roomSize, "py-1 px-1 rounded-2xl")}>{size}sqm</span>
          </div>
        </div>
        <div className="flex justify-between border-solid border-[#000000]/10 border-y-[1px] border-x-0 py-3">
          <div className="flex">
            <BedIcon />
            <p className="ml-[24px]">{beds}</p>
          </div>
          <div className="flex">
            <ViewIcon />
            <p className="ml-[24px] pr-[120px]">{view}</p>
          </div>
        </div>
        <div className="flex pt-6 justify-between">
          <div className={clsx(styles.roomCapacity, "flex flex-col")}>
            <CapacityIcon className="mb-1" />
            <p className="ml-1">{capacity}</p>
          </div>
          <div className="flex justify-between">
            <div className="mr-4">
               <p className="align-middle text-[14px] text-[#838383]">from <span className="text-[24px] font-[400] text-Black mt-[1px]">&euro;{price}</span></p>
            </div>
            <div>
              <ButtonShare onClick={() => { console.log('hello word!!!') }} style={BtnConstClassName.outline} content={details} size={"medium"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const slideOption: SplideProps = {
  options: {
    rewind: false,
    type: 'loop',
    perPage: 2,
    gap: '3.125rem',
    perMove: 1,
    pagination: false,
    lazyLoad: true,
    drag: 'free',
  },
};

const RoomsSlide = ({ }: RoomSlideProps) => {
  return (
    <div className="rooms holiday">
      <Splide {...slideOption}>
        {roomSlideCardContent.map((splide) => (
          <SplideSlide key={splide.title} className="cursor-grab">
            <RenderRoomSlideCard {...splide} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default RoomsSlide;