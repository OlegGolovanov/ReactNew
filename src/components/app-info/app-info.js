import "./app-info.css"

const AppInfo = (props) => {
    const {data, sumPrize} = props  

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании №</h1>
            <h2>Общее число сотрудников {data.length}</h2>
            <h2>Премию получат: {sumPrize(data)}</h2>
        </div>
    )
};

export default AppInfo