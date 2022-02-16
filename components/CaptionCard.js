import Image from 'next/image';

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
            isSmaller ? 'max-w-[434px]' : 'max-w-[464px]'
          }`}>
          <Image
            src='/yellow-dbquote.svg'
            alt='yellow open double quotes'
            width={32}
            height={60}
          />
          <p className='text-headingMob text-white font-ivy font-semibold'>
            {name}
          </p>
          <p className='text-ctaMob text-white capitalize mb-6'>{occupation}</p>
          <p className='text-label text-white tracking-wide'>{quote}</p>
        </div>
      </div>
    </>
  );
};

export default CaptionCard;
