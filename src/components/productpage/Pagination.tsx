import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="mt-8 flex justify-center items-center space-x-2 text-sm">
                <button className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                    «
                </button>
                <button className="px-3 py-1 border rounded bg-green-600 text-white">
                    1
                </button>
                <button className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                    2
                </button>
                <button className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                    3
                </button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                    6
                </button>
                <button className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                    »
                </button>
            </div>
        </>
    )
}

export default Pagination