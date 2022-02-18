import Image from 'next/image';
import CaptionContent from './CaptionContent';

const CaptionCard = ({ isSmaller, name, occupation, quote }) => {
  return (
    <>
      <Image
        src={`/${name}.png`}
        alt={name}
        width={isSmaller ? '570' : '610'}
        height={isSmaller ? '361' : '386'}
      />
      <div className='absolute w-full h-full top-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-200'>
        <div className='absolute w-full h-full bg-black opacity-60'></div>
        <div
          className={`text-center z-10 ${
            isSmaller ? 'max-w-[404px]' : 'max-w-[404px]'
          }`}>
          <CaptionContent name={name} occupation={occupation} quote={quote} />
        </div>
      </div>
    </>
  );
};

export default CaptionCard;
