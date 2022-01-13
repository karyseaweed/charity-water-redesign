import Link from 'next/link'
import Image from 'next/image'
import FooterItem from './FooterItem';
 
const Footer = () => { 
 return (
   <footer className='border-t-4 border-solid border-ltgold'>
     <div className='max-w-lg mx-auto px-3 lg:px-0'>
 
       <div className='flex justify-between my-6'>
         <ul className='text-nav lg:text-base block lg:flex flex-wrap max-w-[520px] capitalize'>
 
           <FooterItem item='contact' url='https://www.sanofi.us/en/contact-us' />
 
           <li className='mr-12 my-1 flex items-center'>
             <Link href='/sitemap'>
               <a id='footer-sitemap' className='hover:text-ltgold inline-flex justify-center items-center'>
                 <span className='hidden mr-1'>
                   <Image src='/caret.png' alt='red caret' width={9} height={13} />
                 </span>
                 Sitemap
               </a>
             </Link>
           </li>
 
           <FooterItem item='accessibility' url='https://www.sanofi.us/en/accessibility-partial-compliance' />
           <FooterItem item='legal notice' url='https://www.sanofi.us/en/legal-notice' />
           <FooterItem item='privacy policy' url='https://www.sanofi.us/en/our-responsibility/sanofi-global-privacy-policy' />
           <FooterItem item='report adverse reactions' url='https://cscontactus.sanofi.us/adverseEvent.aspx' />
 
         </ul>
         <Link href='/'>
           <a className='mt-3'>
             <Image src='/logo.png' alt='Sanofi Pasteur Logo' width={180} height={26} />
           </a>
         </Link>
       </div>
 
       <p className='text-sm mb-3'>&copy; 2022 Sanofi Pasteur Inc. All rights reserved.</p>
       <div className='block lg:flex justify-between mb-6'>
         <p className='text-nav lg:text-base font-bold mb-3 lg:mb-0'>This site is intended for use by US Healthcare Professionals only.</p>
         <p className='text-sm mb-3 lg:mb-0'>MAT-US-2111120-v.1.0-01/2022</p>
       </div>
       </div>
   </footer>
 )
}
 
export default Footer