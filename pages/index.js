import Head from 'next/head';
import { useState } from 'react';
// import Image from 'next/image';
import Nav from '../components/Nav';
import IconCopy from '../components/IconCopy';
import CaptionCard from '../components/CaptionCard';
import Carousel from '../components/Carousel';

export default function Home() {
  const [isNavSolid, setNavBg] = useState(false);

  return (
    <>
      <Head>
        <title>CHARITY WATER REDESIGN</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='favicon.ico' />
        <link rel='stylesheet' href='https://use.typekit.net/fpc1kex.css' />
        <script type='text/javascript' scr='../scripts/gradient.js' />
      </Head>

      <Nav isNavSolid={isNavSolid} setNavBg={setNavBg} />

      <main>
        {/* MOVING GRADIENT */}
        <section>
          <div className='fixed -z-10'>
            <canvas id='gradient-canvas'></canvas>
          </div>
        </section>
        {/* HERO */}
        <section className='lg:min-h-screen'>
          <div className='text-center pt-[135px] lg:pt-[211px] pb-16 px-5 lg:px-0 h-full'>
            <p className='text-md uppercase font-bold my-3 tracking-tight opacity-0 animate-[fade_0.25s_ease-out_forwards]'>
              Imagine spending hours every day searching for water
            </p>
            <h1 className='text-titleMob lg:text-titleh1 font-semibold mb-6 opacity-0 animate-[fade_0.25s_ease-out_0.2s_forwards]'>
              With clean water,
              <br />
              everything changes.
            </h1>
            <div className='max-w-sm mx-auto'>
              <p className='opacity-0 animate-[fade_0.25s_ease-out_0.3s_forwards]'>
                Since 2006, thanks to our local partners and over millions of{' '}
                <br className='hidden lg:block' />
                supporters, we&rsquo;ve brought clean and safe water to more{' '}
                <br className='hidden lg:block' />
                than 13 million people around{' '}
                <span className='whitespace-nowrap'>the world.</span>
              </p>
              <button className='bg-yellow my-8 rounded-[1.25rem] hover:shadow-standard focus:shadow-standard opacity-0 animate-[fade_0.25s_ease-out_0.4s_forwards]'>
                <a href='https://www.charitywater.org/donate' target='_blank'>
                  <span className='uppercase text-ctaMob lg:text-cta font-bold py-4 px-8 lg:py-6 lg:px-10 inline-block tracking-wide'>
                    DONATE NOW
                  </span>
                </a>
              </button>
              <p className='font-light italic mb-16 opacity-0 animate-[fade_0.25s_ease-out_0.5s_forwards]'>
                100% of your donation will always fund{' '}
                <span className='whitespace-nowrap'>clean water.</span>
              </p>
              <div className='animate-bounce'>
                <img
                  src='down-arrow.svg'
                  alt='white down arrow'
                  width='24'
                  height='133'
                  className='opacity-0 animate-[fade_0.25s_ease-out_0.6s_forwards] mx-auto'
                />
              </div>
            </div>
          </div>
        </section>
        {/* 4 FLOATING ICONS WITH TEXT */}
        <section>
          <div className='relative'>
            {/* rural area bg at section bottom */}
            <div className='absolute bottom-0 w-full'>
              <div className='hidden lg:block'>
                {/* <Image
                  src='/bg-rural.png'
                  alt='rural areas'
                  layout='responsive'
                  width={1440}
                  height={1109}
                /> */}
                <img
                  src='bg-rural.png'
                  alt='rural areas'
                  layout='responsive'
                  width='1440'
                  height='1109'
                />
              </div>
            </div>
            {/* faucet img */}
            <div className='hidden lg:block'>
              {/* <Image
                src='/faucet.png'
                alt='hands catching water from running faucet'
                width={606}
                height={1688}
              /> */}
              <img
                src='faucet.png'
                alt='hands catching water from running faucet'
                width='606'
                height='1688'
              />
            </div>
            {/* icons with text */}
            <div className='lg:absolute top-72 left-0 w-full px-5 lg:px-0'>
              <div className='max-w-lg mx-auto flex lg:justify-center'>
                <div className='w-full lg:w-fit lg:pl-36'>
                  {/* health insurance */}
                  <IconCopy
                    animation='animate-[float_4s_ease-in-out_infinite]'
                    icon='icon-insurance'
                    iconAlt='health insurance icon'
                    iconW='122'
                    iconH='140'
                    h4='HEALTH'
                    subtitle='Diseases from dirty water kill more people every year than all forms of violence, including war.'
                    p='43% of these deaths are children under five years old. Access to clean water and basic sanitation can save around 16,000 lives every week.'
                  />
                  {/* hourglass */}
                  <IconCopy
                    animation='animate-[float_4s_ease-in-out_1s_infinite]'
                    icon='icon-hourglass'
                    iconAlt='hourglass icon'
                    iconW='98'
                    iconH='132'
                    isNarrow
                    h4='TIME'
                    subtitle={[
                      'In Africa alone, women spend',
                      <span className='whitespace-nowrap' key='span'>
                        40 billion
                      </span>,
                      ' hours a year walking ',
                      <span className='whitespace-nowrap' key='span2'>
                        for water.
                      </span>,
                    ]}
                    p={[
                      'Access to clean water gives communities more time to grow food, earn an income, and go to school — all of which ',
                      <span className='whitespace-nowrap' key='span'>
                        fight poverty.
                      </span>,
                    ]}
                  />
                  {/* graduation hat */}
                  <IconCopy
                    animation='animate-[float_4s_ease-in-out_2s_infinite]'
                    icon='icon-gradhat'
                    iconAlt='graduation hat icon'
                    iconW='139'
                    iconH='139'
                    h4='EDUCATION'
                    subtitle='Clean water helps keep kids in school, especially girls.'
                    p="Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don't have to stay home for a week out of every month."
                  />
                  {/* fists */}
                  <IconCopy
                    animation='animate-[float_4s_ease-in-out_1.5s_infinite]'
                    icon='icon-fists'
                    iconAlt='fists icon'
                    iconW='124'
                    iconH='124'
                    isNarrow
                    isMb0
                    h4='WOMEN EMPOWERMENT'
                    subtitle={[
                      'Women are responsible for 72% ',
                      <span className='whitespace-nowrap' key='span'>
                        of the
                      </span>,
                      ' water collected in Sub-Saharan Africa.',
                    ]}
                    p={[
                      'When a community gets water, women and girls get their lives back. They start businesses, improve their homes, and take charge of their ',
                      <span className='whitespace-nowrap' key='span'>
                        own futures.
                      </span>,
                    ]}
                  />
                </div>
              </div>
            </div>
            {/* 785 million people */}
            <div className='text-center pt-64 lg:pt-0 pb-20 px-5 lg:px-0 relative bg-[url("/bg-rural-mob.png")] lg:bg-none bg-no-repeat bg-right-top bg-cover'>
              <h3 className='text-headingMob lg:text-heading font-semibold pb-6 inline-block bg-[url("/brushstroke.svg")] bg-no-repeat bg-contain'>
                785 million people in the world live
                <br className='hidden lg:block' /> without clean water.
              </h3>
              <div className='max-w-md mx-auto'>
                <p className='pb-6'>
                  That's nearly 1 in 10 people worldwide. Or, twice the
                  population of the United States. The majority live in isolated
                  rural areas and spend hours every day walking to collect water
                  for their family. Not only does walking for water keep
                  children out of school or take up time that parents could be
                  using to earn money, but the water often carries diseases that
                  can make{' '}
                  <span className='whitespace-nowrap'>everyone sick.</span>
                </p>
              </div>
              <button className='bg-yellow rounded-[1.25rem] hover:shadow-standard focus:shadow-standard'>
                <a
                  href='https://www.charitywater.org/donate/water-project-sponsorship'
                  target='_blank'>
                  <span className='uppercase text-ctaMob lg:text-cta font-bold py-4 px-8 lg:py-6 lg:px-10 inline-block tracking-wide'>
                    HOW DO WE TACKLE IT?
                  </span>
                </a>
              </button>
            </div>
          </div>
        </section>
        {/* LIGHT BLUE 12 YRS OF CLEAN WATER + CAPTION CARDS */}
        <section>
          <div className='bg-[#F6FBFD]'>
            <div className='px-5 lg:px-0 py-20'>
              <div className='text-center lg:mb-16'>
                <h3 className='text-headingMob lg:text-heading font-semibold mb-6 inline-flex justify-center items-center w-full h-[40px] lg:w-[575px] lg:h-[62px] bg-[url("/brushstroke-sm.svg")] bg-no-repeat bg-contain'>
                  <span className='block'>12 years of clean water</span>
                </h3>
                <div className='max-w-md mx-auto'>
                  <p className='mb-6'>
                    In 2009, this rural community in northern Uganda was home to
                    a few hundred people who struggled to get through each day
                    with limited access to water.
                  </p>
                  <p>
                    Today, after 12 years with a clean water project, it's a
                    bustling center of commerce. It's home to donut makers and
                    seamstresses. Farms with herds of livestock. And something
                    we've never seen in a rural community: paved roads and power
                    lines.
                  </p>
                </div>
              </div>
              {/* desktop caption cards */}
              <div className='hidden lg:block max-w-lg mx-auto'>
                <div className='flex justify-between'>
                  <div className='relative h-max'>
                    <div
                      className='h-[386px]'
                      data-aos='fade-right'
                      data-aos-offset='300'
                      data-aos-duration='500'
                      data-aos-delay='0'>
                      <CaptionCard
                        name='postina'
                        occupation='entrepreneur'
                        quote={
                          "People no longer fall sick like they used to. People would bathe with dirty water. They never used to wash their clothes frequently. However these days, I see people washing clothes. They also use it to cook food, and it's delicious."
                        }
                      />
                    </div>
                  </div>
                  <div className='h-max relative top-12'>
                    <div
                      className='h-[386px]'
                      data-aos='fade-left'
                      data-aos-offset='300'
                      data-aos-duration='500'
                      data-aos-delay='75'>
                      <CaptionCard
                        name='richard'
                        occupation='teacher'
                        quote={
                          'The water point came. Building and construction followed. Then electricity came. And now businesses continue to boom. In this community, I teach people to stick together. I also teach about sanitation, hygiene, and cleanliness at home. When you educate someone, they can support themselves.'
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='w-max h-max mx-auto relative -top-6 -left-4'>
                  <div
                    className='h-[361px]'
                    data-aos='fade-up'
                    data-aos-offset='150'
                    data-aos-duration='500'
                    data-aos-delay='150'>
                    <CaptionCard
                      isSmaller
                      name='joyce'
                      occupation='store owner'
                      quote={
                        'Before, life was not good. The water was not clean. Diseases were so prevalent. When I gave birth to my firstborn, she often fell sick. Now that we have the water point, there are a lot of changes. When you go to fetch water, you fill find clean water.'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MOBILE CAROUSEL */}
        <section>
          <div className='bg-[#F6FBFD] pb-40 relative lg:hidden'>
            <div className='mx-auto'>
              <Carousel />
            </div>
          </div>
        </section>
        {/* WHITE CONTENT BLOCK */}
        <section>
          <div className='bg-white'>
            <div className='lg:flex'>
              <div className='max-w-lg mx-auto px-5 lg:px-0 py-12 lg:py-28 lg:flex lg:items-center'>
                <div className='lg:basis-2/5'>
                  <div className='w-11/12 text-center lg:text-left'>
                    <h2 className='text-titleMob lg:text-titleh2 mb-6'>
                      Help more families
                      <br className='hidden lg:block' /> get clean water
                    </h2>
                    <p className='mb-6'>
                      These families have been completely transformed, but
                      millions more are still waiting for their chance to
                      thrive. This holiday season, you can help.
                    </p>
                    <p>
                      The gift of clean water changes a family's future. It
                      takes about $240 to bring clean water to one family, but
                      any amount you're able to give will impact generations to
                      come.
                    </p>
                  </div>
                </div>
                <div className='lg:basis-3/5 lg:flex'>
                  <div className='relative flex justify-center items-center mx-24 my-16'>
                    <div className='absolute'>
                      {/* <Image
                        src='/logo.png'
                        alt='logo'
                        width={32}
                        height={44}
                      /> */}
                      <img src='logo.png' alt='logo' width='32' height='44' />
                    </div>
                    <div>
                      {/* <Image
                        src='/rotating-funds.svg'
                        alt='100% funds water project'
                        width={131}
                        height={131}
                        className='animate-spin duration-[6000ms]'
                      /> */}
                      <img
                        src='rotating-funds.svg'
                        alt='100% funds water project'
                        width='131'
                        height='131'
                        className='animate-spin duration-[6000ms]'
                      />
                    </div>
                  </div>
                  <div className='text-center'>
                    <p className='font-ivy text-blue text-[4.5rem] opacity-80 mb-6'>
                      6,512 <span className='text-[1.6875rem]'>/ 5,000</span>
                    </p>
                    <p>families served</p>
                    <button className='bg-yellow my-8 rounded-[1.25rem] hover:shadow-standard focus:shadow-standard'>
                      <a
                        href='https://www.charitywater.org/donate'
                        target='_blank'>
                        <span className='uppercase text-ctaMob lg:text-cta font-bold py-4 px-8 lg:py-6 lg:px-10 inline-block tracking-wide'>
                          DONATE
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* YELLOW CALLOUT BLOCK */}
        <section>
          <div className='bg-yellow'>
            <div className='px-5 lg:px-0 py-12 lg:py-20 text-center'>
              <h2 className='text-titleMob lg:text-titleh2 mb-6'>
                Bring clean water to
                <br className='hidden lg:block' /> the next community
              </h2>
              <p className='mb-6'>
                Inspired by the community? Sponsor a water project and give
                another
                <br className='hidden lg:block' /> community or school the same
                opportunity to flourish.
              </p>
              <button className='bg-white rounded-[1.25rem] hover:shadow-standard focus:shadow-standard'>
                <a
                  href='https://www.charitywater.org/donate/water-project-sponsorship'
                  target='_blank'>
                  <span className='uppercase text-ctaMob lg:text-cta font-bold py-4 px-8 lg:py-6 lg:px-10 inline-block tracking-wide'>
                    SPONSOR A WATER PROJECT
                  </span>
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
