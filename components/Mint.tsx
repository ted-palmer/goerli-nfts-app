import { useState, ChangeEvent } from 'react'
import { 
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction
} from 'wagmi'
import contractInterface from '../contract-abi.json';

const contractConfig = {
  addressOrName: '0x7a49492EFa8afA5ae80DAde89834a2C193138F01',
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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target!.value) {
      setCount(parseInt(e.target!.value));
      console.log(count)
    }
  }

  const isMinted = txSuccess;

  return (
    <div className='flex flex-col items-center w-full'>
      <select value={count} onChange={e => handleChange(e)} className='mb-10'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button
        className="w-80 bg-[#AFEEEE] hover:bg-[hotpink] disabled:bg-gray-300 py-2 px-8 mb-4 rounded-lg text-xl font-bold"
        disabled={!mint || !isConnected || isMintLoading || isMintStarted}
        data-mint-loading={isMintLoading}
        data-mint-started={isMintStarted}
        onClick={() => mint?.()}
      >
        {isMintLoading && 'Waiting for approval'}
        {isMintStarted && !isMinted && 'Minting...'}
        {!isMintLoading && isMintStarted && isMinted && 'Minted!'}
        {!isMintLoading && !isMintStarted && !isMinted && 'Mint'}
      </button>

      {isMinted && (
        <a href={`https://goerli.etherscan.io//tx/${mintData?.hash}`} className='text-[#AFEEEE]'>
          View transaction
        </a>
      )}
    </div>
  )
}

export default Mint;