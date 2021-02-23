import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries" data-testid="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, temperature, description, icon } = forecast;
        return (
          <ForecastSummary
            date={date}
            temperature={temperature}
            description={description}
            icon={icon}
            key={date}
            onForecastSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};
