import './Board.css'
import {useEffect, useState} from "react";
import Column from "./gameElements/Column";

export const EMPTY = 0;
export const FIRST_PLAYER = 1;
export const SECOND_PLAYER = 2;

const DEFAULT_CONTENT = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
];

const Board = () => {

  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [currentPlayer, setCurrentPlayer] = useState(FIRST_PLAYER);
  let counter = 0;

  const checkIfCanChange = (columnIndex, itemIndex) => {
      return !(itemIndex > 0 && content[columnIndex][itemIndex - 1] === EMPTY);
  }

  const checkIfWin = () => {
      for (let l = 0; l < content.length; l++) {
          const column = content[l];

          for (let i = 0; i < column.length - 3; i++) {
              let player = column[i];

              if(player !== EMPTY &&
                  column[i] === column[i + 1] &&
                  column[i] === column[i + 2] &&
                  column[i] === column[i + 3]
              ) {
                  return player;
              }
          }
      }

      for (let l = 0; l < content[0].length; l++) {
          for (let i = 0; i < content.length - 3; i++) {
              let player = content[i][l];

              if(player !== EMPTY &&
                  content[i][l] === content[i + 1][l] &&
                  content[i][l] === content[i + 2][l] &&
                  content[i][l] === content[i + 3][l]
              ) {
                  return player;
              }
          }
      }

      for (let l = 0; l < content[0].length - 3; l++) {
          for (let i = 0; i < content.length - 3; i++) {
              let player = content[i][l];

              if(player !== EMPTY &&
                  content[i][l] === content[i + 1][l + 1] &&
                  content[i][l] === content[i + 2][l + 2] &&
                  content[i][l] === content[i + 3][l + 3]
              ) {
                  return player;
              }
          }
      }
      return EMPTY;
  }

  const changeItem = (columnIndex, itemIndex) => {
      if(content[columnIndex][itemIndex] === EMPTY && checkIfCanChange(columnIndex, itemIndex)) {
          let updatedContent = content;
          updatedContent[columnIndex][itemIndex] = currentPlayer;

          setContent(updatedContent);

          const winner = checkIfWin();

          if(checkIfWin() !== EMPTY) {
              alert(winner + " player is winner" );
          }

          setCurrentPlayer(currentPlayer === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER)
      }
  }

  return (
      <div className={"board-container"}>
          <div className={"bard-game-place"}>
              {
                  content.map(row => {
                  return <Column columArray={row} column={counter++} changeItemCallback={changeItem}/>
              })}
          </div>
          <div className={currentPlayer === FIRST_PLAYER ? "board-description first-player" : "board-description second-player"}>
              <p>Current player: {currentPlayer}</p>
          </div>
      </div>
  )
}

export default Board;