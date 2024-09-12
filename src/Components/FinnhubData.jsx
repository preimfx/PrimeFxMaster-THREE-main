import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinGeckoDayMovers = () => {
  const [gainers, setGainers] = useState(null);
  const [losers, setLosers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'percent_change_24h',
            per_page: 10,
            page: 1
          }
        });

        const sortedData = response.data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        const topGainers = sortedData.slice(0, 5);
        const topLosers = sortedData.slice(-5);

        setGainers(topGainers);
        setLosers(topLosers);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-between p-5 gap-7 bg-white mt-5 w-full rounded-[30px]'>
      <div className='w-full lg:w-1/2'>
        <h2 className='text-xl font-semibold mb-2'>Top Gainers</h2>
        {gainers ? (
          <ul className='space-y-4'>
            {gainers.map((coin) => (
              <li
                key={coin.id}
                className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg justify-between text-xs'
              >
                <img src={coin.image} alt={coin.name} className='w-12 h-12' />
                <div className='text-center sm:text-left'>
                  <h3 className='text-lg font-semibold'>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                  <p className='text-gray-600'>Price: ${coin.current_price.toFixed(2)}</p>
                  <p className='text-green-600'>Change (24h): {coin.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading top gainers...</p>
        )}
      </div>

      <div className='w-full lg:w-1/2'>
        <h2 className='text-xl font-semibold mb-2'>Top Losers</h2>
        {losers ? (
          <ul className='space-y-4'>
            {losers.map((coin) => (
              <li
                key={coin.id}
                className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg justify-between text-xs'
              >
                <img src={coin.image} alt={coin.name} className='w-12 h-12' />
                <div className='text-center sm:text-left'>
                  <h3 className='text-lg font-semibold'>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                  <p className='text-gray-600'>Price: ${coin.current_price.toFixed(2)}</p>
                  <p className='text-red-600'>Change (24h): {coin.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading top losers...</p>
        )}
      </div>
    </div>
  );
};

export default CoinGeckoDayMovers;
