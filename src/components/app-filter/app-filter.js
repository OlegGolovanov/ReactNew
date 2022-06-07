import {Component} from "react";

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const btnData = [
            {name: "allWroker"},
            {name: "increaseWroker"},
            {name: "oneThousand"},
        ]
        
        const btns = btnData.map(({name, lable})=> {
            const active = this.props.filter === name
            const clazz = active ? "btn-light" : "btn-outline-light"
            return( 
                <button 
                    onClick={() => {this.props.addFilter(name)}}
                    className={`btn ${clazz}`} 
                    type="button"
                    name={name}>
                        {lable}
                </button>
            )
        })


        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }
};

export default AppFilter