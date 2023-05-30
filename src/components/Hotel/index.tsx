import clsx from "clsx"
import styles from "./Hotel.module.scss"
import { Wrapper } from "../global/Wrapper"
import SearchMenu from "../global/SearchMenu"

const HotelFeature = () => {
  return (
    <div className={clsx(styles.hotelBg)}>
      <Wrapper>
        <h1 className={clsx('text-Main text-5xl text-center pt-[16.5rem]')}>
          A holiday in the Sonnenhotels is when the sun comes into your heart
        </h1>
      </Wrapper>
      <SearchMenu />
    </div>
  );
};

export default HotelFeature