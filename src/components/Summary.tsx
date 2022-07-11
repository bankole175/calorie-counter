import {GiForkKnifeSpoon} from "react-icons/all";

export function Summary() {
    return(
        <div className="col-md-2 me-4 mb-1" style={styles.allCalories}>
            <div className="d-flex align-items-center">
                <GiForkKnifeSpoon size="40" className="me-4" />
                <div className="">
                    <p className="mb-1" style={styles.cardTitle}>Total Calories for the month</p>
                    <h2 className="">23.00</h2>
                </div>
            </div>
        </div>

    );
}
const styles = {
    cardTitle: {
        color: 'rgb(255, 255, 255)',
        opacity: '0.75',
        paddingTop: '5px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    allCalories: {
        backgroundColor: 'rgb(13, 96, 216)',
        backgroundImage: 'url(images/bg-pattern.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        color: '#fff',
        padding: '3rem 2rem 3rem 1rem',
        borderRadius: '.5rem'
    },
} as const

