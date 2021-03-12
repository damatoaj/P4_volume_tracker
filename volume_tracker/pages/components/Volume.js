import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


export default function Volume (props) {
    const data = props.data
    // console.log(`Volume, ${data} 😭`)

    return (
        <section>
        <h1>Volume Compared to Minutes</h1>
            <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={data.date} >
                    <Label value="Workout Session" offset={10} position="bottom"/>
                </XAxis>
                <YAxis yAxisId="left">
                    <Label value="Volume" angle="-90" position="insideLeft" />
                </YAxis>
                <YAxis yAxisId="right" orientation="right" angle="90">
                    <Label />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="minutes" stroke="#32a852"/>
            </LineChart>
        </section>
    )
}