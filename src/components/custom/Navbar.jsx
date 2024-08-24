import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "src/components/ui/breadcrumb";

import { BellRing, LogOut, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { NameInitial } from "../../lib/utils";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="bg-white h-12 w-full sm:px-5 px-4 flex items-center justify-between fixed z-50 border-b top-0">
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#294f71] font-medium">
              Dashboard
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex lg:gap-8 gap-4 md:gap-6 items-center">
        {/* serach bar */}
        <SearchBar />
        {/*  blurred selector in image added for future usage  */}
        <Select>
          <SelectTrigger
            className="w-[130px] border-none shadow-none 
          focus:outline-none focus:border-none text-[#969da8] focus:ring-0 md:flex hidden"
          >
            <SelectValue placeholder="Blurred Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="value1">Value 1</SelectItem>
            <SelectItem value="value2">Value 2</SelectItem>
          </SelectContent>
        </Select>

        {/* notification */}
        <BellRing color="#c7d3dd" size={24} className="cursor-pointer sm:w-6 sm:h-6 w-4 h-4" />

        {/*  login user details */}
        <div className="items-center gap-1 cursor-pointer text-[#969da8] md:flex hidden">
          <div className="bg-[#c7d3dd] rounded-full h-6 w-6 flex items-center justify-center ">
            <User
              fill="white"
              color="white"
              size={16}
              className="rounded-full"
            />
          </div>
          {NameInitial("Saurabh Singh")}
        </div>

        {/* logout if user logged in */}
        <LogOut
          className="w-6 h-6 cursor-pointer sm:block hidden"
          color="#c7d3dd"
        />
      </div>
    </div>
  );
}

export default Navbar;
