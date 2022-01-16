import Image from 'next/image'
import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='max-w-lg mx-auto py-12 lg:py-20 px-5 lg:px-0 lg:flex'>
        <div className='lg:basis-2/5'>
          <div className='h-full'>
            <div className='hidden lg:block'>
              <Image src='/logo.png' alt='logo' width={34} height={47} />
              <p className='text-label my-3'>charity: water Donation Processing Center, PO Box 5026, Hagerstown, MD 21741-5026 | 1 Devonshire St, London W1W 5DR | Charity Global, Inc., a US 501 (c)(3) public charity, EIN 22-3936753 and an ANBI in the Netherlands, RSIN 826151656 . Charity Global UK Limited is a dual-qualified charity registered in England and Wales, charity number 1169228. Charity Global UK Limited is wholly owned by Charity Global, Inc.</p>
            </div>
            <form method='POST' className='mt-3 mb-16 lg:mb-0 lg:mt-24'>
              <label htmlFor='email' className='inline-block leading-5 mb-4'>Subscribe to our<br/>newsletter</label>
              <div className='border-b border-solid border-[#c6c6c6] flex h-[50px] w-max'>
                <input type='email' id='email' name='email' placeholder='Email address' className='block rounded-t-md p-2 pl-0 focus-visible:outline-0'/>
                <a href='https://www.charitywater.org/#user_name' target='_blank' className='bg-yellow rounded-t-md justify-self-stretch px-5 flex justify-center items-center'>
                  <button className='text-white text-label font-bold'>
                    &#x276F;
                  </button>
                </a>
              </div>
              </form>
          </div>
        </div>
        <div className='lg:basis-3/5'>
          <div className='h-full lg:flex flex-col justify-between'>
            <div className='lg:flex justify-end'>
              <div className='lg:flex'>
                <div className='flex mb-6 lg:mr-6'>
                  <ul className='basis-1/2 lg:basis-auto lg:mr-6'>
                    <li className='font-bold mb-6'>get to know us</li>
                    <FooterItem item='about us' url='https://www.charitywater.org/about' />
                    <FooterItem item='see our financials' url='https://www.charitywater.org/about/financials' />
                    <FooterItem item='careers' url='https://www.charitywater.org/about/jobs' />
                  </ul>
                  <ul className='basis-1/2 lg:basis-auto'>
                    <li className='font-bold mb-6'>connect</li>
                    <FooterItem item='contact us' url='https://www.charitywater.org/contact' />
                    <FooterItem item='help center' url='https://support.charitywater.org/hc/en-us' />
                    <FooterItem item='request a speaker' url='https://www.charitywater.org/about/request-speaker' />
                    <FooterItem item='shop our store' url='https://store.charitywater.org/' />
                  </ul>
                </div>
                <div className='flex'>
                  <ul className='basis-1/2 lg:basis-auto lg:mr-6'>
                    <li className='font-bold mb-6'>get involved</li>
                    <FooterItem item='fundraise' url='https://www.charitywater.org/get-involved/fundraise' />
                    <FooterItem item='brand partnerships' url='https://www.charitywater.org/partnerships' />
                    <FooterItem item='legacy giving' url='https://www.charitywater.org/the-tributary' />
                    <FooterItem item={`students & teachers`} url='https://www.charitywater.org/get-involved/kids' />
                  </ul>
                  <ul className='basis-1/2 lg:basis-auto'>
                    <li className='font-bold mb-6'>donate</li>
                    <FooterItem item='join the spring' url='https://www.charitywater.org/donate/the-spring' />
                    <FooterItem item='give to a campaign' url='https://www.charitywater.org/get-involved/find-a-campaign' />
                    <FooterItem item={`give in someone's honor`} url='https://www.charitywater.org/donate/in-honor-of' />
                    <FooterItem item='sponsor a community' url='https://www.charitywater.org/donate/water-project-sponsorship' />
                  </ul>
                </div>
              </div>
            </div>
            {/* social icons */}
            <div className='my-12 lg:my-0 flex lg:justify-end relative left-[-0.75rem] lg:left-0 lg:top-3'>
              <a href='' target='_blank' className='p-3 mr-4 flex justify-center items-center'><Image src='/icon-fb.png' alt='facebook icon' width={8} height={16} /></a>
              <a href='' target='_blank' className='p-3 mr-4 flex justify-center items-center'><Image src='/icon-twitter.png' alt='twitter icon' width={20} height={16} /></a>
              <a href='' target='_blank' className='p-3 flex justify-center items-center'><Image src='/icon-ig.png' alt='instagram icon' width={16} height={16} /></a>
            </div>
            <div className='mt-20 lg:hidden'>
              <Image src='/logo.png' alt='logo' width={34} height={47} />
              <p className='text-label my-3'>charity: water Donation Processing Center, PO Box 5026, Hagerstown, MD 21741-5026 | 1 Devonshire St, London W1W 5DR | Charity Global, Inc., a US 501 (c)(3) public charity, EIN 22-3936753 and an ANBI in the Netherlands, RSIN 826151656 . Charity Global UK Limited is a dual-qualified charity registered in England and Wales, charity number 1169228. Charity Global UK Limited is wholly owned by Charity Global, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
