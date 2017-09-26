class TicTacToe {
    constructor() {
        this.player = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]]; 
        this.winer = null;
        this.ticORtac = 1;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.player;
            this.ticORtac++ ;
            if( this.ticORtac % 2 == 0){
                this.player = "o";
            } else {
                this.player = "x";
            }
            return true;
        }
        return false;
    }

    isFinished() {
        if (!this.winer) {
            this.getWinner();
        }
        if (this.winer || this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getWinner() {
        for(let i = 0; i < 3; i++){ 
            if ( (this.field[i][0] == this.field[i][1]) &&
                 (this.field[i][1] == this.field[i][2]) &&
                  this.field[i][0] != null ) 
                return this.winer = this.field[i][0];
            
            if ( (this.field[0][i] == this.field[1][i]) &&
                (this.field[1][i] == this.field[2][i]) &&
                 this.field[0][i] != null ) 
                return this.winer = this.field[0][i];
        }

        if ( (this.field[0][0] == this.field[1][1]) &&
             (this.field[1][1] == this.field[2][2]) &&
              this.field[2][2] != null ) 
            return this.winer = this.field[0][0];

        if ( (this.field[0][2] == this.field[1][1]) &&
             (this.field[1][1] == this.field[2][0]) &&
              this.field[2][0] != null ) 
            return this.winer = this.field[2][0];

        return this.winer;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if ( this.field[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null ) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex < 3 && colIndex < 3) {
            return this.field[rowIndex][colIndex];
        }
        return null;
    }
}

module.exports = TicTacToe;
