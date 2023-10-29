import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <p className="text-error mt-2">{children}</p>;
};

export default ErrorMessage;
