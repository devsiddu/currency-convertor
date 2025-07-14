import React from 'react'

const Input = ({ label,setValue,value }) => {
    return (
        <div className='w-full flex flex-col bg-white px-4 py-3 mb-3 rounded-md '>
            <div className='flex justify-between'>
                <p className='text-gray-500 text-lg font-medium' >{label}</p>
                <p className='text-gray-500 text-lg font-medium'>Currency Type</p>
            </div>
            <div className='flex justify-between pt-4'>
               <input type="text"
               onChange={e=> setValue(e.target.value)}
               value={value}
                className='w-full text-xl font-medium bg-transparent outline-none'
            />
            <select className='px-2 py-2.5 outline-none rounded-md border-2 border-gray-600 bg-gray-100 font-medium w-30'>
                <option value="usd">Usd</option>
            </select>
            </div>
            
        </div>
    )
}

export default Input
