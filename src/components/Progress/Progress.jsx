import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Progress = () => {
  const [animatedAmounts, setAnimatedAmounts] = useState({});
  const navigate = useNavigate();

  // Pool data
  const pools = [
    {
      id: 1,
      name: "Burner",
      image: "https://flexa.media/apps/burner.svg",
      capacity: 1594010.76,
      sevenDay: 2.38,
      thirtyDay: 2.38,
      address: "0xB8706F2dd1Ce8A4328D254cF14271e0fbB5E268A"
    },
    {
      id: 2,
      name: "Bitcoin",
      image: "https://flexa.media/networks/bitcoin.svg",
      capacity: 4999424.29,
      sevenDay: 2.44,
      thirtyDay: 2.44,
      address: "0xdB07414039F5e1618E3eCC8019C1C1ecb4b4C06A"
    },
    {
      id: 3,
      name: "Bitcoin Cash",
      image: "https://flexa.media/networks/bitcoin-cash.svg",
      capacity: 1660791.10,
      sevenDay: 2.35,
      thirtyDay: 2.35,
      address: "0x59e772F12938063bCa8A2B978791eBe225f5Bc3c"
    },
    {
      id: 4,
      name: "Ethereum",
      image: "https://flexa.media/networks/ethereum.svg",
      capacity: 8624635.11,
      sevenDay: 2.61,
      thirtyDay: 2.61,
      address: "0x9477dA44A61ceBCDD0383CD00Bf18A859FEb75b0"
    },
    {
      id: 5,
      name: "SPEDN",
      image: "https://flexa.media/apps/spedn.png",
      capacity: 139708.62,
      sevenDay: 2.11,
      thirtyDay: 2.11,
      address: "0xFF1D02F09A9C55cEFd37f57715FEe7E88278d34e"
    },
    {
      id: 6,
      name: "Litecoin",
      image: "https://flexa.media/networks/litecoin.svg",
      capacity: 1429706.56,
      sevenDay: 1.39,
      thirtyDay: 1.39,
      address: "0x84706656fabFE15b2b77F292A656dD024607d332"
    },
    {
      id: 7,
      name: "Zcash",
      image: "https://flexa.media/networks/zcash.svg",
      capacity: 1395974.86,
      sevenDay: 2.17,
      thirtyDay: 2.17,
      address: "0xcfBbAE9DCE9a207BaB01E1589e345D3Edc65D842"
    },
    {
      id: 8,
      name: "Tezos",
      image: "https://flexa.media/networks/tezos.svg",
      capacity: 1295377.23,
      sevenDay: 2.48,
      thirtyDay: 2.48,
      address: "0xCD234A11B26F42B391C2838Beb3DA3Bb3A590B66"
    },
    {
      id: 9,
      name: "Dogecoin",
      image: "https://flexa.media/networks/dogecoin.svg",
      capacity: 13217.17,
      sevenDay: 2.03,
      thirtyDay: 2.03,
      address: "0xa7f2B6aF8c536897f246B1EB62654cb9c886FA47"
    },
    {
      id: 10,
      name: "Celo",
      image: "https://flexa.media/networks/celo.svg",
      capacity: 2411504.53,
      sevenDay: 2.28,
      thirtyDay: 2.28,
      address: "0x80E58Fe28F53CCbaD1c295ebAA6A8c13241D034b"
    },
    {
      id: 11,
      name: "Lightning",
      image: "https://flexa.media/networks/lightning.svg",
      capacity: 19510358.10,
      sevenDay: 4.06,
      thirtyDay: 4.06,
      address: "0xd0415cf4558A0dBEE8242498D25284476bE3c8f2",
      boosted: true
    },
    {
      id: 12,
      name: "Solana",
      image: "https://flexa.media/networks/solana.svg",
      capacity: 2244686.48,
      sevenDay: 2.18,
      thirtyDay: 2.18,
      address: "0xE932d1a226E962D820a33363DF32FcC95D2559D2"
    },
    {
      id: 13,
      name: "Polygon",
      image: "https://flexa.media/networks/polygon.svg",
      capacity: 3050023.39,
      sevenDay: 2.38,
      thirtyDay: 2.38,
      address: "0x1e73f41454D9806f0462Eb6C9FD2A3754cEE7Fc4"
    },
    {
      id: 14,
      name: "Avalanche",
      image: "https://flexa.media/networks/avalanche.svg",
      capacity: 2743966.67,
      sevenDay: 2.38,
      thirtyDay: 2.38,
      address: "0xc163c2cC35e32350Aa92DEC2b53b68950942d72F"
    },
    {
      id: 15,
      name: "Cardano",
      image: "https://flexa.media/networks/cardano.svg",
      capacity: 8841.69,
      sevenDay: 1.92,
      thirtyDay: 1.92,
      address: "0x57F6f249DB02083362D43E2D02dD791068Df30C6"
    },
    {
      id: 16,
      name: "Base",
      image: "https://flexa.media/networks/base.svg",
      capacity: 5738951.34,
      sevenDay: 2.43,
      thirtyDay: 2.43,
      address: "0xA52125ced25602203BCeF6E78E865571306CaB2A"
    },
    {
      id: 17,
      name: "Nighthawk Wallet",
      image: "https://flexa.media/apps/nighthawk-wallet.png",
      capacity: 4037495.77,
      sevenDay: 2.49,
      thirtyDay: 2.49,
      address: "0xD57E335457b6f5d09ac69248230005a02F9B60CF"
    },
    {
      id: 18,
      name: "Zashi",
      image: "https://flexa.media/apps/zashi.png",
      capacity: 4182762.30,
      sevenDay: 2.49,
      thirtyDay: 2.49,
      address: "0xd80370093a305bbDA27B821bb6c6347989Bf709b"
    },
    {
      id: 19,
      name: "Nexus Wallet",
      image: "https://flexa.media/apps/nexus-wallet.svg",
      capacity: 389184.95,
      sevenDay: 2.38,
      thirtyDay: 2.38,
      address: "0x1693DeCE45b908Ed25244E8b7FFdE4760cB9Ca24"
    },
    {
      id: 20,
      name: "World Chain",
      image: "https://flexa.media/networks/world-chain.svg",
      capacity: 285873.76,
      sevenDay: 2.42,
      thirtyDay: 2.42,
      address: "0x603f0200e863784e03cD262bB5266d819DD0eAf0"
    }
  ];

  // Handle link clicks to route to /wallet
  const handleLinkClick = (e) => {
    e.preventDefault();
    navigate('/wallet');
  };

  // Animate numbers on component mount
  useEffect(() => {
    const initialAmounts = {};
    pools.forEach(pool => {
      initialAmounts[pool.id] = 0;
    });
    setAnimatedAmounts(initialAmounts);

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    pools.forEach(pool => {
      let currentStep = 0;
      const increment = pool.capacity / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), pool.capacity);
        setAnimatedAmounts(prev => ({
          ...prev,
          [pool.id]: newValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedAmounts(prev => ({
            ...prev,
            [pool.id]: pool.capacity
          }));
        }
      }, stepDuration);
    });
  }, []);

  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up mr-1 inline-block size-4">
      <path d="m17 11-5-5-5 5"></path>
      <path d="m17 18-5-5-5 5"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8">
        <h2 className="mb-6 ml-2 text-xl font-semibold leading-none text-gray-800">All pools</h2>
        
        <div className="max-w-full overflow-x-scroll rounded-xl border border-gray-200 bg-white">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-100">
                  <th className="h-12 px-4 text-left align-middle text-gray-600 [&:has([role=checkbox])]:pr-0 text-sm font-semibold uppercase">
                    <button className="uppercase">Pool</button>
                  </th>
                  <th className="h-12 px-4 align-middle text-gray-600 [&:has([role=checkbox])]:pr-0 text-sm font-semibold uppercase text-right tabular-nums">
                    <button className="uppercase">Capacity</button>
                  </th>
                  <th className="h-12 px-4 align-middle text-gray-600 [&:has([role=checkbox])]:pr-0 text-sm font-semibold uppercase text-right tabular-nums">
                    <button className="uppercase">7-day</button>
                  </th>
                  <th className="h-12 px-4 align-middle text-gray-600 [&:has([role=checkbox])]:pr-0 text-sm font-semibold uppercase text-right align-right tabular-nums">
                    <button className="uppercase">30-day</button>
                  </th>
                  <th className="h-12 px-4 text-left align-middle text-gray-600 [&:has([role=checkbox])]:pr-0 text-sm font-semibold uppercase"></th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {pools.map((pool) => (
                  <tr 
                    key={pool.id}
                    className="border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-100"
                    data-state="false"
                  >
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-base font-medium text-gray-900">
                      <button 
                        onClick={handleLinkClick}
                        className="flex items-center gap-4 font-semibold hover:text-blue-600 transition-colors w-full text-left"
                      >
                        <img 
                          alt={pool.name} 
                          loading="lazy" 
                          width="32" 
                          height="32" 
                          decoding="async" 
                          className="size-8 rounded-md" 
                          src={pool.image}
                        />
                        <span>{pool.name}</span>
                        {pool.boosted && (
                          <span className="inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-green-100 text-green-700 hover:bg-green-100/80">
                            Boosted
                          </span>
                        )}
                      </button>
                    </td>
                    
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-base font-medium text-gray-900 text-right tabular-nums">
                      <button 
                        onClick={handleLinkClick}
                        className="hover:text-blue-600 transition-colors"
                        data-state="closed"
                      >
                        {formatCurrency(animatedAmounts[pool.id] || 0)}
                      </button>
                    </td>
                    
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-base font-medium text-gray-900 text-right tabular-nums">
                      {pool.boosted ? (
                        <span className="font-semibold text-green-600">
                          <ChevronUpIcon />
                          {pool.sevenDay}%
                        </span>
                      ) : (
                        <span>{pool.sevenDay}%</span>
                      )}
                    </td>
                    
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-base font-medium text-gray-900 text-right align-right tabular-nums">
                      {pool.boosted ? (
                        <span className="font-semibold text-green-600">
                          <ChevronUpIcon />
                          {pool.thirtyDay}%
                        </span>
                      ) : (
                        <span>{pool.thirtyDay}%</span>
                      )}
                    </td>
                    
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-base font-medium text-gray-900">
                      <button 
                        onClick={handleLinkClick}
                        className="hover:text-blue-600 transition-colors"
                      >
                        <PlusIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;