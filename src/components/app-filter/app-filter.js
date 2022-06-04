import {Component} from "react";

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props)
    }
    
    onChangeClass = (e) => {
        document.querySelectorAll('button').forEach(item => {
            item.classList.remove("btn-light");
            item.classList.add("btn-outline-light");
        });;
        if(e.target.matches(".btn-light")) {
            e.target.classList.add("btn-outline-light");
            e.target.classList.remove("btn-light");
        } else if(e.target.matches(".btn-outline-light")) {
            e.target.classList.add("btn-light");
            e.target.classList.remove("btn-outline-light");
        }
        

    }
    
    render() {
        return (
            <div className="btn-group">                
                <button 
                    onClick={this.onChangeClass}
                    className="btn btn-light" 
                    type="button">Все сотрудники
                </button>
                            
                <button 
                    onClick={this.onChangeClass}
                    className="btn btn-outline-light" 
                    type="button">Сотрудники на повышение
                </button>
                            
                <button 
                    onClick={this.onChangeClass}
                    className="btn btn-outline-light" 
                    type="button">З/п больше 1000$
                </button>
                
            </div>
        )
    }
} ;

export default AppFilter