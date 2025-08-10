import PageLayout from '@/layouts/Page';
import Home from '@/modules/Home';

export default function RootPage() {
  return (
    <PageLayout locale='en' className='min-h-dvh'>
      <Home />
    </PageLayout>
  );
}
