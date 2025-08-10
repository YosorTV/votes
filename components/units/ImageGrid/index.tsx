import Image from '@/components/elements/Image';
import ZoomOnHover from '@/components/elements/ZoomOnHover';

const ImageGrid = () => {
  return (
    <div className='mt-14 flex justify-end gap-8 xl:-mt-44 2xl:mt-0 2xl:pl-20'>
      <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 xl:order-last xl:pt-36 2xl:order-0 2xl:pt-80'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/10 ring-inset' />
        </div>
      </div>
      <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
      </div>
      <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt=''
              src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
