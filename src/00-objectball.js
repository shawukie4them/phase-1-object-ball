function gameObject(){
    return{
        home:{
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players:{
                'Alan Anderson':{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        
        away:{
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien':{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon':{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject());

//function to get the number of points scored by a player.
function numPointsScored(playerName){
    var game = gameObject();
    for(var team in game){
        var players = game[team].players;
        if(players[playerName]){
            return players[playerName].points;
        }
    }
    return null;
}

console.log(numPointsScored('Alan Anderson'));

//function to get the shoe size of a player.
function shoeSize(playerName){
    var game = gameObject();
    for(var team in game){
        var players = game[team].players;
        if(players[playerName]){
            return players[playerName].shoe;
        }
    }
    return null;
}

console.log(shoeSize("Alan Anderson"));
 
//function to get the team colors
function teamColors(teamName){
    var game = gameObject();
    for(var team in game){
        if(game[team].teamName === teamName){
            return game[team].colors;
        }
    }
    return null;
}

console.log(teamColors('Brooklyn Nets'));

//function to get the team names.
function teamNames(){
    var game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames());

//function to get the player numbers.
function playerNumbers(teamName){
    var game = gameObject();
    for(const team in game){
        if(game[team].teamName === teamName){
            var players = game[team].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return null;
}

console.log(playerNumbers('Brooklyn Nets'));

//function to get player stats.
function playerStats(playerName){
    var game = gameObject();
    for(var team in game){
        var players = game[team].players;
        if(players[playerName]){
            return players[playerName];
        }
    }
    return null;
}

console.log(playerStats('Alan Anderson'));

//function to get the number of rebounds of the player with the biggest shoe size.
function bigShoeRebounds(){
    var game = gameObject();
    var maxShoeSize = 0;
    var rebounds = 0;
    
    for(const team in game){
        const players = game[team].players;
        for(const player in players){
            if(players[player].shoe > maxShoeSize){
                maxShoeSize = players[player].shoe;
                rebounds = players[player].rebounds;
            }
        }
    }
    return rebounds;
}

console.log(bigShoeRebounds());

//function to get the number of points scored by a player (with debugging).
function numPointsScored(playerName){
    var game = gameObject();
    for(var team in game){
        console.log(team);
        var players = game[team].players;
        if(players[playerName]){
            return players[playerName].points;
        }
    }
    return null;
}

//bonus questions.

//function to get the player with the most points.
function mostPointsScored(){
    var game = gameObject();
    var maxPoints = 0;
    var bestPlayer = '';
    
    for(var team in game){
        var players = game[team].players;
        for(var player in players){
            if(players[player].points > maxPoints){
                maxPoints = players[player].points;
                bestPlayer = player;
            }
        }
    }
    return bestPlayer;
}

console.log(mostPointsScored());

//function to get the team with the most points.
function winningTeam(){
    var game = gameObject();
    var teamPoints = { home: 0, away: 0 };
    
    for(var team in game){
        var players = game[team].players;
        for (var player in players){
            teamPoints[team] += players[player].points;
        }
    }
    return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam());

//function to get the player with the longest name.
function playerWithLongestName(){
    var game = gameObject();
    var longestName = '';
    
    for(var team in game){
        var players = game[team].players;
        for (const player in players){
            if (player.length > longestName.length){
                longestName = player;
            }
        }
    }
    return longestName;
}

console.log(playerWithLongestName());

//function to check if the player with the longest name has the most steals.
function doesLongNameStealATon(){
    var game = gameObject();
    var longestName = playerWithLongestName();
    var maxSteals = 0;
    
    for(const team in game){
        const players = game[team].players;
        for (const player in players){
            if (players[player].steals > maxSteals){
                maxSteals = players[player].steals;
            }
        }
    }
    return game.home.players[longestName].steals === maxSteals || game.away.players[longestName].steals === maxSteals;
}

console.log(doesLongNameStealATon());