import React from "react"
import "./employers-add-form.css"
import "../app/app"


class EmployersAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: " ",
            salary: " "
        }
    }

    onNewWorker = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   
        
    render(){
        const {name, salary} = this.state
        const {onAddWorker} = this.props
        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input
                    onChange={this.onNewWorker}
                    name="name"
                    value={name}
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    onChange={this.onNewWorker}
                    name='salary'
                    value={salary}
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />
                <button 
                onClick={
                    (e) => onAddWorker(e, this.state)
                    
                }
                type="submit"
                className="btn btn-outline-light">Добавить
                </button>
            </form>
        </div>
        )
    }
}

export default EmployersAddForm