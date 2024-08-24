import { Clock } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
function FilterDataDropdown({ selectedValue, setSelectedValue }) {
  return (
    <div className="border-[1.6px] border-[#5658a2] rounded-sm h-7 flex items-center p-0.5 bg-white">
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger
          className="md:min-w-[120px] w-full border-none shadow-none 
    focus:outline-none focus:border-none text-[#14167d] focus:ring-0 flex  px-1 max-w-[90px] text-xs font-semibold"
        >
          {" "}
          <Clock fill="#1e2183" color="white" size={18} strokeWidth={"1.2px"} />
          <div className="h-full bg-[#7979b5] w-[1.5px] ml-0.5 md:block hidden" />
          <div className="md:block hidden">
            <SelectValue placeholder="" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Last2days">Last 2 days</SelectItem>
          <SelectItem value="Last7days">Last 7 days</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterDataDropdown;
