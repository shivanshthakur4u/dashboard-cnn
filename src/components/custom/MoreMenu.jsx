import { EllipsisVertical } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
function MoreMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white border-[#edf0f0] border-2 h-7 w-6 items-center justify-center flex rounded-md">
        <EllipsisVertical size={12} color="#88929c" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreMenu;
