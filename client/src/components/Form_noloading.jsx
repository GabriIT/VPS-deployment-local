import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [Q, setQ] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/multiply', { num1, num2 });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="string" value={Q} onChange={(e) => setQ(e.target.value)} />
               
                <button type="submit">Multiply</button>
            </form>
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default Form;


