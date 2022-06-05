import "./app-info.css"

const AppInfo = (props) => {
    const {dataLength, sumPrize} = props  

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании №</h1>
            <h2>Общее число сотрудников {dataLength}</h2>
            <h2>Премию получат: {sumPrize}</h2>
        </div>
    )
};

export default AppInfo