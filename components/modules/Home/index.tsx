import Container from '@/components/units/Container';
import Content from '@/components/units/Content';
import Hero from '@/components/units/Hero';
import Nominants from '@/components/units/Nominants';
import Partnership from '@/components/units/Partnership';
import { SYSTEM_ROUTES } from '@/lib/constants/system';

const Home = () => {
  return (
    <>
      <Hero id={SYSTEM_ROUTES.HOME} />
      <Container>
        <Content id={SYSTEM_ROUTES.CONTENT} />
        <Nominants id={SYSTEM_ROUTES.NOMINANTS} />
        <Partnership id={SYSTEM_ROUTES.PARTNERSHIP} />
      </Container>
    </>
  );
};

export default Home;
