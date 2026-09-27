function AlertCard(props)
{
    return(
        <div className="backdrop-blur fixed inset-0 flex items-center justify-center">
            <div className="flex justify-center items-center w-56 md:w-72 h-28 relative bg-gray-700 text-white p-6 rounded-xl shadow-lg">
                <h1>{props.content}</h1>
                <button onClick={props.close} className="absolute top-3 right-3 text-2xl">×</button>
            </div>
        </div>
        
    )
}

export default AlertCard