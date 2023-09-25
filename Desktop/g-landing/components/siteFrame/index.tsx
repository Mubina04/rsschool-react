import React, { FC, ReactElement, ReactNode } from 'react';

interface ISiteFrame {
    children: ReactNode | ReactElement
}

const SiteFrame: FC<ISiteFrame> = ({children}) => {
    return (
        
        <div>{children}</div>
    )
}

export default SiteFrame;