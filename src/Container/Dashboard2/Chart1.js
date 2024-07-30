import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const Chart1 = () => {
    const data = [
        {
            type: '2000',
            sales: 38,
        },
        {
            type: '2001',
            sales: 52,
        },
        {
            type: '2002',
            sales: 61,
        },
        {
            type: '2003',
            sales: 145,
        },
        {
            type: '2004',
            sales: 48,
        },
        {
            type: '2005',
            sales: 38,
        },
        {
            type: '2006',
            sales: 38,
        },
        {
            type: '2007',
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        style: { width: "55%", height: "100%", float: "right" },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,

            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '2004',
            },
            sales: {
                alias: '67',
            },
        },
    };
    return <Column {...config} />;
};

export default Chart1
