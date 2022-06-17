import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi data dalam state
    this.state = {
      count: 0
    };

    /*  setState() merupakan fungsi yang digunakan khusus untuk mengubah nilai state di dalam class component. Fungsi inilah yang sebenarnya memicu pemanggilan fungsi render() ketika data di dalam state berubah. Fungsi setState() dapat menerima dua tipe parameter, yaitu objek dan fungsi yang mengembalikan objek 
        
    1.parameter berupa objek
      #reset the count value
        this.setState({
          count: 0
        });
    
    2.parameter berupa fungsi
      #increase the count value
    */
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      }
    });

  }

  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <p>{this.state.count}</p>
      </div>
    );
  }
}