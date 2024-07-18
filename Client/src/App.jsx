import React, { useState } from 'react'
import axios from 'axios';


const App = () => {
  const [newtitle,setnewtitle]=useState()
  const [newdes, setnewdes]=useState()
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [list,setList]=useState([])
  const addTodo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/create", {
        title: title,
        description: description,
      });
      // Assuming the response contains the created todo item in 'data' property
      setList([...list, response.data]); 
      alert('todo created successfully');
      window.location.reload
    } catch (error) {
      console.log(error);
    }
  };
const DeleteTodo=async(id)=>{
  try{
    await axios.delete(`"http://localhost:5000/delete/${id}`)
    alert("todo delete successsfully")
    window.location.reload
  }catch(error){
    console.log(error)
  }
}  

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className='font-bold flex justify-center items-center text-3xl text-blue-800 mb-5'>Todo List using MERN</h1>

      {/* Container for Inputs */}
      <div className='border-2 border-gray-700 w-[250px] flex justify-center items-center flex-col rounded-lg'>
        <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unique-input">Title</label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter title"
            type="text"
            id="unique-input"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unique-input">Description</label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter description"
            type="text"
            id="unique-input"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <button className='w-[50px] h-full bg-slate-700 text-white rounded-lg mb-3'
        onClick={addTodo}>Add</button>

      </div>

      {/* Todo Container */}
      
      <div className='grid grid-cols-3 gap-4'>
        <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 rounded-lg shadow-md">
          <div className="text-lg font-bold capitalize rounded-md mb-2">Title</div>
          <div className="rounded-md mb-2">
            Description
          </div>
          <div className='flex justify-between'>
            <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2"onClick={()=>delete(value.id)}>
              Delete
            </button>

            <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
              Update
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App