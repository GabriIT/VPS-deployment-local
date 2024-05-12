import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
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
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                <button type="submit">Multiply</button>
            </form>
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default Form;


