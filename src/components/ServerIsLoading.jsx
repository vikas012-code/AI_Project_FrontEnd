import React from 'react'

function ServerIsLoading() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center fixed z-20 backdrop-blur-[2px] backdrop-grayscale-50'>
        <div className='w-[50%] h-[50%] max-sm:w-[70%] max-sm:h-[40%] bg-green-50 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 relative'>
            <div className=' absolute top-6 left-6 right-6 max-sm:text-[10px]'>
                <p><strong>Note</strong>-this is demo project so it is deployed in render's free tier because of that it's server sleeps after some time of if it is idle and takes 1-2 minuts to restart from sleep</p>
            </div>
            <h3 className='max-sm:text-sm text-xl font-medium'>Server is loading</h3>
            <div className="w-12 h-12 inset-0 rounded-full border-2 border-indigo-500  border-t-transparent animate-spin" />
        </div>
    </div>
  )
}

export default ServerIsLoading