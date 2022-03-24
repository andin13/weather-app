import {Component} from "react";
import WeatherContainer from "./components/Weather/WeatherContainer";
import connect from "react-redux/lib/connect/connect";
import {requestTemperatureData} from "./redux/weather-reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.requestTemperatureData()
    }

    render() {
        return (<>
                {this.props.initialized ? <WeatherContainer/> : <Preloader/>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.weather.initialized
})

export default connect(mapStateToProps, {requestTemperatureData})(App);
