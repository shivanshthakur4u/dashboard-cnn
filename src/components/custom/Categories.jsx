import React, { useState } from "react";
import ChartCard from "./Widget";
import AddNewWidgetButton from "./AddNewWidgetButton";
import SelectWidgetDrawer from "./SelectWidgetDrawer";
import { useDispatch } from "react-redux";
import { removeWidget } from "src/features/dashboardSlice";
import { X } from "lucide-react";
import { toast } from "../ui/use-toast";

function Categories({ category }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const handleRemove = (widgetId) => {
    dispatch(removeWidget({ categoryId: category.id, widgetId }));
    toast({
      variant: "success",
      title: "Widget Removed Successfully",
      duration: 2000,
    });
  };
  return (
    <div className="flex flex-col gap-1">
      <h5 className="text-[#0b0b0b] font-bold">{category.name}</h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
        {category?.widgets
          .filter((widget) => widget.selected)
          .map((widget) => (
            <ChartCard key={widget.id} className="relative">
              <div className="flex flex-col gap-2">
                <p className="font-bold">{widget.name}</p>
              </div>
              <div className="flex items-center justify-center h-full">
                {widget.content}
              </div>
              <div
                className="p-1 bg-white border absolute -top-1 -right-1 text-gray-400
               rounded-full items-center justify-center cursor-pointer
                hover:text-red-500 hover:border-red-500"
                onClick={() => handleRemove(widget.id)}
              >
                <X className=" h-3 w-3" />
              </div>
            </ChartCard>
          ))}
        <ChartCard className={"flex items-center justify-center"}>
          <AddNewWidgetButton type="section" setOpen={setDrawerOpen}  />
        </ChartCard>
      </div>
      <SelectWidgetDrawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen} category={category.id} />
    </div>
  );
}

export default Categories;
