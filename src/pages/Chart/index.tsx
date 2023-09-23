import React, { FC } from 'react';
import Charts from '@component/Charts';
import Content from '@pages/Layout/content';

const ChartPage: FC = () => {
    return (
        <>
            <Content title='차트페이지'>
                <Charts />
            </Content>
        </>
    );
};

export default ChartPage;
