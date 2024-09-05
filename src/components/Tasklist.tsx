type TasklistProps = {
    title: string;
    tasks: string[];
    id: number
}

function Tasklist(props : TasklistProps){
    return(
        <>
            <div className="taskList">
                <h2 className="taskTitle">{props.title}</h2>
                <ul className="task">
                    {props.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>                
            </div>
        </>
    );
}

export default Tasklist
