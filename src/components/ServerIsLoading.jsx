import React from 'react'

function ServerIsLoading() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center absolute z-20 backdrop-blur-[2px] backdrop-grayscale-50'>
        <div className='w-[50%] h-[50%] bg-green-50 rounded-2xl p-10 flex flex-col items-center justify-center gap-4'>
            <div>
                <p><strong>Note</strong>-this is demo project so it is deployed in render's free tier because of that it's server sleeps after some time of if it is idle and takes 1-2 minuts to restart from sleep</p>
            </div>
            <h3>Server is loading</h3>
            <div className="w-10 h-10 inset-0 rounded-full border-2 border-indigo-500  border-t-transparent animate-spin" />
        </div>
    </div>
  )
}

export default ServerIsLoading