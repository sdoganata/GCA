import React from 'react'
import { Link } from 'react-router-dom';

const TableLinks = () => {
  return (
    <div className='page-div'>
        <Link to='/browsetable' className='hero-link'>Cell-Line/Drug Pair Table</Link>
        <Link to='/celllinetable' className='hero-link'>Cell-Line Table</Link>
        <Link to='/drugtable' className='hero-link'>Drug Table</Link>
        <Link to='/pdxtable' className='hero-link'>PDX Table</Link>
    </div>
  )
}

export default TableLinks