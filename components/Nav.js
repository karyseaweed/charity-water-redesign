import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
 
const Nav = ({ isNavSolid, setNavBg }) => {
  const [isMobile, setMobile] = useState(false);
  const handleClick = () => {
    setMobile(!isMobile);
  };
  // hide mobile nav on screen resize
  const handleResize = () => {
    setMobile(false);
  };
  //
  const changeNavBg = () => {
    const nav = document.querySelector('nav');
    const navHeight = nav.scrollHeight;
    if (window.scrollY > (navHeight / 2)) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', changeNavBg);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-gradient-to-b ${isNavSolid ? 'from-white to-[#91dbef]' : 'from-white'}`}>
      <div className='max-w-lg mx-auto pt-12 pb-6 lg:pt-20 lg:pb-8 px-5 lg:px-0 flex justify-between items-center'>
  
        <div className='flex'>
          <div className='lg:mr-24'>
            <div className='hidden lg:block'>
              <Link href='/'>
                <a><Image src='/logo-long.svg' alt='Charity Water Logo' width={211} height={45} /></a>
              </Link>
            </div>
            <div className='lg:hidden'>
              <Link href='/'>
                <a><Image src='/logo-long.svg' alt='Charity Water Logo' width={150} height={32} /></a>
              </Link>
            </div>
          </div>
          <ul className={`${isMobile ? 'w-screen h-screen flex-col top-0 left-0 fixed py-24 bg-white' : 'hidden left-1/2'} lg:flex items-center text-center capitalize`}>
            <li className='my-10 lg:hidden'>
              <button className='bg-yellow rounded-[1.25rem]'>
                <a href='https://www.charitywater.org/account/login' target='_blank'>
                  <span className='uppercase text-ctaMob font-bold py-4 px-8 inline-block tracking-wide'>SIGN IN</span>
                </a>
              </button>
            </li>
            <li className='my-10 lg:hidden'>
              <Link href='/'>
                <a className='font-bold'>Home</a>
              </Link>
            </li>
            <li className='my-10 lg:hidden'>
              <a href='https://www.charitywater.org/global-water-crisis' className='font-bold capitalize'>Why Water?</a>
            </li>
            <li className='my-10 lg:hidden'>
              <a href='https://www.charitywater.org/donate' className='font-bold capitalize'>Donate</a>
            </li>
            <li className='my-10 lg:my-0 lg:inline-block lg:mr-8'>
              <a href='https://www.charitywater.org/our-work' className='font-bold lg:font-normal lg:text-md capitalize'>Our Work</a>
            </li>
            <li className='my-10 lg:my-0 lg:inline-block lg:mr-8'>
              <a href='https://www.charitywater.org/about' className='font-bold lg:font-normal lg:text-md capitalize'>About Us</a>
            </li>
            <li className='my-10 lg:my-0 lg:inline-block'>
              <a href='https://www.charitywater.org/get-involved' className='font-bold lg:font-normal lg:text-md capitalize'>Get Involved</a>
            </li>
          </ul>
        </div>

        <div className='flex justify-end items-center'>
          <ul className='lg:flex items-center text-center capitalize'>
            <li className='mr-5 lg:mr-8'>
              <button className='bg-yellow rounded-[1.25rem]'>
                <a href='https://www.charitywater.org/donate' target='_blank'>
                  <span className='uppercase text-ctaNav lg:text-cta font-bold py-2 px-4 inline-block tracking-wide'>DONATE NOW</span>
                </a>
              </button>
            </li>
            <li className='hidden lg:inline-block'>
              <a href='https://www.charitywater.org/account/login' className='text-md capitalize'>Sign In</a>
            </li>
          </ul>
    
          <button className='p-2 lg:hidden' onTouchEnd={handleClick}>
            <span className={`burger-bar ${isMobile ? 'opacity-0' : ''}`}></span>
            <span className={`burger-bar ${isMobile ? 'translate-y-[0.15rem] rotate-45' : ''}`}></span>
            <span className={`burger-bar ${isMobile ? 'translate-y-[-0.25rem] rotate-[-45deg]' : ''}`}></span>
          </button>
        </div>
  
      </div>
    </nav>
  )
}
 
export default Nav