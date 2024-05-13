import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface Attribute {
  name: string;
  type: string;
}

interface EntityFormProps {
  onSubmit: (data: any) => void; // Adjust onSubmit type
}

const FormSchema = z.object({
  name: z.string().min(2).max(50).optional(), // Adjust validation rules as needed
  email: z.string().email(),
  mobileNumber: z.string().min(10).max(10).optional(),
  dateOfBirth: z.string().optional(),
});

const EntityForm: React.FC<EntityFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    reset(); // Reset form fields when closing dialog
  };

  const submitForm = async (data: any) => {
    try {
      await onSubmit(data);
      closeDialog(); // Close dialog after submitting form
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={openDialog}>
            Create Entity
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Entity</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input type="text" {...register("name")} />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input type="text" {...register("email")} />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
              <Label htmlFor="mobileNumber">Mobile Number:</Label>
              <Input type="text" {...register("mobileNumber")} />
              {errors.mobileNumber && (
                <span>{errors.mobileNumber.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth:</Label>
              <Input type="text" {...register("dateOfBirth")} />
              {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EntityForm;
