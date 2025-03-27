

const fetchLeadListing = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/leads');
        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
        return await response.json();
    } catch (err) {
        throw err;
    }
};

export default fetchLeadListing;