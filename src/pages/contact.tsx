import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Don't hesitate to reach out! I'd love to chat with you and explore the possibilities of working together.";

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Misaqi`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
