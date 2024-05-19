import React, { useState } from 'react';
// import APIService from './components/APIService';
import axios from 'axios';

const Form = () => {
    const [Q, setQ] = useState('');
    
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        try {
            const response = await axios.post('/api/multiply', {Q});
            setResult(response.data.result);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading state back to false after response
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="string" value={Q} onChange={(e) => setQ(e.target.value)} />
                <button type="submit">Question</button>
            </form>
            {loading && <p>Loading...</p>} {/* Display loading message if loading state is true */}
            {Q && <p>Question: {Q}</p>}
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default Form;
