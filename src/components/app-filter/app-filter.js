import {Component} from "react";

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props)
    }
    
    onChangeClassFilter = (e, filter) => {
            
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
            this.props.addFilter(filter);

            
        
    }

    
    
    render() {
        return (
            <div className="btn-group">                
                <button 
                    onClick={
                        (e) => {
                        this.onChangeClassFilter(e, e.currentTarget.getAttribute("data-filter"))}                  
                    }
                    className="btn btn-light" 
                    type="button"
                    data-filter="allWroker"
                    >Все сотрудники
                </button>
                            
                <button 
                     onClick={
                        (e) => {
                        this.onChangeClassFilter(e, e.currentTarget.getAttribute("data-filter"))}                  
                    }
                    className="btn btn-outline-light" 
                    type="button"
                    data-filter="increaseWroker"
                    >Сотрудники на повышение
                </button>
                            
                <button 
                    onClick={
                        (e) => {
                        this.onChangeClassFilter(e, e.currentTarget.getAttribute("data-filter"))}                  
                    }
                    className="btn btn-outline-light" 
                    type="button"
                    data-filter="oneThousand"
                    >З/п больше 1000$
                </button>
                
            </div>
        )
    }
} ;

export default AppFilter