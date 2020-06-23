import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Reptiles', 'Birds', 'Cats',
           'Dogs', 'Insects'],
  datasets: [
      {
      label: 'Votes',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 60]
    }
  ]
}

class Graph extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Favorite Pets',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
export default Graph