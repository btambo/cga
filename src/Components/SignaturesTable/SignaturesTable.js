import React from 'react';
import './SignaturesTable.css';

const SignaturesTable = (props) => {
    const { currentTheme } = props || {}
    
    return (
        <div className='signature-container'>
            <table className='signature-table'>

                    <tr className='signature-type'>
                        <th>Family</th>
                    </tr>

                    <tr>
                        <td>Family Data</td>
                    </tr>
                    <tr>
                        <td>Family Data</td>
                    </tr>
                    <tr>
                        <td>Family Data</td>
                    </tr>
                    <tr>
                        <td>Family Data</td>
                    </tr>

            </table>
            <table className='signature-table'>

                <tr className='signature-type'>
                    <th>Friend</th>
                </tr>

                <tr>
                    <td>Friend Data</td>
                </tr>
                <tr>
                    <td>Friend Data</td>
                </tr>
                <tr>
                    <td>Friend Data</td>
                </tr>
                <tr>
                    <td>Friend Data</td>
                </tr>

            </table>
            <table className='signature-table'>

                <tr className='signature-type'>
                    <th>Acq</th>
                </tr>

                <tr>
                    <td>Acq Data</td>
                </tr>
                <tr>
                    <td>Acq Data</td>
                </tr>
                <tr>
                    <td>Acq Data</td>
                </tr>
                <tr>
                    <td>Acq Data</td>
                </tr>

            </table>
        </div>
    )
};

export default SignaturesTable;