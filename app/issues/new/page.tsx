"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, set } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <section>
      {error && (
        <div className="alert alert-error mb-4 max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred");
          }
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
    </section>
  );
};

export default NewIssue;
