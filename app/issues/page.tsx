import Link from "next/link";
import React from "react";

const Issues = () => {
  return (
    <div>
      <Link href="/issues/new">
        <button className="btn btn-ghost">New Issue</button>
      </Link>
    </div>
  );
};

export default Issues;
