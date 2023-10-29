"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <section>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-md"
        />
      </div>
      <div className="mb-4">
        <SimpleMDE className="w-full max-w-md" />
      </div>
      <div className="max-w-sm">
        <button className="btn btn-primary">Add Issue</button>
      </div>
    </section>
  );
};

export default NewIssue;
