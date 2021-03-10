
import React, { Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    state = {
        gifsFull: [],
        gifs: []
    }
    
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=shark&api_key=dc6zaTOxFJmzC&rating=g')
          .then(response => response.json())
          .then(data => {
            this.setState({
              gifsFull: data.data
            })
            this.setState({gifs: this.state.gifsFull.map(gif => gif.images.original.url)})
        })
      }

      handleSearch = (input) => {
          console.log(input)
        const url = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC&rating=g'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
              gifsFull: data.data
            })
            this.setState({gifs: this.state.gifsFull.map(gif => gif.images.original.url)})
        })
    }

    

    render() {
        return(
            <div>
                <GifSearch handleSearch={this.handleSearch}/>
                <GifList  gifs={this.state.gifs} /> 
                </div>
        )
    }
}