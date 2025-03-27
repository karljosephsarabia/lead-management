import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AddLeadForm } from "./addLeadForm";
import { useState } from "react";

export function FormDialog() {
    const [showDialog, setShowDialog] = useState(false);

    const handleFormSubmit = () => {
        setShowDialog(false);
    };
    
    return (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
                <Button className="absolute md:right-1/5 right-0 top-10 z-10 cursor-pointer">Add New Lead</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Lead</DialogTitle>
                    <DialogDescription>
                        Add potential customer by entering key details.
                    </DialogDescription>
                </DialogHeader>
                <AddLeadForm handleFormSubmit={handleFormSubmit} />
            </DialogContent>
        </Dialog>
    );
}