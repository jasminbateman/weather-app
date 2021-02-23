import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description, onForecastSelect } = props;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{`${description}`}</div>
      <div className="forecast-summaries__button">
        <button type="button" onClick={() => onForecastSelect(date)}>
          More details
        </button>
      </div>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};
