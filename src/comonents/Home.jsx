import React,{ useEffect, useState }  from 'react';
import Task from './Task';

const Home = () => {
  const initilarray =localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  
  const[tasks, setTasks]= useState(initilarray);
  const[title,setTitle]= useState("");
  const[description,setDescription]= useState("");
  
  

  const submitHandler= (e)=> {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
         title,
        description,
        
      }]);
      localStorage.setItem("tasks",JSON.stringify(tasks));
  
  };
  
  const deleteTask=(index)=> {
    const filteredarr=tasks.filter((val,i)=>{
      return i!==index;
    });
    console.log(filteredarr);
    setTasks(filteredarr)

  };

  useEffect(()=>{
    localStorage.setItem("taks",JSON.stringify(tasks));

  },[tasks]);
  
  

  return ( 
     <div className="container">
     <h1>Todo-App</h1>
    <form onSubmit={submitHandler}>
      <input 
         type="text"
         placeholder="Title" 
         value={title}
          onChange={(e)=>setTitle(e.target.value)}
       />
      <textarea 
      placeholder="Description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      ></textarea>

      <button type="submit" >ADD</button>
    </form>
    
    {tasks.map((item,index) =>(
      < Task key={index} title={item.title} description={item.description}
      deleteTask={deleteTask} index={index}/>
    ))}
  </div>
  );
}; 

export default Home;
