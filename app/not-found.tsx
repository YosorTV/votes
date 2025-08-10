import Link from '@/components/elements/Link';
import Text from '@/components/elements/Text';
import Title from '@/components/elements/Title';
import { SYSTEM_ROUTES } from '@/lib/constants/system';

export default function NotFound() {
  return (
    <div className='flex min-h-auto flex-col'>
      <div className='mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8'>
        <p className='text-2xl/8 font-semibold text-info'>404</p>
        <Title level='1' variant='secondary' className='mt-4'>
          Страница не найдена
        </Title>
        <Text variant='secondary' className='mt-6'>
          Извините, мы не смогли найти страницу, которую вы ищете.
        </Text>
        <div className='mt-10'>
          <Link href={SYSTEM_ROUTES.HOME} className='text-sm/7 font-semibold text-info'>
            <span aria-hidden='true'>&larr;</span> На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
