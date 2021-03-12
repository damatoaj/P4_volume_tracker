import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

export default function ExerciseTime (props) {
    const data = props.data;
    console.log(data)
    // console.log(data.length)
    // console.log(data.date)

    return (
        <section>
            <h2>Minutes compared to Heart Rate</h2>
            {/* <ResponsiveContainer height="100%" width="100%"> */}
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={data.date} >
                        <Label value="Workout Session" offset={10} position="bottom"/>
                    </XAxis>
                    <YAxis yAxisId="left">
                        <Label value="Minutes" angle="-90"/>
                    </YAxis>
                    <YAxis yAxisId="right" orientation="right" angle="90">
                        <Label />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="minutes" stroke="#32a852" />
                    <Line yAxisId="right" type="monotone" dataKey="heartRate" stroke="#db2b14" />
                </LineChart>
            {/* </ResponsiveContainer> */}
        </section>
    )
}