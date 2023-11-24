import Breakline from '@/common/components/elements/Breakline';

import BlogPreview from './BlogPreview';
import Introduction from './Introduction';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-7' />
      <BlogPreview />
      <Breakline className='my-8' />
    </>
  );
};

export default Home;
