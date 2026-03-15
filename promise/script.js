

function watchSeries(){
    return new Promise ((resolve, reject) => {

            const watch = false;
            setTimeout(()=>{
                if(watch){
                resolve("You watched Violet Evergarden");
            }else {
                reject("Wow you didnt watch anything");
            }
            }, 5000);
    });
}

function studyCoding(){
    return new Promise((resolve, reject) => {
            const study = true;
            setTimeout(()=>{
                if(study){
                resolve("You studied for your activity");
                }else{
                    reject("You didnt study you donut");
                }
            }, 500);
    });
}

function cleanHouse(){
    return new Promise ((resolve, reject) => {
        const clean = true;
        setTimeout(()=>{
            if(clean){
            resolve("You cleaned the house");
            }else{
                reject("You didnt clean");
            }
        }, 3000);
    });
}

watchSeries().then(value => {console.log(value); return studyCoding()})
             .then(value => {console.log(value); return cleanHouse()})
             .then(value => {console.log(value); console.log("you finished em all")})
             .catch(error => console.error(error));