import Image from 'next/image'

const IconCopy = ({ icon, iconAlt, iconW, iconH, isNarrow, isMb0, h4, subtitle, p }) => {
  return (
    <div className={`lg:block flex flex-col ${isNarrow ? 'items-end lg:ml-[140px]' : ''}`}>
      <div className={`flex flex-col lg:flex-row ${isMb0 ? '': 'mb-16'}`}>
        <div className='w-max lg:w-[140px] lg:text-right'>
          <div className='w-2/3 lg:w-full'>
            <Image src={`/${icon}.svg`} alt={iconAlt} width={iconW} height={iconH} />
          </div>
        </div>
        <div className={`${isNarrow ? 'lg:max-w-[436px]' : 'lg:max-w-[456px]'} max-w-[270px] mt-3 lg:mt-0 lg:mx-5`}>
          <h4 className='uppercase font-bold text-md text-yellow mb-2'>{h4}</h4>
          <p className='font-bold text-subtitle mb-2'>{subtitle}</p>
          <p>{p}</p>
        </div>
      </div>
    </div>
  )
}

export default IconCopy
