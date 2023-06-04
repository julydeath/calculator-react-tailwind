import React from 'react'

const Display = ({ list }) => {
    return (
        <div className='bg-white mt-2 mx-2 h-12 border border-slate-400 rounded-md'>
            <div>
                {list.map((li, index) => <span key={index} className='text-xl font-medium'>{li}</span>)}
            </div>
        </div>
    )
}

export default Display