import clsx from "clsx";
import styles from "../Hotel.module.scss";
import Image from "next/image";
import { AddressIcon, RatingStarIcon} from "@/library";
import ButtonShare, { BtnConstClassName } from "@/components/global/ButtonShare";

type contactData  = { title: string; icon: React.ReactNode}
export interface IProps {
  about: {
    title: string;
    text: string;
    logo: string;
    name: string;
    ratings: number;
    contact: contactData[]
  };
};

const About = ({ about }: IProps) => {
  return (
    <div className="section bg-[#FAFAFA]">
      <div className="container flex py-[50px] justify-between">
        <div className="max-w-[780px] flex flex-col justify-center">
          <h2 className={clsx(styles.aboutTitle)}>
            {about.title}
          </h2>
          <p className={clsx(styles.aboutText)}>
            {about.text}
          </p>
        </div>
        <div className={clsx(styles.aboutContact)}>
          <div className="flex flex-col text-center mb-5">
            <Image
              className="mx-auto"
              alt="hotel logo"
              height={34.67}
              width={150}
              src={require("@/assets/logos/FooterLogo.png")}
            />
            <h2 className={clsx(styles.aboutContactName, "font-[lora]")}>
              {about.name}
            </h2>
            <div className="flex mx-auto"> 
              {Array(about.ratings).fill(
                <RatingStarIcon />
              )}
            </div>
          </div>
          <div>
            {about.contact.map((ele: contactData, index: number) => (
              <div key={index} className="flex py-2 border-solid border-[#000000]/10 border-t-[1px] border-x-0 border-b-0">
                {ele.icon}
                <span className="font-normal text-base ml-4">{ele.title}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 w-fit">
            <ButtonShare onClick={() => { console.log('hello word!!!') }} style={BtnConstClassName.outline} content={'Send Hotel a Message'} size={"medium"} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

{/* <p key={index}>{ele.icon}</p> */}