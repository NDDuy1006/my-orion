import Image from 'next/image';

interface RenderLocationProps {
  data: {
    countryName: string;
    data: {
      cityName: string;
      propertyName: string;
      propertyCode: string;
    }[];
  }[];
}

const RenderLocation: React.FC<RenderLocationProps> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <div key={item.countryName} className="flex items-center ">
          <div className="relative w-4 h-4">
            <Image alt="" width={0} height={0} src={require('public/images/icons/location.svg')} />
          </div>
          <p>{item.countryName}</p>
          {item.data.map((hotel) => (
            <div key={hotel.propertyCode}>
              <p>{hotel.propertyName}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RenderLocation;
