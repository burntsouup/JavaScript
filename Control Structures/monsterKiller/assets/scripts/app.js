//0
const ATTACK_VALUE = 10; //3
const MONSTER_ATTACK_VALUE = 14; //4
const STRONG_ATTACK_VALUE = 17; //3
const HEAL_VALUE = 20; //2

let chosenMaxLife;
try {  //9b
    chosenMaxLife = getMaxLifeValues();
} catch (error) {  // if an error is thrown, then this code will execute (console the ('throw' value) error, send an alert, and set value of chosenMaxLife to 100)
    console.log(error);
    alert("BRO that's not a number! The default max life is set to 100");
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);  // adjust progress bar UI - monster health and player health 'max' life and actual 'value' set to chosenMaxLife

//9a - error handling
function getMaxLifeValues() {
    const enteredValue = prompt("Enter a value for the max life",);  // prompt user to enter a number (player/monster health values)

    let parsedValue = parseInt(enteredValue);

    // if parsedValue is not a number or if it's a negative number, then 'throw' an error
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: "Dude that's not a number!"};
    }

    return parsedValue;
}

//8a - write to log
function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    //8a1 - if-elseif statement
    if (event === "PLAYER_ATTACK") {
        logEntry.target = "MONSTER";  //*we can do it this way or the way it's done below
    } else if (event === "PLAYER_STRONG_ATTACK") {
        logEntry = {
            event: event,
            value: value,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "MONSTER_ATTACK") {
        logEntry = {
            event: event,
            value: value,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "PLAYER_HEAL") {
        logEntry = {
            event: event,
            value: value,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        battleLog.push(logEntry);
    } else if (event === "GAME_OVER") {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }

    //8a2 - switch-case statement
    // switch (event) {
    //     case "PLAYER_ATTACK":
    //         logEntry.target = "MONSTER";
    //         break; // break and don't evaluate any other cases
    //     case "PLAYER_STRONG_ATTACK":
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: "MONSTER",
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //         break;
    //     case "MONSTER_ATTACK":
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: "PLAYER",
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //         break;
    //     case "PLAYER_HEAL":
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: "PLAYER",
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //         break;
    //     case "GAME_OVER":
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //         break;
    //     default:  // run if no cases are met
    //         logEntry = {};
    // }

    battleLog.push(logEntry);
}

//8b
function logHandler() {
    // Option 1: for loop
    // for (let i=0; i<battleLog.length; i++) {
    //     console.log(battleLog[i]);
    // }
    // Option 2: for-of loop 
    // for (const el of battleLog) {
    //     console.log(el);
    // }
    // Option 3: for-of and for-in loops
    let i = 0;
    for (const el of battleLog) {
        console.log(`#${i}`);
        for (const key in el) {
            console.log(`${key} >>> ${el[key]}`);
        }
        i++;
        break;
    }
}

//7b
function reset() {
    resetGame(chosenMaxLife); // update progress bar UI - monster health and player health reset to chosenMaxLife
    currentMonsterHealth = chosenMaxLife;  // update currentMonsterHealth variable value
    currentPlayerHealth = chosenMaxLife;  // update currentPlayerHealth variable value
}

//5
function winnerAlert() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("you won!");
        //8ab
        writeToLog("GAME_OVER", "player won!", currentMonsterHealth, currentPlayerHealth);
        //7a - reset game
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("you lost!");
        //8ab
        writeToLog("GAME_OVER", "monster won!", currentMonsterHealth, currentPlayerHealth);
        reset();
    }
}

//4
function monsterAttackPlayer() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);  // update progress bar UI - player health 'value' decreases
    currentPlayerHealth -= playerDamage;  // update currentPlayerHealth variable value
    //8ab
    writeToLog("MONSTER_ATTACK", playerDamage, currentMonsterHealth, currentPlayerHealth);

    //6
    // revive dead player only if player has a bonus life
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        setPlayerHealth(chosenMaxLife / 2);  // update progress bar UI - player health 'value' increases back to half of chosenMaxLife
        currentPlayerHealth = chosenMaxLife;  // update currentPlayerHealth variable value
        removeBonusLife();  // update UI - change bonus life from 1 to 0
        hasBonusLife = false;  // update hasBonusLife boolean to false
        alert("You would have died, but the bonus life revived you!");
    }

    winnerAlert()
}

//3
function playerAttackMonster(mode) {
    // what is type of player attack (ATTACK OR STRONG_ATTACK)?
    let maxDamage;
    let logEvent;  //8ab
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
        logEvent = "PLAYER_ATTACK";  //8ab
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = "PLAYER_STRONG_ATTACK"; //8ab
    }

    // player attacks monster
    const damage = dealMonsterDamage(maxDamage);  // update progress bar UI - monster health 'value' decreases
    currentMonsterHealth -= damage;  // update currentMonsterHealth variable value
    //8ab
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    // monster attacks player
    monsterAttackPlayer();
}

//2
function attackHandler() {
    playerAttackMonster("ATTACK");
}
function strongAttackHandler() {
    playerAttackMonster("STRONG_ATTACK");
}
function healPlayerHandler() {
    // first ensure that healing wont increase player's health above chosenMaxLife
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;  // heal player back to max player health, but not above that
    } else {
        healValue = HEAL_VALUE;
    }
    // increase player health
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;  // update currentPlayerHealth
    //8ab
    writeToLog("PLAYER_HEAL", healValue, currentMonsterHealth, currentPlayerHealth);

    // when we press 'HEAL' button, monster will attack player
    monsterAttackPlayer();
}

//1
attackBtn.addEventListener('click', attackHandler);  // on every 'ATTACK' button click, run attackHandler 
strongAttackBtn.addEventListener('click', attackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logHandler);