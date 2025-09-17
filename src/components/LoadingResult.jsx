function LoadingResult (){
    return (
        
        <div className="w-full  bg-white dark:bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center  dark:border-gray-800 transition">
      
            <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500  border-t-transparent animate-spin" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Generating your result...
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Please wait while EchoGen works its magic.
            </p>
        </div>
    )
}

export default LoadingResult