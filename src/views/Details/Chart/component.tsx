// @ts-nocheck
import React from 'react';
import { LineChart, Line } from 'recharts';

import {useTickerChart} from "../../../hooks/useTickerChart";

interface Props {
  symbol: string;
}

// FIX-ME: @ts-nocheck
const ChartComponent = ({ symbol }: Props) => {
  const { results = [] } = useTickerChart(symbol);
  const data = results.map(e => ({
    value: e.c
  }));

  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="value" stroke="#e51616" strokeWidth={3} dot={false} />
    </LineChart>
  );
}

export default ChartComponent;