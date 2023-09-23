import React, { FC } from 'react';
import Counter from '@component/Counter';
import Content from '@pages/Layout/content';

const CounterPage: FC = () => {
    return (
        <>
            <Content title='카운터 페이지'>
                <Counter />
            </Content>
        </>
    );
};

export default CounterPage;
