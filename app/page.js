"use client"

import React, {useState} from 'react'

const page = () => {
  const [title, setTitle]= useState(" "); 
  const [desc, setDesc]= useState(" ");
  const [mainTask, setMainTask]=useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    setMainTask([...mainTask, {title, desc}]);
    console.log(mainTask);
    setTitle(" "); 
    setDesc(" ");
  }

//   const doneHandler=(i)=>{
// let doneTask=[...mainTask];
// for(let index=0;index<mainTask.length;index++){
//   if(doneTask[index]==mainTask[i]){
// doneTask[index]=doneTask.strike();
//   }
// }

setMainTask(doneTask);
  }

  const deleteHandler =(i)=>{
    let copyTask =[...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  let renderTask=<h2>No Task Available </h2>;
  if(mainTask.length>0){
  renderTask= mainTask.map((t, i)=>{
return <li key={i} className='flex justify-between text-center mb-5'>
<div className='flex justify-between items-center  w-2/3'>
<h4 className='font-bold text-2xl'>{t.title}</h4>
<p className='text-xl text-gray-500'>{t.desc}</p>
</div>
<div className='flex justify-end gap-2'>
<button className='bg-green-500 rounded text-white px-4 py-2' onClick={()=>{
  doneHandler(i);
}}>Done</button>
<button className='bg-red-500 rounded px-4 py-1 text-white font-bold' onClick={()=>{
  deleteHandler(i);
}}>Delete</button>
</div>

</li>
  })
}

  return (
    <>
    <h1 className='bg-black text-white p-5 text-xxl font-bold text-center'>Himanshu's Todo List</h1>
    <form onSubmit={submitHandler}>
    <input className='border-black text-2xl border-4 px-5 py-3 ml-5 mt-4 rounded' placeholder="Enter title" value={title} onChange={(e)=>{
      setTitle(e.target.value); }}
       />
    <input className='border-black text-2xl border-4 px-5 py-3 ml-5 mt-4 rounded' placeholder="Enter Description" value={desc} onChange={(e)=>{
      setDesc(e.target.value);
    }}/>
    <button className='bg-black text-white text-2xl text-bold rounded ml-5 px-10 py-4'>Add Task</button>
    </form>
    <hr className='mt-5' />
    <div className='p-8 mt-5 bg-blue-300'>
    <ul>
    {renderTask}
    </ul>
    </div>
    </>
  )
}

export default page