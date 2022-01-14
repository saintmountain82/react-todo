import { useRecoilValue, useRecoilState } from "recoil";
import {
  toDoState,
  toDoSelector,
  categoryState,
  Categories,
} from "../routes/Atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  // const [toDos, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Do List</h1>
      <br />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

      {/* <ul>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
    </div>
  );
}

export default ToDoList;
