import Circle from "./Сircle";

const Column = ({columArray, column, changeItemCallback}) => {
    let counter = 0;

    return (
        <div className={"board-column"}>
            {columArray.map(el => {
                return <Circle status={el} itemIndex={counter++} columnIndex={column} changeItemCallback={changeItemCallback}/>
            })}
        </div>
    )
}

export default Column;