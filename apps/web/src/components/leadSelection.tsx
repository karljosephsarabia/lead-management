import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type LeadSelectionProps = {
  field: {
    value: string,
    onChange: (value: string) => void;
  };
};

export function LeadSelection({ field }: LeadSelectionProps) {
  return (
    <Select value={field.value || "New"} onValueChange={field.onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Lead Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Engaged">Engaged</SelectItem>
          <SelectItem value="Proposal Sent">Proposal Sent</SelectItem>
          <SelectItem value="Closed-Won">Closed Won</SelectItem>
          <SelectItem value="Closed-Lost">Closed Lost</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}