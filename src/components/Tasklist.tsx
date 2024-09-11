type TasklistProps = {
    title: string;
    tasks: string[];
    id: number;
    onDelete: (id:number) => void;
}

function Tasklist(props : TasklistProps){
    return(
        <>
            <div className="taskList">
                <h2 className="taskTitle">{props.title}</h2>
                <ul className="task">
                <button className="remove-grocery" onClick={() => props.onDelete(props.id)}>
 
                    X
                </button>
                    {props.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>                
            </div>
        </>
    );
}

export default Tasklist
