import { z } from "zod";

const formSchema = z.object({
    name: z.string().trim().min(3, { message: "Name must be at least 3 characters." }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    status: z.enum(["New", "Engaged", "Proposal Send", "Closed-Won", "Closed-Lost"])
});

export default formSchema;