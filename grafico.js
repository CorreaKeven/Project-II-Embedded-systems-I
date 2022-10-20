const dados_Temperatura_Umidade = {
  type: 'line',
  options: {
    scales: {
      y: {
        ticks: { color: 'white'},
        grid: {
          borderDash:[4,4],
          color: '#302d2d'

        }
      },
      x: { ticks: { color: 'white'},
      grid: {
        borderDash:[4,4],
        color: '#302d2d'
        }
      }
    }
  },
  data:{
      labels: [],
      datasets:[
      {
              tension: 0.4,
              label: "Temperatura (°C)",
              borderColor: '#4bea02',
              data: []
          },  
          
          {
            tension: 0.4,
            label: "Umidade (%)",
            borderColor: '#fc9700',
            data: []
        },

      ]
  }
}

const dados_Temperatura = {
type: 'line',
options: {
  scales: {
    y: {
      ticks: { color: 'white'},
      grid: {
        borderDash:[4,4],
        color: '#302d2d'

      }
    },
    x: { ticks: { color: 'white'},
    grid: {
      borderDash:[4,4],
      color: '#302d2d'
      }
    }
  }
},
data:{
    labels: [],
    datasets:[
    {
            tension: 0.4,
            label: "Temperatura (°C)",
            borderColor: '#4bea02',
            data: []
        },  
    ]
}
}




const dados_Umidade = {
  type: 'line',
  options: {
    scales: {
      y: { ticks: { color: 'white'},
      grid: {
        borderDash:[4,4],
        color: '#302d2d'
      }
     },
      x: { ticks: { color: 'white'},
      grid: {
        borderDash:[4,4],
        color: '#302d2d'
      }
     }
    }
  },
  data:{
      labels: [],
      datasets:[
      {
              tension: 0.4,
              label: "Umidade (%)",
              borderColor: '#fc9700',
              data: []
          },



      ]
  }

}
