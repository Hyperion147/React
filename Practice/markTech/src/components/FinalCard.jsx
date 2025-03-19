import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { getInfo } from '../api';
import SearchBar from './SearchBar';

const FinalCard = () => {
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(''); 

  
  useEffect(() => {
    getInfo()
      .then((users) => setData(users))
      .catch((error) => console.error("Error Fetching Data: ", error));
  }, []);

  
  const filteredData = data.filter((e) =>
    e.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='min-h-screen  p-6'>
      
      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-16'>
        {filteredData.length > 0 ? (
          filteredData.map((e) => (
            <Cards
              key={e.id}
              name={e.name}
              username={e.username}
              email={e.email}
              phone={e.phone}
              website={e.website}
              company={e.company.name}
              address={e.address.street}
              suite={e.address.suite}
              city={e.address.city}
              zip={e.address.zipcode}
              lat={e.address.geo.lat}
              lng={e.address.geo.lng}
              phrase={e.company.catchPhrase}
              bs={e.company.bs}
            />
          ))
        ) : (
          <p className='text-gray-400 col-span-full text-center'>No matching users found.</p>
        )}
      </div>
    </div>
  );
};

export default FinalCard;