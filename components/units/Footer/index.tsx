import Link from '@/components/elements/Link';
import Container from '@/components/units/Container';
import { NAV_LINKS } from '@/lib/constants/system';
import Copyright from '@/units/Copyright';

const Footer = () => {
  return (
    <footer className='bg-background'>
      <Container className='flex flex-col gap-5 py-10'>
        <nav aria-label='Footer' className='-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6'>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              variant='primary'
              href={item.href}
              className='text-secondary-foreground hover:text-secondary'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
