import Head from 'next/head'
import Image from 'next/image'
import '../scripts/gradient.js'

export default function Home() {
  return (
    <>

      <Head>
        <title>CHARITY WATER REDESIGN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/fpc1kex.css" />
        <script type='text/javascript' scr='../scripts/gradient.js' />
      </Head>

      <main>
        <section>
          <div className='fixed -z-10'>
            <canvas id='gradient-canvas'></canvas>
          </div>
          <div className='text-center py-24 px-5 lg:px-0'>
            <div className='mb-6 hidden lg:block'>
              <Image src="/logo.png" alt="logo" width={46} height={64} />
            </div>
            <div className='mb-6 lg:hidden'>
              <Image src="/logo.png" alt="logo" width={29} height={40} />
            </div>
            <p className='text-subtitleCap uppercase font-bold mb-3 tracking-tight'>Imagine spending hours every day searching for water</p>
            <h1 className='text-titleMob lg:text-titleh1 font-semibold mb-6'>
              With clean water,<br/>everything changes.
            </h1>
            <div className='max-w-sm mx-auto mb-8'>
              <p className='mb-6'>Since 2006, thanks to our local partners and over millions of supporters, we&rsquo;ve brought clean and safe water to more than 13 million people around <span className='whitespace-nowrap'>the world.</span></p>
              <p className='font-light italic'>100% of your donation will always fund clean water.</p>
            </div>
            <button className='bg-yellow rounded-[1.25rem]'>
              <a href='https://www.charitywater.org/donate' target='_blank'>
                <span className='uppercase text-ctaMob lg:text-cta font-bold py-4 px-8 lg:py-6 lg:px-10 inline-block tracking-wide'>DONATE NOW</span>
              </a>
            </button>
          </div>
        </section>
      </main>

    </>
  )
}
