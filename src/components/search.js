
import { useState } from 'react';
import { Search } from 'semantic-ui-react'
import "semantic-ui-css/components/search.min.css";
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export function search() {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');



    const handleSearchChange = async (e, query) => {
        setLoading(true);
        var keyword = query.value;
        setValue(keyword);
        const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/search-stores?q=${keyword}`);
        const data = await response.json();
        const filtered = data

        if (filtered.length > 0) {
            setResults(filtered);
        } else {
            setResults([]);
        }
        setLoading(false);
    }

    return (


        <Search
            fluid
            loading={loading}
            size="small"
            input={{ fluid: true }}
            placeholder="Search for stores..."
            onResultSelect={(e, data) => {
                setValue(data.result.title); window.location.replace(data.result.slug);

            }}
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
        />
    )

}
export default search;