import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import '../styles/task-card.css';

function TaskCard(props: { id: string; completed: boolean; name: string; deleteTask: (id: string) => void; toggleComplete: (id: string) => void}) {
  return (
    <div className='task-card' id={props.id}>
      <div className= {`task-info ${props.completed? "task-info-completed": ""}`}>
        <input
          className='task-checkbox'
          type="checkbox"
          checked={props.completed}
          onChange={() => props.toggleComplete(props.id)}
        />
        <p className='task-title'>{props.name}</p>
      </div>

      <div className="remove-task">
        <FontAwesomeIcon className="remove-task-icon" icon={faTrashCan} onClick={() => props.deleteTask(props.id)} />
      </div>
    </div>
  );
}

export default TaskCard;
