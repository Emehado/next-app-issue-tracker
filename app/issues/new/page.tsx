"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <div className="mb-4">
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-md"
        />
      </div>
      <div className="mb-4">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE className="w-full max-w-md" {...field} />
          )}
        />
      </div>
      <div className="max-w-sm">
        <button className="btn btn-primary" type="submit">
          Add Issue
        </button>
      </div>
    </form>
  );
};

export default NewIssue;
