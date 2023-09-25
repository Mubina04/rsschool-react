import React from 'react'
import { Header, Groups, AboutUs, Services, Contacts, News, } from './components'
import { homeStyles } from '@/styles'
import { Slider } from '@/components'

function HomePage({ dataNews }: any) {

    return (
        <>
            <Header />
            <div dir='dir' className={homeStyles.sections_wrapper}>
                <Groups />
                <AboutUs />
                <Services />
                <Contacts />
                <News />
                <Slider data={dataNews} />
            </div>
        </>
    )
}

export default HomePage
