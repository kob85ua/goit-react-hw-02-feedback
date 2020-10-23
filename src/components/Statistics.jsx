import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive persentage: {positivePercentage}%</li>
  </ul>
);

export default Statistics;
