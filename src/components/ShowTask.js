const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTasklist);
  };

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Expense List</span>
        </div>
      </div>
      <table className='expense-table'>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasklist.map((todo) => (
            <tr key={todo.id} >
              <td style={{ color: todo.name < 0 ? 'red' : 'green' }}>
                 Rs {Math.abs(todo.name)}
              </td>
              <td>{todo.description}</td>
              <td>
                <i
                  className="bi bi-pencil-square"
                  onClick={() => handleEdit(todo.id)}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                ></i>
                <i
                  className="bi bi-trash"
                  onClick={() => handleDelete(todo.id)}
                  style={{ cursor: 'pointer' }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShowTask;
