"use client";

import { DataTable } from "@/components/dataTable";
import LoadingSpinner from "@/components/loadingSpinner";
import fetchLeadListing from "@/utils/leadApi";
import { useQuery } from "@tanstack/react-query";
import { FormDialog } from "@/components/formDialog";
import { Toaster } from "sonner";


const Home = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['leadListing'],
        queryFn: fetchLeadListing,
        refetchInterval: 1000
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>{error.message}</p>

    return (
        <>
            <Toaster position="bottom-right" richColors />
            <FormDialog />
            <DataTable data={data?.data} />

        </>
    );
};

export default Home;