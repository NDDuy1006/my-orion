import clsx from "clsx";
import styles from "../Hotel.module.scss"
import AlpsIcon from "@/library/IconsCustom/AlpsIcon";
import { RatingStarIcon } from "@/library";
import IqCheckIcon from "@/library/IconsCustom/IqCheckIcon";

export interface IProps {
  name: string;
  ratings: number;
  reviews: number;
}

const TitleBar = (props: IProps) => {
  const fixedRatings = Number(props.ratings.toFixed(0));
  
  return (
    <div className="border-solid border-[#000000]/10 border-b-[1px] border-x-0 border-t-0 py-4">
      <div className="container h-[75px] flex justify-between">
        <div className="flex">
          <div className="mr-[20px]">
            <AlpsIcon />
          </div>
          <div className="flex flex-col">
            <div className="py-2.5">
              <h2 className={clsx(styles.title, "font-[lora]")}>
                {props.name}
              </h2>
            </div>
            <div className="flex">
              {Array(fixedRatings).fill(
                <RatingStarIcon />
              )}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="mt-[30px] mr-4">
            <IqCheckIcon />
          </div>
          <div className="flex flex-col py-2.5 mt-2">
            <div>
              <h3 className={clsx(styles.rating)}><span>{props.ratings}</span> / 5</h3>
            </div>
            <div className={clsx(styles.reviews)}>
              {props.reviews} reviews
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default TitleBar;