import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'>
        <div
          className='p-10 flex flex-col bg-[#2B2929] 
        dark:bg-slate-800 text-white space-y-5'
        >
          <h1 className='text-5xl font-bold'>
            Welcome to Dropbox. <br /> <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className='pb-20'>
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
            href='/dashboard'
            className='flex cursor-pointer bg-blue-500 p-5 w-fit rounded-lg'
          >
            Try it for free!
            <ArrowRight className='ml-10' />
          </Link>
        </div>
        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
          <video autoPlay loop muted className='rounded-lg'>
            <source
              src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4'
              type='video/mp4'
            />
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      <div className='flex flex-col text-center py-20 items-center'>
        <h2 className='text-3xl font-bold'>
          All the tools you need in one plan
        </h2>
        <p className='text-xl font-bold text-gray-500 mt-3 px-20'>
          Store and share files. Sign and send documents. Record screens and
          comment. All in one place.
        </p>
        <Link
          href='/dashboard'
          className='flex cursor-pointer text-blue-500 font-bold p-4 w-fit mt-10 rounded-lg border-2 border-blue-500'
        >
          Need storage?
          <ArrowRight className='ml-10' />
        </Link>
      </div>
    </main>
  );
}
