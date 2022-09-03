import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Mint from '../components/Mint';

const Home: NextPage = () => {
  const colors = ['deeppink', 'deepskyblue', 'springgreen', 'yellow', 'darkviolet', 'crimson'];
  const [colorIndex, setColorIndex] = useState(0);

  const nextColor = () => {
    const newColorIndex = colorIndex + 1;
    if (colors[newColorIndex])
      setColorIndex(newColorIndex);
    else
      setColorIndex(0);
  }


  return (
    <div className=''>
      <Head>
        <title>Görli Nfts</title>
        <meta
          name="description"
          content="Quickly mint all of the nfts you need for testing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative min-h-[100vh] mx-auto max-w-6xl flex flex-col items-center px-4'>
        <div className='w-full pt-6 sm:pt-12 pb-24 flex flex-col items-center'>
          <ConnectButton />
          <h1 className='text-5xl sm:text-7xl text-center mt-8 mb-4 text-white'>Görli Nfts</h1>
          <p className='text-[#AFEEEE] text-center mb-8 sm:mb-12'>Quickly mint all of the nfts you need for testing.</p>
          <div className='w-full flex flex-col sm:flex-row items-center justify-between mx-auto max-w-2xl'>
            <Mint />
            <div onMouseLeave={nextColor} className="flip order-1 sm:order-2 mb-8 sm:mb-0">
              <div className="flip-content">
                <div className="flip-front">
                  <svg className="order-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" style={{ background: colors[colorIndex] }}>
                    <path d="M68.44 143.44C61.88 143.44 56.04 141.84 50.92 138.64C45.8 135.36 41.76 130.68 38.8 124.6C35.84 118.52 34.36 111.2 34.36 102.64C34.36 94.16 35.84 86.88 38.8 80.8C41.84 74.64 45.96 69.96 51.16 66.76C56.44 63.48 62.48 61.84 69.28 61.84C74.48 61.84 78.84 62.88 82.36 64.96C85.88 66.96 88.76 69.12 91 71.44L85.36 77.8C83.44 75.72 81.2 74 78.64 72.64C76.16 71.28 73.04 70.6 69.28 70.6C64.4 70.6 60.12 71.92 56.44 74.56C52.76 77.12 49.88 80.76 47.8 85.48C45.8 90.2 44.8 95.84 44.8 102.4C44.8 109.04 45.76 114.76 47.68 119.56C49.6 124.36 52.36 128.08 55.96 130.72C59.56 133.36 63.92 134.68 69.04 134.68C71.76 134.68 74.36 134.28 76.84 133.48C79.32 132.6 81.28 131.44 82.72 130V109.48H67V101.2H91.96V134.32C89.48 136.88 86.2 139.04 82.12 140.8C78.12 142.56 73.56 143.44 68.44 143.44ZM135.953 143.44C130.833 143.44 126.073 142.24 121.673 139.84C117.353 137.44 113.833 133.96 111.113 129.4C108.473 124.84 107.153 119.36 107.153 112.96C107.153 106.4 108.473 100.84 111.113 96.28C113.833 91.72 117.353 88.24 121.673 85.84C126.073 83.44 130.833 82.24 135.953 82.24C141.073 82.24 145.793 83.44 150.113 85.84C154.513 88.24 158.033 91.72 160.673 96.28C163.393 100.84 164.753 106.4 164.753 112.96C164.753 119.36 163.393 124.84 160.673 129.4C158.033 133.96 154.513 137.44 150.113 139.84C145.793 142.24 141.073 143.44 135.953 143.44ZM135.953 135.28C139.713 135.28 142.993 134.36 145.793 132.52C148.593 130.6 150.753 127.96 152.273 124.6C153.793 121.24 154.553 117.36 154.553 112.96C154.553 108.48 153.793 104.56 152.273 101.2C150.753 97.76 148.593 95.12 145.793 93.28C142.993 91.36 139.713 90.4 135.953 90.4C132.193 90.4 128.913 91.36 126.113 93.28C123.393 95.12 121.233 97.76 119.633 101.2C118.113 104.56 117.353 108.48 117.353 112.96C117.353 117.36 118.113 121.24 119.633 124.6C121.233 127.96 123.393 130.6 126.113 132.52C128.913 134.36 132.193 135.28 135.953 135.28ZM124.313 71.44C122.393 71.44 120.793 70.8 119.513 69.52C118.313 68.16 117.713 66.56 117.713 64.72C117.713 62.88 118.313 61.32 119.513 60.04C120.793 58.68 122.393 58 124.313 58C126.233 58 127.793 58.68 128.993 60.04C130.273 61.32 130.913 62.88 130.913 64.72C130.913 66.56 130.273 68.16 128.993 69.52C127.793 70.8 126.233 71.44 124.313 71.44ZM147.593 71.44C145.673 71.44 144.073 70.8 142.793 69.52C141.593 68.16 140.993 66.56 140.993 64.72C140.993 62.88 141.593 61.32 142.793 60.04C144.073 58.68 145.673 58 147.593 58C149.513 58 151.073 58.68 152.273 60.04C153.553 61.32 154.193 62.88 154.193 64.72C154.193 66.56 153.553 68.16 152.273 69.52C151.073 70.8 149.513 71.44 147.593 71.44Z" fill="black" />
                    <text x="20" y="180" fill="black">Token # 1</text>
                  </svg>
                </div>
                <div className="flip-back">
                  <div className='w-[200px] h-[200px] cursor-pointer bg-gray-600 pt-6 px-3 border border-white'>
                    <p className='text-white text-sm '>
                      {`{"token":"1", "image":"data:image /svg+xml;base64...", "attributes": [{"trait_type": "Type", "value":" ${colors[colorIndex]}"}]}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='absolute bottom-0 flex flex-row items-center py-4 h-24'>
          <a href="https://goerli.etherscan.io/address/0x932ca55b9ef0b3094e8fa82435b3b4c50d713043" className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">Contract</a>
          <span className='mx-2 text-[#AFEEEE]'>|</span>
          <a href="https://github.com/ted-palmer/goerli-nfts-app" className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">Github</a>
          <span className='mx-2 text-[#AFEEEE]'>|</span>
          <a href="https://goerlifaucet.com/" className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">Faucet</a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
