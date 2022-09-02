import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Mint from '../components/Mint';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Görli Nfts</title>
        <meta
          name="description"
          content="A quick way to get nfts in your wallet for testing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-auto max-w-xl flex flex-col items-center py-12 px-4'>
        <ConnectButton />
        <h1 className='text-6xl mt-8 mb-4 text-white'>Görli Nfts</h1>
        <p className='text-[#AFEEEE] text-center mb-8'>A quick way to get nfts in your wallet for testing</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" style={{ background: "deeppink" }}>
          <text x="28" y="130" font-size="120" fill="black">Gö</text>
          <text x="20" y="180" fill="black">Token # 1</text>
        </svg>
        <Mint />

        <footer className='flex flex-row items-center py-12'>
          <a href="https://goerli.etherscan.io/address/0x7a49492efa8afa5ae80dade89834a2c193138f01" className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">Contract</a>
          <span className='mx-2 text-[#AFEEEE]'>|</span>
          <a href="" className='text-[#AFEEEE] hover:text-[hotpink] target="_blank" rel="noreferrer"'>Github</a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
