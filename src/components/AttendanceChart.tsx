'use client'
import Image from "next/image"
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 58,
        absent: 21,
    },
    {
        name: 'Wed',
        present: 15,
        absent: 45,
    },
    {
        name: 'Thu',
        present: 100,
        absent: 100,
    },
    {
        name: 'Fri',
        present: 85,
        absent: 94,
    },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/*TITLE*/}
            <div className='flex justify-between items-center'>
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            {/*CHART*/}
            <ResponsiveContainer width="100%" height="96%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false}/>
                    <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
                    <Legend align="left" verticalAlign="top"
                            wrapperStyle={{paddingTop: "10px", paddingBottom: "40px"}}/>
                    <Bar dataKey="present" fill="#FAE27C" legendType={'circle'} radius={[20, 20, 0, 0]}/>
                    <Bar dataKey="absent" fill="#C3EBFA" legendType={'circle'} radius={[20, 20, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default AttendanceChart;
