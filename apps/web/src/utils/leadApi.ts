

const fetchLeadListing = async () => {
    try {
        const response = await fetch('https://lead-management-0z1r.onrender.com/api/leads');
        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
        return await response.json();
    } catch (err) {
        throw err;
    }
};

export default fetchLeadListing;