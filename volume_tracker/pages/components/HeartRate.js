import Paper from '@material-ui/core/Paper';
import { Chart} from '@devexpress/dx-react-chart-material-ui';
import { LineSeries, ValueAxis, ArgumentAxis } from '@devexpress/dx-react-chart';

export default function HeartRate(props) {
    const data = props.data
    console.log(props.data)
    console.log(`Heart Rate, ${data} 🤬`)
    return (
        <h1>Heart Rate Graph Here</h1>

    )
};