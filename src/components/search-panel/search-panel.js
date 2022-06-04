import { Component } from "react";

import "./search-panel.css"


class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }   

    changeTerm = (e) => {
        let term = e.target.value
        this.setState({
            term:term
        })

        this.props.changeTerm(term)
    }
    render() {
        return (
            <input 
                value = {this.state.term}
                onChange={this.changeTerm}
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"            
                />
        )
    }
}

export default SearchPanel;