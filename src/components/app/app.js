import { Component} from "react";

import "./app.css";
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployersList from "../employers-list/employers-list"
import EmployersAddForm from "../employers-add-form/employers-add-form"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
                data: [
                    {name: "Oleg Golovkin", salary: "1200", increase: false, stars: false, id: 1},
                    {name: "Vladimir Golovkin", salary: "1300", increase: false, stars: false, id: 2},
                    {name: "Nadeshda Golovkina", salary: "1400", increase: false, stars: false, id: 3}
                ],
                term: ""
        }
        this.id = 4
    }  
    
    onDelete=(id)=> {
        this.setState(({data}) => ({
            data: data.filter(item=> item.id !== id)          
        }))            
    }

    addWorker = (e, newWorker) => {
        e.preventDefault(); 
        const copyState = this.state.data
        const worker = {
            name: newWorker.name,
            salary: newWorker.salary,
            increase: false,
            stars: false,
            id: ++this.id  
        }; 
        copyState.push(worker);
        this.setState({
            data: copyState
        })
    }

    toggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}                 
                }
                return item          
            })       
        }))
    }

    // Выведение общего колличества сотрудников,
    // у которых свойство stars не false
    sumPrize = (data) => {
        const all = data.filter(item=> {
            return item.stars !==false
        })
        return all.length
    }

    // Поиск сотрудников
    searchEmp = (data, term) => {
        // Если ничего не введено в объект
        // term, то возвращаем пустой объект
        if (term.length === 0) {
            return data
        }
        return data.filter(item=> {
            return item.name.indexOf(term) > -1
        })        
    }

    changeTerm = (term) => {
        this.setState({term:term})
    }

    // Фильтр сотрудников по премии
    filterWroker = () => {
        return this.state.data.filter(item=> {
            return item.increase === true
        })
    }

    

    render(){ 
        const {data, term} = this.state 
        const visibleEmp = this.searchEmp(data, term)
        const visibleFilterWroker = this.filterWroker
        
        return (            
            <div className="app">
                <AppInfo 
                data = {data}
                sumPrize = {this.sumPrize}/>
                <div className="search-panel">
                    <SearchPanel
                    changeTerm = {this.changeTerm}
                    />
                    <AppFilter
                    filterWroker = {this.filterWroker}
                    />                        
                </div>
                <EmployersList 
                data = {
                    []? visibleEmp : visibleFilterWroker
                }
                onDelete = {this.onDelete}
                toggleProp = {this.toggleProp}
                toggleStars = {this.toggleStars}
                />       
                <EmployersAddForm 
                onAddWorker = {(e, newWorker) => {this.addWorker(e, newWorker)}}
                />       
            </div>
        );
    }
}

export default App