import React, { Component} from 'react';

export default class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
          search: "search",
        };
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        if (this.state.search){
        this.props.handleSearch(this.state.search)
        }
      } 
    
    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
            <div>
              <label>
                GifSearch
                <input id="search" name="search" type="text" 
                onChange={event => this.handleChange(event)}
                />
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )
    }
}