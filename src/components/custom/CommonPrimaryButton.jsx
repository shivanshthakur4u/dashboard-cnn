import React from "react";
import { Button } from "../ui/button";

function CommonPrimaryButton({ type = "submit", title,...props }) {
  return (
    <Button
      type={type}
      className="w-full border bg-[#14147d] duration-300 transition-all hover:duration-300 hover:transition-all hover:bg-white hover:border-[#14147d] hover:border hover:text-[#14147d]"
      {...props}
    >
      {title}
    </Button>
  );
}

export default CommonPrimaryButton;
