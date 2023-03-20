import React from 'react';
// import { students } from './TableSearch';

const ConvertToCSV = ({students}) => {

    const download = (data) => {
        const blob = new Blob([data], { type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href',url);
        a.setAttribute('download' , 'download.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a)
    }

    const objectToCSV = (data) => {
        const csvRows = [];
 
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));
        
        for(const row of data){
            const values = headers.map(header => {
                return `${row[header]}`
            });
            csvRows.push(values.join(','));
        }
        return csvRows.join('\n')
    };

const handleCSV = async () => {
    const csvData = objectToCSV(students);
    download(csvData);
}

  return (
    <div>
        <button className='btn btn-primary' onClick={handleCSV}>Download</button>
    </div>
  )
}

export default ConvertToCSV