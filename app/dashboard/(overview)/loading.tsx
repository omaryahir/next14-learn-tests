import Image from 'next/image';

export default function Loading() {
  return <b><Image src="https://i.stack.imgur.com/kOnzy.gif"
  className="inline mr-5" width={30} height={30} alt="loading" /> Loading...</b> 
}
