type CheckWinner = (board: string[][]) => string | null

export const checkWinner:CheckWinner = (board: string[][]):string => {

    for(let i=0;i<3;i++){
        
        let qtyXVertical=0
        let qtyOVertical=0
        let qtyOHorizontal=0
        let qtyXHorizontal=0

        for(let j=0;j<3;j++){

    
            if(board[i][j]==='X'){
                qtyXHorizontal+=1
            }
            if(board[i][j]==='O'){
                qtyOHorizontal+=1
            }
            if(board[j][i]==='X'){
                qtyXVertical+=1
            }
            if(board[j][i]==='O'){
                qtyOVertical+=1
            }

            if(qtyXHorizontal===3) return "X"
            if(qtyOHorizontal===3) return "O"
            if(qtyXVertical===3) return "X"
            if(qtyOVertical===3) return "O"
        }       
    }


    if(board[0][0]==='X' && board[1][1]==='X' && board[2][2]==='X')return "X"
    if(board[0][0]==='O' && board[1][1]==='O' && board[2][2]==='O')return "O"

    return ''
}

let exampleBoard = [
  ["O", "X", "X"],
  ["O", "O", "X"],
  ["X", "O", "O"]
]

console.log(checkWinner(exampleBoard))