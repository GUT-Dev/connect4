import './Circle.css'
import {FIRST_PLAYER, SECOND_PLAYER} from "../Board";

const Circle = ({status, itemIndex, columnIndex, changeItemCallback}) => {
    let style;

    switch (status) {
        case FIRST_PLAYER :
            style = "circle first-player"
            break;
        case SECOND_PLAYER :
            style = "circle second-player"
            break;
        default:
            style = "circle"
    }

    return (
        <div className={style} onClick={() => changeItemCallback(columnIndex, itemIndex)}>
        </div>
    )
}

export default Circle;