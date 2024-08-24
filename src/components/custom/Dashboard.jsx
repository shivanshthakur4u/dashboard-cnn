import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RefreshCcw } from "lucide-react";
import AddNewWidgetButton from "./AddNewWidgetButton";
import MoreMenu from "./MoreMenu";
import FilterDataDropdown from "./FilterDataDropdown";
import Categories from "./Categories";
import AddWidgetModal from "./AddWidgetModal";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useSelector((state) => state.dashboard.categories);
  const searchTerm = useSelector((state) => state.dashboard.searchTerm);
  const [selectedValue, setSelectedValue] = useState("Last2days");

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter(
      (widget) =>
        widget.selected &&
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="flex flex-col gap-4 w-full pt-10">
      <div className="flex justify-between w-full">
        <h1 className="text-[#0b0b0b] font-bold text-base">CNAPP Dashboard</h1>

        <div className="flex gap-2">
          <AddNewWidgetButton setOpen={setIsOpen} />
          <div className="bg-white border-[#edf0f0] border-2 h-7 w-6 items-center justify-center flex rounded-md cursor-pointer">
            <RefreshCcw size={12} color="#88929c" />
          </div>
          <MoreMenu />
          <FilterDataDropdown
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
      </div>
      {filteredCategories.map((category) => (
        <Categories key={category.id} category={category} />
      ))}
      <AddWidgetModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Dashboard;
