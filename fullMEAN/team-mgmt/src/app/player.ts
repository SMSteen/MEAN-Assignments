let player_count: number = 9;

export class Player {
    _id: string;
    name: string;
    position: string;
    status: {
        game1: string;
        game2: string;
        game3: string;
    }
    
    //this is temporary until database is connected
    constructor() {
        // player_count++;
        // this.id = player_count;
        this.status = {
            game1: 'undecided',
            game2: 'undecided',
            game3: 'undecided',
        };
    }
}