import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Capture from './Capture';
const data = [
    { name: '지표1', v1: 15000, v2: 9000 },
    { name: '지표2', v1: 14000, v2: 8000 },
    { name: '지표3', v1: 13000, v2: 10000 },
    { name: '지표4', v1: 12000, v2: 7000 },
    { name: '지표5', v1: 11000, v2: 10000 },
];

const Charts = () => {
    return (
        <div className='chart-box'>
            <BarChart
                className='barChart'
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5,
                }}
            >
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='v1' fill='#cf0000' />
                <Bar dataKey='v2' fill='#00b200' />
            </BarChart>
            <RadarChart className='radarChart' width={500} height={300} outerRadius={100} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey='name' />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name='a' dataKey={'v1'} stroke='#000' fill='#8824d7' fillOpacity={0.7} />
                <Radar name='b' dataKey={'v2'} stroke='#000' fill='#74ac13' fillOpacity={0.7} />
            </RadarChart>

            <Capture />
        </div>
    );
};

export default Charts;
