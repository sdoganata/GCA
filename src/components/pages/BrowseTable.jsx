import React from 'react'
import zip from '../../assets/olaparib.zip'
import dynnet from '../../assets/dynnet.gif'

const data = [
  { cell: "ACH-000681", drug: "Olaparib", zipfile:zip, anim: dynnet }
]


const BrowseTable = () => {
  return (
      <div className='page-div'>
        <h2 className="table-title">Cell-Line/Drug Pair Iterations</h2>
        <table className='browse-table'>
              <thead>
                  <tr>
                      <th>Cell-line</th>
                      <th>Drug</th>
                      <th>Iterations</th>
                      <th>Network</th>
                  </tr>
              </thead>
              <tbody>
                  
              {data.map((val, key) => {
                      return (
                          <tr key={key}>
                              <td>{val.cell}</td>
                              <td>{val.drug}</td>
                              <td><a href={val.zipfile} download>Download ZIP</a></td>
                              <td><img src={val.anim} alt="Dynamic Network" width="100" /></td>
                          </tr>
                      )
                  })}
                  
              </tbody>
          </table>

      </div>
  )
}

export default BrowseTable