import { useState } from 'react';
import { SingleValue } from 'react-select';
import { 
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction
} from 'wagmi';
import contractInterface from '../contract-abi.json';
import SelectCount from './SelectCount';

const contractConfig = {
  addressOrName: '0x932Ca55B9Ef0b3094E8Fa82435b3b4c50d713043',
  contractInterface: contractInterface,
};

function Mint() {
  const [count, setCount] = useState(1);
  const { isConnected } = useAccount();

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
    args: [count]
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig);

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const handleChange = (e: SingleValue<{ value: string; label: string; }>) => {
    if (e?.value) {
      setCount(parseInt(e.value));
    }''
  }

  const isMinted = txSuccess;

  return (
    <div className='flex flex-col items-center order-2 sm:order-1'>
      <SelectCount handleChange={handleChange}/>
      <button
        className={`w-80 hover:bg-[#44EEEE] active:bg-[#44EEEE] disabled:bg-gray-300 py-2 px-8 mb-4 rounded-lg text-xl font-bold ${isMintStarted || isMintLoading || isMinted ? "bg-[#44EEEE]" : "bg-[#AFEEEE]"}`}
        disabled={!mint || !isConnected}
        onClick={() => mint?.()}
      >
        {isMintLoading && 'Confirming in wallet'}
        {isMintStarted && !isMinted && 'Minting...'}
        {!isMintLoading && isMintStarted && isMinted && 'Minted!'}
        {!isMintLoading && !isMintStarted && !isMinted && 'Mint'}
      </button>

      {!isConnected && (
        <p className='text-white text-sm'>Connect your wallet to mint</p>
      )}

      {mintError && mintError.message && (
        <div className='w-60 overflow-scroll'>
          <p className='text-center text-red-400 my-2'>{mintError.message}</p>
        </div>
      )}

      {isMinted && (
        <a href={`https://goerli.etherscan.io//tx/${mintData?.hash}`} className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">
          View transaction
        </a>
      )}
    </div>
  )
}

export default Mint;