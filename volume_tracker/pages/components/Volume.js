import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


export default function Volume (props) {
    const data = props.data
    // console.log(`Volume, ${data} 😭`)

    return (
        <section>
        <h1>Volume Compared to Minutes</h1>
            <ResponsiveContainer height="100%" width="100%">
                <LineChart 
                    width={730} 
                    height={250} 
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    id="volume-graph"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={data.date} >
                        <Label value="Workout Session" position="top" id="label"/>
                    </XAxis>
                    <YAxis yAxisId="left" type="number" >
                        <Label 
                            value="Volume" 
                            angle="-90" 
                            position="left"
                        />
                    </YAxis>
                    <YAxis yAxisId="right" orientation="right" angle="90">
                        <Label 
                            value="minutes" 
                            angle="90" 
                            position="right" 
                        />
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top"/>
                    <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="minutes" stroke="#32a852"/>
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}