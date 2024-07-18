import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='font-bold flex justify-center items-center text-3xl text-blue-800'>Todo List using MERN</h1>

      {/* Container for Inputs */}
      <div className='border-2 border-gray-700 w-[250px] h-full flex justify-center items-center flex-col rounded-lg ml-52 mt-10'>
        <div class="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="unique-input"
          >Your Label</label
          >
          <input
            class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter text here"
            type="text"
            id="unique-input"
          />
        </div>

        <div class="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="unique-input"
          >Your Label</label
          >
          <input
            class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter text here"
            type="text"
            id="unique-input"
          />
        </div>

        <button className='w-[50px] h-full bg-slate-700 text-white rounded-lg mb-3'>Add</button>
      </div>

    </div>
  )
}

export default App