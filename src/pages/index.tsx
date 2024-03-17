import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { SparklesCore } from '@/common/components/elements/Sparkles';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title='Ryan Misaqi - Personal Website' />
      <Container data-aos='fade-up'>
        <Home />
      </Container>
      <div className='w-full absolute inset-0 h-screen z-[-1]'>
        <SparklesCore
          id='particles'
          background='transparent'
          minSize={0.4}
          maxSize={1.2}
          particleDensity={10}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
      </div>
    </>
  );
};

export default HomePage;
