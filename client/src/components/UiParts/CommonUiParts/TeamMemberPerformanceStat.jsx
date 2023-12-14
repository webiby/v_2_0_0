import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const Performance = [
    {
        name: 'Difference',
        uv: 100,
        pv: 2400,
        fill: '#fff0',
    },
    {
        name: 'Performance',
        uv: 50,
        pv: 2400,
        fill: '#f11a00',
    },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

function TeamMemberPerformanceStat() {
  return (
    <div className="h-40 w-40 justify-center flex-row">
        <span className='w-auto text-center text-sm font-bold mr-8 text-[#b53a2c]'>{Performance[1].name}: {Performance[1].uv}%</span>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="40%" cy="40%" innerRadius="40%" outerRadius="100%" barSize={20} data={Performance}>
                <RadialBar
                minAngle={15}
                label={{ position: 'bottom', fill: '#fff0' }}
                // background
                clockWise
                dataKey="uv"
                />
                {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
            </RadialBarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default TeamMemberPerformanceStat;
