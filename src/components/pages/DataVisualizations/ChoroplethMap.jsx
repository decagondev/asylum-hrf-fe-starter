import React from 'react';
import Plot from 'react-plotly.js';
import testData from '../../../data/test_data.json';

const capitalizer = word => word.charAt(0).toUpperCase() + word.slice(1);

export const ChoroplethMap = () => {
  const locations = testData[0].citizenshipResults.map(({ citizenship }) => citizenship);
  const z = testData[0].citizenshipResults.map(({ granted }) => granted.toFixed(2));
  const text = locations.map(l => l.toLowerCase()).map(l => l.split(' ').map(capitalizer).join(' '));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Choropleth Map</h2>
      <Plot
        data={[
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: locations,
            z: z,
            text: text,
            colorscale: [
              ['0.0', 'rgb(165,0,38)'],
              ['0.111111111111', 'rgb(215,48,39)'],
              ['0.222222222222', 'rgb(244,109,67)'],
              ['0.333333333333', 'rgb(253,174,97)'],
              ['0.444444444444', 'rgb(254,224,144)'],
              ['0.555555555556', 'rgb(224,243,248)'],
              ['0.666666666667', 'rgb(171,217,233)'],
              ['0.777777777778', 'rgb(116,173,209)'],
              ['0.888888888889', 'rgb(69,117,180)'],
              ['1.0', 'rgb(49,54,149)'],
            ],
            colorbar: {
              title: 'Grant %',
            },
          },
        ]}
        layout={{
          title: 'Static Grant Rates by Country',
          geo: {
            showlakes: true,
            lakecolor: 'rgb(127,205,225)',
          },
          height: 500,
          width: 700,
          text: 'capitalize',
        }}
      />
    </div>
  );
};