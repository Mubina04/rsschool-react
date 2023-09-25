import { cardStyles, homeStyles } from '@/styles';
import { t } from 'i18next';
import Link from 'next/link';
import React, { FC } from 'react'
interface ICard {
    icon_source?: string;
    icon_title?: string;
    card_title?: string;
    rates_link?: string;
    card_id?: string;
    card_links?: string

}
const Card: FC<ICard> = ({ icon_source, icon_title, card_title, card_id, rates_link, card_links }) => {

    return (
        <div className={cardStyles.card} id={card_id}>
            <img className='max-w-[82px]' src={icon_source} alt={icon_title} />
            <p className='text-lg font-bold mt-11'>{card_title}</p>
            <Link href={`${rates_link}`}
                className={cardStyles.card_link}>
                {card_links}
            </Link>
        </div>
    )
}

export default Card
    ;
