import React, { Component} from 'react';
export default class GifList extends Component {

    render() {
        return(
            <ul className="list-group">
            {this.props.gifs.map(listitem => (
             <li className="list-group-item list-group-item-primary">
                  <img 
                    src={`${listitem}`}
                    alt="new"
                    />
           </li>
            ))}
        </ul>

        )
    }
}