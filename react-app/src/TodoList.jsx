function TodoList(){
    const todos = ['learn react','First project', 'Practice more'];
    return(
        <div>
            <h2>My TodoList</h2>
            <ul>
                {todos.map((todo, index)=>(
                <li key = {index}>{todo}</li>
                ))}
            </ul>
        </div>
    );

}

export default TodoList;