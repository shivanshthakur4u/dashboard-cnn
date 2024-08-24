import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../../features/dashboardSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "src/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import CommonPrimaryButton from "./CommonPrimaryButton";


const AddWidgetModal = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now().toString(),
      name,
      content,
      selected: true,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setIsOpen(false);
    setName("");
    setContent("");
    setCategoryId("");
    toast({
      variant: "success",
      title: "Widget Added Successfully",
      duration: 2000,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white max-sm:w-[350px] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center">Add New Widget</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Widget Name"
            required
          />
          <Select value={categoryId} onValueChange={setCategoryId} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Widget Content"
            required
            className="border rounded-md w-full py-2 px-2 resize-none placeholder:text-sm"
            rows={4}
          />
          <div className="flex gap-5 w-full">
            <Button
              variant="outline"
              className="w-full"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <CommonPrimaryButton title="Add Widget" type="submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

AddWidgetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default AddWidgetModal;