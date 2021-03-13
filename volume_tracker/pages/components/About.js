export default function About() {
    return(
        <div className="card">
            <section>
                <button type="button" className="btn btn-info btn-lg" data-toggle="collapse" data-target="#about">Why Track Volume </button>
                <div className="collapse" id="#about">
                    Volume is one of the best ways to measure exercise intensity for aerobic sports, regardless of disciple.
                    Whether rowing, skiing, running or weightlifting, you can measure the intensity of the workout by multiplying heart rate and time (in minutes).
                    Generally, the volume of a weekly workout routine should not increase by more than 5% otherwise you can risk overtraining and injury.
                    Whether doing lots of cross training, or different modalities of interval/distance training, volume will help you understand how you're improving and how hard you're training.
                </div>
            </section>
        </div>
    )
}