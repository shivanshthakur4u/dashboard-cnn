import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetDescription,
  SheetTitle,
} from "src/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { toggleWidgetVisibility } from "src/features/dashboardSlice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CommonPrimaryButton from "./CommonPrimaryButton";

function SelectWidgetDrawer({ isOpen, setIsOpen, category }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [selectedWidgets, setSelectedWidgets] = useState({});

 
  const initializeSelectedWidgets = () => {
    const initialSelectedWidgets = {};
    categories.forEach((category) => {
      initialSelectedWidgets[category.id] = category.widgets
        .filter((widget) => widget.selected)
        .map((widget) => widget.id);
    });
    setSelectedWidgets(initialSelectedWidgets);
  };


  React.useEffect(() => {
    initializeSelectedWidgets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleWidgetToggle = (categoryId, widgetId) => {
    setSelectedWidgets((prev) => {
      const updatedWidgets = prev[categoryId].includes(widgetId)
        ? prev[categoryId].filter((id) => id !== widgetId)
        : [...prev[categoryId], widgetId];
      return { ...prev, [categoryId]: updatedWidgets };
    });
  };

  const handleSubmit = () => {
    categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        const isSelected = selectedWidgets[category.id]?.includes(widget.id);
        if (isSelected !== widget.selected) {
          dispatch(
            toggleWidgetVisibility({
              categoryId: category.id,
              widgetId: widget.id,
            })
          );
        }
      });
    });

    setIsOpen(false);
  };

  

 
  React.useEffect(() => {
    if (isOpen) {
      initializeSelectedWidgets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white p-0 m-0 items-center text-white md:min-w-[600px] w-full">
        <SheetTitle asChild>
          <VisuallyHidden>Add Widget</VisuallyHidden>
        </SheetTitle>
        <SheetDescription asChild>
          <VisuallyHidden>
            Personalise your dashboard by adding the following widget
          </VisuallyHidden>
        </SheetDescription>
        <div className="py-2.5 pl-6 bg-[#14147d] flex text-white text-sm font-medium">
          Add Widget
        </div>
        <div className="p-1 flex flex-col gap-3 text-[#454545]">
          <p className="py-2 px-2">
            Personalise your dashboard by adding the following widget
          </p>
          <Tabs defaultValue={category? category : categories[0]?.id} className="">
            <TabsList className="bg-white">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  className="bg-white px-6 data-[state=active]:bg-white data-[state=active]:border-b-[2px] data-[state=active]:border-[#14147d]
                  shadow-none border-b-2 data-[state=active]:shadow-none rounded-none text-xs tracking-wider pb-3 
                  data-[state=active]:text-[#252351] data-[state=active]:font-bold"
                  value={category.id}
                >
                  {category.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="pl-4 pt-1 pr-2 w-full"
              >
                {category.widgets.map((widget) => (
                  <div
                    key={widget.id}
                    className="border rounded-sm border-gray-300 p-2 text-sm flex gap-2 items-center text-[#14147d] mb-2"
                  >
                    <Input
                      type="checkbox"
                      className="w-4 h-4 rounded-md checked:bg-[#14147d] bg-[#14147d]"
                      checked={selectedWidgets[category.id]?.includes(
                        widget.id
                      )}
                      onChange={() =>
                        handleWidgetToggle(category.id, widget.id)
                      }
                    />
                    {widget.name}
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
          <SheetFooter className="fixed right-3 bottom-3 flex flex-row max-sm:gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <CommonPrimaryButton
              type="submit"
              title="Confirm"
              onClick={handleSubmit}
            />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SelectWidgetDrawer;
