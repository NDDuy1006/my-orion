import clsx from "clsx";
import styles from "../Hotel.module.scss"
import Link from "next/link"
import ButtonShare, { BtnConstClassName } from "@/components/global/ButtonShare";
import { MenuDropDownIcon } from "@/library";

const menuItems = {
  items: [
    {
      title: "About"
    },
    {
      title: "Rooms"
    },
    {
      title: "Dining",
    },
    {
      title: "Services"
    },
    {
      title: "Offers"
    },
    {
      title: "History"
    },
    {
      title: "Media Gallery"
    },
    {
      title: "Your Hosts"
    },
    {
      title: "Reviews"
    },
  ],
};

const { items } = menuItems;

const MenuBar = () => { 
  return (
    <div className="border-solid border-[#000000]/10 border-y-[1px] border-x-0">
      <div className="container flex justify-between ">
        <div className="flex">
          {items.map((item, idx) => (
            <Link key={idx} className={clsx(styles.menuItem, "mr-[35px] text-Black")} href="#">
              {item.title}
              {(item.title === "Dining" || item.title === "Services") && (
                <MenuDropDownIcon />
              )}
            </Link>
          ))}
        </div>
        <div className="my-auto">
          <ButtonShare onClick={() => { console.log('hello word!!!') }} style={BtnConstClassName.outline} content={'Download Brochure'} />
        </div>
      </div>
    </div>
  )
};

export default MenuBar;