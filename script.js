// Toggles

let isTimeDone = false;

let isBreadInToaster = false;

let isToast = false;

//Bread Variable

const bread = {
    size: [60, 40, 5],
    burntPoint: 600,
    toastpoint: 400,
    currentTemp: 20,
}

//toaster variable

const toaster = {
    slots: 4,
    button: (e) =>{
        if(e){
            return true
        }else{
            return false;
        }
    }


//Functions

function cageDown(push){
    if(push){
        // turn on heat
        //start timer
    }
}

//cagedown

//cageup TODO:
function cageUp(e){}

//timer
function setTimer(e, time = 120){
    if(e){
        //start timer at length of time argument
        //activate heat
    }
    //when timer done signal cageUp // toggel cage  // disable healt element
}

//activateHeat

functions activateHeat(){
    // turn on heat element
    //increase the bread temp
}
