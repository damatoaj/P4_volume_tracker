import Paper from '@material-ui/core/Paper';
import { Chart} from '@devexpress/dx-react-chart-material-ui';
import { LineSeries, ValueAxis, ArgumentAxis } from '@devexpress/dx-react-chart';

export default function ExerciseTime (props) {
    const data = props.data;
    console.log(data)

    return (
        <Paper>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries valueField="value" argumentField="argument"/>
            </Chart>
        </Paper>
    )
}