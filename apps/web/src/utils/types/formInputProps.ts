import { UseFormReturn } from "react-hook-form";

type FormInputProps = {
    form: UseFormReturn<{
        name: string;
        status: "New" | "Engaged" | "Proposal Send" | "Closed-Won" | "Closed-Lost";
        email: string;
    }>,
    name: "name" | "email" | "status",
    label: string;
};

export default FormInputProps;