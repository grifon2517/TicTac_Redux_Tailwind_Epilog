import {WIN_PATTERNS} from '../Constants/win-patterns'

export const checkWin = (field, currentPlayer) => 
    WIN_PATTERNS.some((winPattern) => 
         winPattern.every((index) => field[index] === currentPlayer),
    )
