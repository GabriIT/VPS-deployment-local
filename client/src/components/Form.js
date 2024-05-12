import React, { useState } from 'react';
// import APIService from './components/APIService';
import axios from 'axios';

const Form = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        try {
            const response = await axios.post('http://localhost:5000/api/multiply', { num1, num2 });
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
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                <button type="submit">Multiply</button>
            </form>
            {loading && <p>Loading...</p>} {/* Display loading message if loading state is true */}
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default Form;
