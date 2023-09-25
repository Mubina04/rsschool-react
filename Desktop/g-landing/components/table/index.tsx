import React, { FC, useEffect, useState } from 'react'
import Thead from './Thead';
import Tbody from './Tbody';
import TFoot from './TFoot';

import { ITableProps, IThead, theadItem } from './type';
import { getRates } from '@/api/getrates';


const Table: FC<ITableProps> = ({ headers, tbody, tfoot }) => {



  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <Thead headers={headers} />
        <Tbody bodyItem={tbody} />
        <TFoot footItem={tfoot} />
      </table>
    </div>
  )
}

export default Table