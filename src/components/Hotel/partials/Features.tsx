import { AccessibleRoomIcon, BarIcon, BikingIcon, ElevatorIcon, HikingIcon, IndoorOutdoorIcon, ParkingIcon, RestaurantIcon, TreeHouseIcon, WellnessSpaIcon, WifiIcon } from "@/library"
import SpaciousIcon from "@/library/IconsCustom/SpaciousIcon"
import clsx from "clsx";
import styles from "../Hotel.module.scss"


const featureItems = {
  items: [
    {
      title: "Free WIFI",
      icon: <WifiIcon />,
    },
    {
      title: "Free Parking",
      icon: <ParkingIcon />,
    },
    {
      title: "Hotel Bar",
      icon: <BarIcon />,
    },
    {
      title: "Accessible Rooms",
      icon: <AccessibleRoomIcon />,
    },
    {
      title: "Tree Houses",
      icon: <TreeHouseIcon />,
    },
    {
      title: "Wellness & Spa",
      icon: <WellnessSpaIcon />,
    },
    {
      title: "Mountain Biking",
      icon: <BikingIcon />,
    },
    {
      title: "Elevators",
      icon: <ElevatorIcon />,
    },
    {
      title: "A La Carte Restaurant",
      icon: <RestaurantIcon />,
    },
    {
      title: "Spacious apartments",
      icon: <SpaciousIcon />,
    },
    {
      title: "Combined indoor / outdoor pool",
      icon: <IndoorOutdoorIcon />,
    },
    {
      title: "Hiking from the hotel",
      icon: <HikingIcon />,
    },
  ]
};

const { items } = featureItems;

const Features = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-wrap">
        {items.map((item, idx) => (
          <div key={idx} className={clsx(styles.featureItem, "flex w-[270px] my-2 mr-12")}>
            {item.icon}
            <p className="ml-6 mt-1">
              {item.title}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Features;