import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../routes/Atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "please write to do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
