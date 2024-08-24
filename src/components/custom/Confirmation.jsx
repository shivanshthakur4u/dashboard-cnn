import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useDispatch } from "react-redux";
import { removeWidget } from "src/features/dashboardSlice";
import { toast } from "../ui/use-toast";

function Confirmation({ widgetId, isOpen, setShowConfirmation, category }) {
  const handleCloseModal = () => {
    setShowConfirmation(false);
  };
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeWidget({ categoryId: category.id, widgetId }));
    toast({
      variant: "success",
      title: "Widget Removed Successfully",
      duration: 2000,
    });

    setShowConfirmation(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setShowConfirmation}>
      <DialogContent className="bg-white  max-sm:w-[350px] w-[400px] rounded-md">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            widget.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex  flex-row justify-end max-sm:gap-3">
          <Button variant="outline" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button type="submit" variant="destructive" onClick={handleRemove}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Confirmation;
