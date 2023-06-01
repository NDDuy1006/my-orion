import clsx from "clsx";
import styles from "../Hotel.module.scss"
import AlpsIcon from "@/library/IconsCustom/AlpsIcon";
import { RatingStarIcon } from "@/library";
import IqCheckIcon from "@/library/IconsCustom/IqCheckIcon";

export interface IProps {
  hotel: {
    name: string;
    ratings: number;
    reviews: number;
  }
}

const TitleBar = ({ hotel }: IProps) => {
  const fixedRatings = Number(hotel.ratings.toFixed(0));
  
  return (
    <div className="py-4">
      <div className="container h-[75px] flex justify-between">
        <div className="flex">
          <div className="mr-[20px]">
            <AlpsIcon />
          </div>
          <div className="flex flex-col">
            <div className="py-2.5">
              <h2 className={clsx(styles.title, "font-[lora]")}>
                {hotel.name}
              </h2>
            </div>
            <div className="flex">
              {/* {Array(fixedRatings).fill(
                <RatingStarIcon />
              )} */}
              {[...Array(fixedRatings)].map((index) => (
                <RatingStarIcon key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex mt-1">
          <div className="mt-9 mr-4">
            <IqCheckIcon />
          </div>
          <div className="flex flex-col py-2.5 mt-2">
            <div>
              <h3 className={clsx(styles.rating)}><span>{hotel.ratings}</span> / 5</h3>
            </div>
            <div className={clsx(styles.reviews)}>
              {hotel.reviews} reviews
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default TitleBar;