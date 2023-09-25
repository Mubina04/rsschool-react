import React, {FC} from 'react';
import {ITFoot, tfootItem} from './type';

const TFoot: FC<ITFoot> = ({footItem}) => {

	return (
		<tfoot className='text-lg'>
		{footItem?.map((items: any, ind: number) => {
			return (
				<tr key={ind} className='border border-zinc-300 p-4'>
					{items?.map((td: any, index: number) => {
						return (
							<th
								key={index}
								className='p-4 border border-zinc-300'>
								{td}
							</th>
						)
					})}
				</tr>
			)
		})}
		</tfoot>
	)
}

export default TFoot;
