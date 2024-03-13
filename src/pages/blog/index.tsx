import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/common/constant/medium';
import LearnModule from '@/modules/learn';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION =
  "Learn JavaScript, React, Node.js, and more. I'm sharing my knowledge and experience in web development.";

const LearnPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Mohammad Misaqi`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule contents={LEARN_CONTENTS} />
      </Container>
    </>
  );
};

export default LearnPage;
