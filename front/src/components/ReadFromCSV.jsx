import React,{useState} from 'react';
import Papa from 'papaparse';   

const ReadFromCSV = () => {

    const [data,setData] =useState([])
    const [columnArr,setColunmArr] =useState([])
    const [values,setValues] =useState([])

    const handleFile = (e) => {
        Papa.parse(e.target.files[0] , {
            header:true,
            skipEmptyLines:true,
            complete: (result) => {
                const columnArr =[];
                const valuesArr = [];

                result.data.map(d => {
                    columnArr.push(Object.keys(d));
                    valuesArr.push(Object.values(d))
                })
                setData(result.data);
                setColunmArr(columnArr[0])
                setValues(valuesArr)
            }
        })
    }

  return (
    <div >
        <div className='input-group mb-3'>
         <div className='custom-file btn-group'>
             <input type="file" name='file' accept='.csv' className='btn btn-light'  onChange={handleFile} /> <br />
         </div>
        </div>
        
        <div>
        <table className='table table-striped table-hover  table-sm'>
            <thead className='thead-dark'>
                <tr>
                    {
                        columnArr.map(col => (
                            <th>{col}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    values.map(val => (
                        <tr>
                            {val.map(v => (
                                <td>{v}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ReadFromCSV