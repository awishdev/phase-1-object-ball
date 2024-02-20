function gameObject(){
    const theObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            player: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            player: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "Desanga Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return theObject;
}
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
function numPointsScored(name){
    let game = gameObject();
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(key == name){
                    return data[key].points;
                }
            }
        }
    }
}

function shoeSize(name){
    let game = gameObject();
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(key == name){
                    return data[key].shoe;
                }
            }
        }
    }
}

function teamColors(name){
    let game = gameObject();
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if(teamObj.teamName == name)
            {
                return teamObj.colors;
            }
        }
    }
}

function teamNames(){
    let game = gameObject();

    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(inputTeam){
    let game = gameObject();
    const numbersArray = [];
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            
            if(teamObj.teamName == inputTeam)
            {
                let data = teamObj.player;
                for (let key in data) {
                    numbersArray.push(data[key].number);
                }
                return numbersArray;
            }

        }
    }
    
}

function playerStats(name){
    let game = gameObject();
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(key == name){
                    return data[key];
                }
            }
        }
    }
}

function bigShoeRebounds(){
    let game = gameObject();
    let shoeChecker = {shoe: 1};
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                
                if(data[key].shoe > shoeChecker["shoe"]){
                    shoeChecker = data[key];
                }
                
            }
        }
    }
    return shoeChecker.rebounds;
}

function mostPointsScored(){
    let game = gameObject();
    let pointsChecker = {"bob": {points: 1}};
    let runOnce = 0;
    let stringHolder = "loremipsum";
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(runOnce == 0){
                    pointsChecker = {[key]: data[key]};
                    runOnce += 1;
                }
                else if(data[key].points > pointsChecker[Object.keys(pointsChecker)].points){
                    pointsChecker = {[key]: data[key]};
                    stringHolder = key;

                }
                
            }
        }
    }
    return stringHolder;

}

function winningTeam(){
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if(teamKey == "player"){
                let data = teamObj.player;
                for (let key in data) {
                    
                    if(gameKey == "home"){
                        homePoints += data[key].points;
                        //debugger;
                    }
                    else if(gameKey == "away"){
                        awayPoints += data[key].points;
                       // debugger;
                    }
                    
                    
                }
             }
        }
    }
    if(homePoints > awayPoints){
        return game.home.teamName;
    }
    else if(awayPoints > homePoints){
        return game.away.teamName;
    }
    else{
        return "Tie game!";
    }

}

function playerWithLongestName(){
    let game = gameObject();
    let nameChecker = "bob";
    let runOnce = 0;
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(runOnce == 0){
                    nameChecker = key;
                    runOnce += 1;
                }
                else if(key.length > nameChecker.length){
                    nameChecker = key;

                }
                
            }
        }
    }
    return nameChecker;

}

function doesLongNameStealATon(){
    let game = gameObject();
    let nameChecker = "bob";
    let runOnce = 0;
    for (let gameKey in game) {

        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                if(runOnce == 0){
                    nameChecker = key;
                    runOnce += 1;
                }
                else if(key.length > nameChecker.length){
                    nameChecker = key;

                }
                
            }
        }
    }
    let stealChecker = {steals: 1};
    let stringHolder = "bob";
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.player;
            for (let key in data) {
                
                if(data[key].steals > stealChecker["steals"]){
                    stealChecker = data[key];
                    stringHolder = key;
                }
                
            }
        }
    }

    return (nameChecker === stringHolder);
}