import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LeadSelection } from "./leadSelection";
import FormInputProps from "@/utils/types/formInputProps";


const CustomerFormSelect = ({ form, name, label }: FormInputProps) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <LeadSelection field={field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CustomerFormSelect;