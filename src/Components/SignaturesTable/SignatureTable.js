import React from 'react';
import './SignatureTable.css';

const SignatureTable = (props) => {
    const { currentTheme, signatures, type } = props || {}
    
    return (
        
        <table className='signature-table'>
            <thead>
                <tr className='signature-type'>
                    <th>{type}</th>
                </tr>
            </thead>
            <tbody>
                {signatures.filter(signature => signature.occassion === currentTheme).map((signature, index) => (
                    <tr key={index}>
                        <td>{signature.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default SignatureTable;