
import WorkoutCard from './WorkoutCard';
import { Workout } from "@/types/workout";

const WorkoutLibrary = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const workout:Workout[] = await res.json()



    return (
        <div className='bg-black px-5 py-10 text-white'>
            
            {/* text section */}
            <div className='mx-8'>
                <h2 className='text-3xl font-bold'>THE LIBRARY</h2>
                <p className='mt-2 text-gray-400 pb-7'>Twelve lifts covering every major muscle group.</p>
            </div>
            {/* card section */}

            <div className='grid grid-cols-1 mx-8 gap-20 md:grid-cols-2 lg:grid-cols-3'>
                {workout.map((item)=>(
                    <WorkoutCard key={item.id} workout={item}/>
                ))}
            </div>

        </div>
    );
};

export default WorkoutLibrary;