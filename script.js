let USERSCORE = 0;
let COMPSCORE = 0;

// Retriving Scores Text
const user_score = document.querySelector('.user-score');
const comp_score = document.querySelector('.comp-score');

// Reriving Options
const rock_option = document.querySelector('.rock-option');
const paper_option = document.querySelector('.paper-option');
const scissor_option = document.querySelector('.scissor-option');

// Retriving Result Text
const result_text = document.getElementById('result-text');

function game(user_option){
    comp_option = computer()
    option = user_option + comp_option;
    switch(option){
        case "rs":
        case "pr":
        case "sp": user_win(user_option,comp_option);
        break;
        case "rr":
        case "pp":
        case "ss": draw(user_option,comp_option);
        break;
        case "rp":
        case "ps":
        case "sr": comp_win(user_option,comp_option);
        break;
    }

    function CapitalizeWords(letter){
        switch(letter){
            case 'r': return "ROCK"
            case 'p': return "PAPER"
            case 's': return "SCISSOR"
        }
    }

    function ColorBorder(option,class_name){
        switch(option){
            case "r": rock_option.classList.add(class_name);
            break;
            case "p": paper_option.classList.add(class_name);
            break;
            case "s": scissor_option.classList.add(class_name);
        }
    }

    function RemoveColorBorder(option,class_name){
        switch(option){
            case "r": rock_option.classList.remove(class_name);
            break;
            case "p": paper_option.classList.remove(class_name);
            break;
            case "s": scissor_option.classList.remove(class_name);
        }
    }

    function user_win(Uo,Co){
        CUo = CapitalizeWords(Uo)
        CCo = CapitalizeWords(Co)
        user_score.innerHTML = USERSCORE+=1
        result_text.innerHTML = `${CUo} beats ${CCo}, You Win !!`
        ColorBorder(Uo,'green-border')
        setTimeout(function(){
            RemoveColorBorder(Uo,"green-border")
        },700)
    }

    function draw(Uo,Co){
        CUo = CapitalizeWords(Uo)
        CCo = CapitalizeWords(Co)
        result_text.innerHTML = "Draw!!"
        ColorBorder(Uo,'yellow-border')
        setTimeout(function(){
            RemoveColorBorder(Uo,"yellow-border")
        },700)
    }

    function comp_win(Uo,Co){
        CUo = CapitalizeWords(Uo)
        CCo = CapitalizeWords(Co)
        comp_score.innerHTML = COMPSCORE+=1
        result_text.innerHTML = `${CCo} beats ${CUo}, You Lose !!` 
        ColorBorder(Uo,'red-border')
        setTimeout(function(){
            RemoveColorBorder(Uo,"red-border")
        },700)
    }

}

function computer(){
    rps_array = ['r','p','s'];
    random_value = Math.floor(Math.random() * 3) 
    return rps_array[random_value]
}

function main(){
    rock_option.addEventListener('click',function(){
        game("r")
    })
    paper_option.addEventListener('click',function(){
        game("p")
    })
    scissor_option.addEventListener('click',function(){
        game("s")
    })
}

 main();
