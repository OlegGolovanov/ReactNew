import {Component} from "react";

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props)
    }

    render() {       
        return (           
            <div className="btn-group">                
                <button                   
                    className="btn" 
                    type="button"
                    name="all"
                    >Все
                </button>     
                <button
                    className="btn" 
                    type="button"
                    name="inc"
                    >повышение
                </button>
                            
                <button                   
                    className="btn" 
                    type="button"
                    name="one"
                    >1000$
                </button>                
            </div>
        )
    }
};

export default AppFilter