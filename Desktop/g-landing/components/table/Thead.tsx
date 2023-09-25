import React, { FC } from 'react';

import { IThead, theadItem } from './type';


const Thead:FC<IThead> = ({headers}) => {

    const theadRows =[
        headers.theads.filter(t=> t.rowIndex === 0),
        headers.theads.filter(t=> t.rowIndex === 1)
    ];

  return (
    <thead className='text-lg'>
            {theadRows?.map((items: any, ind: number) => {
                return (
                    <tr key={ind} className='border border-zinc-300 p-4'>
                        {items?.map((th: theadItem, index: number) => {
                            return (
                                <th
                                    key={th.th_name}
                                    colSpan={th.colSpan}
                                    rowSpan={th.rowSpan}
                                    className='p-4 border border-zinc-300'>
                                        {th.th_name}
                                </th>
                            )
                        })}
                    </tr>
                )
            })}
        </thead>
  )
}

export default Thead
