import React from "react";

export default function FormErrorMessage({ message }: { message: string | undefined }) {
  return <p className="text-red-500 text-xs">{message}</p>;
}
