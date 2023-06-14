import SectionTitle from "../../components/SectionTitle";


const WhatWeProvides = () => {
    return (
        <div>
            <SectionTitle title={'What We Provides' }description={'Here are the services we provide'}></SectionTitle>
            <div className="flex justify-center mt-10">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 h-20 my-2 mx-auto' src="https://st3.depositphotos.com/10863776/16295/v/600/depositphotos_162950000-stock-illustration-young-female-teacher-on-science.jpg" alt="" />
                    <h2 className='text-xl dark:text-white font-bold my-2'>Exprienced Instructors</h2>
                    <p className='text-slate-700 dark:text-white'>Our Instructor are highly qualified</p>
                </div>
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 h-20 my-2 mx-auto' src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1649785851474-24-7%20Customer%20Service%20Tech%20Support.png" alt="" />
                    <h2 className='text-xl dark:text-white font-bold my-2'>24/7 Supports</h2>
                    <p className='text-slate-700 dark:text-white'>You can get supports 24/7</p>
                </div>
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 h-20 my-2 mx-auto' src="https://thumbs.dreamstime.com/b/video-conference-cartoon-laptop-online-business-meeting-group-call-computer-desktop-web-service-collective-isolated-208330729.jpg" alt="" />
                    <h2 className='text-xl dark:text-white font-bold my-2'>One to One Meeting</h2>
                    <p className='text-slate-700 dark:text-white'>You can have one to one meeting with instructors</p>
                </div>
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 h-20 my-2 mx-auto' src="https://www.alphaacademy.org/wp-content/uploads/2021/12/Lifetime-access.png" alt="" />
                    <h2 className='text-xl dark:text-white font-bold my-2'>Lifetime Access</h2>
                    <p className='text-slate-700 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 h-20 my-2 mx-auto' src="https://possibleworks.com/wp-content/uploads/2021/02/rsz_8601-1024x675.jpg" alt="" />
                    <h2 className='text-xl dark:text-white font-bold my-2'>Rewards</h2>
                    <p className='text-slate-700 dark:text-white'>You will be rewarded if you finish course</p>
                </div>
                <div className='single-category border shadow-xl rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)] text-center'>
                    <img className='w-20 dark:text-white h-20 my-2 mx-auto' src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/02/08044014/Flexible-v-alternative-1024x512.png" alt="" />
                    <h2 className='text-xl font-bold my-2 dark:text-white'>Flexible Times</h2>
                    <p className='text-slate-700 dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default WhatWeProvides;