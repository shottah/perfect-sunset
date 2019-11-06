import React from 'react';
import PropTypes from 'prop-types';

const WeatherChart = (props) => {

    const tableData = Object.keys(props.data).map((e, k) =>
        <tr key={k}>
            <td>
                {e}
            </td>
            <td>
                {props.data[e]}
            </td>
        </tr>
    );

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
};

WeatherChart.propTypes = {
    data: PropTypes.shape({
        wind: PropTypes.number,
        clouds: PropTypes.number,
        humidity: PropTypes.number,
        locale: PropTypes.string,
        date: PropTypes.string
    }).isRequired,
};

export default WeatherChart;