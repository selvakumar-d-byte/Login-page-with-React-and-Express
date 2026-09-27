function Home() {
    return (
        <div className="w-full max-w-5xl text-white py-28 flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="md:w-1/2">
                <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg" className="w-full rounded-xl" alt="home-image" />
            </div>

            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold font-serif text-red-500">Welcome to OffFlix</h1>
                <p className="text-gray-300 mt-4">Your favourite movies, all in one place.</p>
                <p className="text-gray-400 mt-2"> Explore movies and find something interesting to watch.</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-7">
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg">Browse Movies</button>
                    <button className="border border-gray-500 hover:bg-gray-800 px-6 py-2 rounded-lg">My List</button>
                </div>
            </div>
        </div>
    )
}

export default Home