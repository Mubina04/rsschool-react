import React, { FC } from 'react';

import { ITBody, tbodyItem } from './type';


const TBody:FC<ITBody> = ({bodyItem}) => {

  return (
    <tbody className='text-lg table-auto'>
            {bodyItem?.map((items: any, ind: number) => {
                return (
                    <tr key={ind} className='border border-zinc-300 p-4'>
                        {items?.map((td: any, index: number) => {
                            return (
                                <td
                                    key={index++}
                                    className='p-4 border border-zinc-300'>
                                        {td}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
  )
}

export default TBody;
