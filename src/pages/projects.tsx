import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PROJECTS } from '@/common/constant/projectlist';
import CardModule from '@/modules/learn';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION = 'Feel free to check out my projects and experiments.';

const LearnPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Misaqi`} />
      <Container data-aos='fade-up'>
        <BackButton url='/' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <CardModule type="project" contents={PROJECTS} />
      </Container>
    </>
  );
};

export default LearnPage;
