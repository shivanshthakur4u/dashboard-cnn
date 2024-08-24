import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

function AddNewWidgetButton({ type = "normal", setOpen }) {
  const handleOpen =()=>{
    setOpen(true);
  }
  return (
    <Button
      variant="oultine"
      className="border-2 border-[#edf0f0] bg-white text-xs 
         text-[#88929c] font-medium flex gap-2 px-1.5 h-7"
         onClick={handleOpen}
    >
      <Plus size={14} className={type ==="normal" && "hidden"} />{" "}
      <span className="md:block hidden">Add Widget</span>{" "}
      <Plus size={14} className={type === "section" && "hidden"} />
    </Button>
  );
}

export default AddNewWidgetButton;
