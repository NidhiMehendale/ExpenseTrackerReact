
const AddTask = ({tasklist , setTasklist, task , setTask}) => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(task.id){
      // const date = new Date();
      const updatedTasklist = tasklist.map((todo) => (
        todo.id === task.id ? {id :task.id, name:task.name,description: task.description, } : todo
      ))
    
      setTasklist(updatedTasklist);
      setTask({});
    }else{
      // const date = new Date();
      const newTask ={
        id: Math.floor(Math.random() * 100000),
        // id:date.getTime(),
        name:e.target.task.value,
        description:e.target.description.value,
     
      }
      setTasklist([...tasklist ,newTask]);
      setTask({});
    }  
}
  

  return (
   <section className='addTask'>
      <form onSubmit={handleSubmit}> 
        <input type="number" name="task" value={task.name || ""} autoComplete='off' placeholder='Amount(+income/-expense)' maxLength="25" onChange={e=> setTask({...task,name:e.target.value})}/>
        <input type="text" name="description" value={task.description || ""} autoComplete='off' placeholder='Description' maxLength="50" onChange={e => setTask({ ...task, description: e.target.value })} />
        <button type='submit'>{task.id ? "Update" : "+ Add Task"}</button>
      </form>
   </section>
  )
}

export default AddTask;