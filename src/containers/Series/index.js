import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList'
class Series extends Component {
    state = {
        series :[]
      };
    componentDidMount() {
      const setSeries = ['Vikings','Game of Thrones'];
    
      setTimeout(() => {
        this.setState({ series: setSeries});
      }, 2000);
    };

    onSeriesChange = e => {
        console.log(e);
        console.log(e.target.value);
    }

    render() {
        return (
            <div> The length of series : {this.state.series.length} 
            <div>
                <input type= "text" onChange = {this.onSeriesChange} />
            </div>
            <SeriesList list = {this.state.series}/>
            </div>
            
        );
    }
}

export default Series;