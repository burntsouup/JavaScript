//0
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const enteredValue = prompt("enter a value buddy", );  // prompt user to enter player/monster health values

let chosenMaxLife = parseInt(enteredValue);
    // if chosenMaxLife is not a number or if it's a negative number, then set chosenMaxLife value to a default value of 100
    if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
        chosenMaxLife = 100;
    }
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);  // adjust progress bar UI - monster health and player health 'max' life and actual 'value' set to chosenMaxLife

//7b
function reset() {
    resetGame(chosenMaxLife); // update progress bar UI - monster health and player health reset to chosenMaxLife
    currentMonsterHealth = chosenMaxLife;  // update currentMonsterHealth variable value
    currentPlayerHealth = chosenMaxLife;  // update currentPlayerHealth variable value
}

//5
function winnerAlert() {
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("you won!");
        //7a
        // reset game
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("you lost!");
        reset();
    }
}

//4
function monsterAttackPlayer() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);  // update progress bar UI - player health 'value' decreases
    currentPlayerHealth -= playerDamage;  // update currentPlayerHealth variable value

    //6
    // revive dead player only if player has a bonus life
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        setPlayerHealth(chosenMaxLife/2);  // update progress bar UI - player health 'value' increases back to half of chosenMaxLife
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
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    // player attacks monster
    const damage = dealMonsterDamage(maxDamage);  // update progress bar UI - monster health 'value' decreases
    currentMonsterHealth -= damage;  // update currentMonsterHealth variable value

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

    // when we press 'HEAL' button, monster will attack player
    monsterAttackPlayer();  
}

//1
attackBtn.addEventListener('click', attackHandler);  // on every 'ATTACK' button click, run attackHandler 
strongAttackBtn.addEventListener('click', attackHandler);
healBtn.addEventListener('click', healPlayerHandler);