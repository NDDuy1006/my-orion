import React, { useState } from 'react';

interface DataItem {
  countryName: string;
  cityName: string;
  propertyName: string;
  propertyCode: string;
}

const jsonData: DataItem[] = [
  {
    countryName: 'Germany',
    cityName: 'Volkach',
    propertyName: 'Sonnenhotel Weingut Römmert',
    propertyCode: 'SWR',
  },
  {
    countryName: 'Germany',
    cityName: 'Munich',
    propertyName: 'Hotel Munich',
    propertyCode: 'MUC',
  },
  {
    countryName: 'Germany',
    cityName: 'Schwarzenberg',
    propertyName: 'Sonnenhotel Hoher Hahn',
    propertyCode: 'SHH',
  },
  {
    countryName: 'Austria',
    cityName: 'Feldkirchen',
    propertyName: 'Sonnenresort Maltschacher See',
    propertyCode: 'SMS',
  },
  {
    countryName: 'Austria',
    cityName: 'Ossiach',
    propertyName: 'Sonnenresort Ossiacher See',
    propertyCode: 'SOS',
  },
];

const LocationDraft: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchResults, setSearchResults] = useState<DataItem[]>([]);

  const handleSearch = (query: string) => {
    const filteredData = jsonData.filter((item) => {
      const { propertyName, cityName, countryName } = item;
      const lowerCaseQuery = query.toLowerCase();

      return (
        propertyName.toLowerCase().includes(lowerCaseQuery) ||
        cityName.toLowerCase().includes(lowerCaseQuery) ||
        countryName.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setSearchResults(filteredData);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          handleSearch(e.target.value);
        }}
      >
        <option value="propertyName">Property Name</option>
        <option value="cityName">City Name</option>
        <option value="countryName">Country Name</option>
      </select>

      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <p>{item.propertyName}</p>
            <p>{item.cityName}</p>
            <p>{item.countryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationDraft;
