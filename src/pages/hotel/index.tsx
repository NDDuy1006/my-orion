import HotelFeature from "@/components/Hotel";
import TitleBar from "@/components/Hotel/partials/TitleBar";
import MainLayout from "@/layouts/MainLayout";
import { NextSheetWidthLayout } from "@/types/layoutType";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { IProps } from "@/components/Hotel/partials/TitleBar";
import MenuBar from "@/components/Hotel/partials/MenuBar";
import Features from "@/components/Hotel/partials/Features";
import About from "@/components/Hotel/partials/About";
import { AddressIcon, PhoneIcon, SocialIcon } from "@/library";
import Rooms from "@/components/Hotel/partials/Rooms";
import GallerySection from "@/components/Hotel/partials/GallerySection";
import { ReviewSection } from "@/components/Hotel/partials/ReviewSection";

const aboutData = {
  title: "Where a charming villa meets heart-pounding tree houses in the beautiful Harz mountains.",
  text: "Wow, what an eye-catcher: the historic villa of the 4-star Sonnenresort Ettershaus in Bad Harzburg inspires at first sight. Surrounded by the Harz Mountains with their great holiday offers for active holidays, located in a lovingly landscaped, park-like area, the Sonnenresort Ettershaus is a new attraction in the Bad Harzburg spa. You will sleep well in the modern apartment building, in the fascinating tree houses or in the historic villa. In the à la carte restaurant Tauts and in the restaurant Ursprung we spoil you with modern, creative Harz cuisine. The spacious wellness areain the hotel ensures well-being on vacation. Whether romantic for two or with the whole family: let yourself go and feel the very special aura of the sun resort Ettershaus. Here are no wishes left!",
  logo: "s",
  name: "ettershaus",
  ratings: 4,
  contact: [
    {
      title: "Nordhauser Strasse 1 38667 Bad Harzburg, Germany",
      icon: <AddressIcon />,
    },
    {
      title: "+49 5322 78789 0",
      icon: <PhoneIcon />,
    },
    {
      title: "sonnenresortsETTERSHAUS",
      icon: <SocialIcon />,
    }
  ]
};

const HotelPage: NextSheetWidthLayout = ({ data }: any) => {
  // console.log(data);
  const props: IProps = data
  return (
    <>
      <HotelFeature />
      <TitleBar
        hotel={props.hotel}
      />
      <MenuBar />
      <Features />
      <About
        about={aboutData} 
      />
      <Rooms />
      <GallerySection />
      <ReviewSection />
    </>
  )
};

HotelPage.Layout = MainLayout;

export default HotelPage;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/hotelDetail");

    return {props: {data: data}, revalidate: 60};
  } catch (error) {
    return { props: { resStringified: null } };
  }
}