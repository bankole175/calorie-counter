import '../assets/styles/Preloader.css';

export function Preloader() {
    return(
        <div className="preloader">
            <div className="preloader-status">
                <div style={styles.spinnerBorder} className="spinner-border avatar-sm text-primary m-2" role="status"></div>
            </div>
        </div>
    );
}

const styles = {
    spinnerBorder: {
    display: 'inline-block',
    width: '3rem',
    height: '3rem',
    verticalAlign: 'text-bottom',
    border: '0.25rem solid #0d60d8',
    borderRightColor: 'transparent',
    borderRadius: '50%',
    animation: 'spinner-border .75s linear infinite',
    }
}
