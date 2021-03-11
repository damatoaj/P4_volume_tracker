import Paper from '@material-ui/core/Paper';
import { Chart} from '@devexpress/dx-react-chart-material-ui';
import { LineSeries, ValueAxis, ArgumentAxis } from '@devexpress/dx-react-chart';

export default function Volume (props) {
    const data = props.data
    console.log(`Volume, ${data} 😭`)

    return (
        <h1>this is the volume graph</h1>
    )
}