import clsx from "clsx";
import styles from "../Hotel.module.scss";
import Image from "next/image";
import { BedIcon, ViewIcon } from "@/library";
import { Splide, SplideProps } from "@splidejs/react-splide";
import RoomsSlide from "./RoomsSlider";

const rooms = {
  title: "Rooms",
  desc: "Stylish elegance or modern ambience? You have the choice.",
}

const Rooms = () => {
  return (
    <div className="section bg-[#F7F7F7]">
      <div className="container py-[50px]">
        <div className="mb-7">
          <div className="flex">
            <Image src={""} alt="rooms" />
            <h2 className={clsx(styles.roomTitle, "font-[lora]")}>{rooms.title}</h2>
          </div>
          <div>
            <p className={clsx(styles.textSmall)}>{rooms.desc}</p>
          </div>
        </div>
        <div>
          <RoomsSlide />
        </div>
      </div>
    </div>
  )
}

export default Rooms;

// http://git.dision.office/Orion/orion.frontend.git