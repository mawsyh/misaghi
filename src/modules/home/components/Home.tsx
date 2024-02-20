import Breakline from '@/common/components/elements/Breakline';
import { GITHUB_ACCOUNTS } from '@/common/constant/github';

import BlogPreview from './BlogPreview';
import Introduction from './Introduction';
import Contributions from './Contributions';


const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-7' />
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          )
        )}
      </div>
      <Breakline className='mt-8 mb-7' />
      {/* <BlogPreview />
      <Breakline className='my-8' /> */}
    </>
  );
};

export default Home;
