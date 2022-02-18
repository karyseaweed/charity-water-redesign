import Image from 'next/image';

const CaptionContent = ({ isMobile, name, occupation, quote }) => {
  return (
    <>
      <Image
        src='/yellow-dbquote.svg'
        alt='yellow open double quotes'
        width={32}
        height={60}
      />
      <p
        className={`text-headingMobfont-ivy font-semibold ${
          isMobile ? 'text-black' : 'text-white'
        }`}>
        {name}
      </p>
      <p
        className={`text-ctaMob capitalize mb-6 ${
          isMobile ? 'text-black' : 'text-white'
        }`}>
        {occupation}
      </p>
      <p
        className={`text-labeltracking-wide ${
          isMobile ? 'text-black' : 'text-white'
        }`}>
        {quote}
      </p>
    </>
  );
};

export default CaptionContent;
