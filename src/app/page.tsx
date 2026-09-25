import Hero from '@/components/Hero';
import WorkoutLibrary from '@/components/WorkoutLibrary';
import React, { Suspense } from 'react';

const Page = () => {
  return (
    <div>
      <Hero/>
      
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center bg-black">
            <span className="loading loading-spinner loading-xl text-[#c2f800]"></span>
          </div>
        }
      >
        <WorkoutLibrary />
      </Suspense>
    </div>
  );
};

export default Page;