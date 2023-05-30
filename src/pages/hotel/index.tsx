import HotelFeature from "@/components/Hotel";
import TitleBar from "@/components/Hotel/partials/TitleBar";
import MainLayout from "@/layouts/MainLayout";
import { NextSheetWidthLayout } from "@/types/layoutType";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { IProps } from "@/components/Hotel/partials/TitleBar";



const HotelPage: NextSheetWidthLayout = ({ data }: any) => {
  // console.log(data);
  const props: IProps = data.hotel
  return (
    <>
      <HotelFeature />
      <TitleBar
        name={props.name}
        ratings={props.ratings}
        reviews={props.reviews}
      />
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