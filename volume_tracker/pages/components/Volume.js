import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


export default function Volume (props) {
    const data = props.data
    // console.log(`Volume, ${data} 😭`)

    return (
        <section>
        <h1>this is the volume graph</h1>
            <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={data.date} >
                    <Label value="Workout Session" offset={10} position="bottom"/>
                </XAxis>
                <YAxis >
                    <Label value="Volume" angle="-90"/>
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="volume" stroke="#8884d8" />
            </LineChart>
        </section>
    )
}