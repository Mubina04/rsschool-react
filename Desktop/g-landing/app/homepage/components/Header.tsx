import { Button } from '@/components'
import { homeStyles } from '@/styles'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = ({ dir }: any) => {
  const { t } = useTranslation();

  return (
    <div dir={dir} className={homeStyles.header}>
      <div className={`container ${homeStyles.header__wrapper}`}>
        <div className={homeStyles.header_left_side}>
          <h1>{t('TITLE')}</h1>
          <p>{t('HOME.HEADER.TEXT')}</p>
          <button className={homeStyles.book_btn}> <Link href="#contacts">{t('HOME.HEADER.BUTTON')}</Link></button>
        </div>
        <div className={homeStyles.header_right_side}>
          <img className='w-full h-full' src="/images/woman.png" alt="a woman " />
        </div>
      </div>
    </div>
  )
}

export default Header;