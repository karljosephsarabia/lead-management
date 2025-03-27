"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "./customFormInput";
import CustomerFormSelect from "./customFormSelect";
import formSchema from "@/utils/formSchema";
import { toast } from "sonner";


export function AddLeadForm({ handleFormSubmit }: { handleFormSubmit: () => void; }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            status: "New",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("https://lead-management-0z1r.onrender.com/api/leads", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values)
            });

            const resMessage = await response.json();
            if (!response.ok) toast.error(resMessage.message)
            if (response.ok) toast.success("Lead added successfully");
            handleFormSubmit();
            form.reset();
        } catch (err) {
            toast.error(`Network Error: ${err || "Failed to connect to server"}`)
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomFormInput form={form} name="name" label="Full Name" />
                <CustomFormInput form={form} name="email" label="Email Address" />
                <CustomerFormSelect form={form} name="status" label="Status" />
                <Button className="w-full" type="submit">Submit</Button>
            </form>
        </Form>
    );
}