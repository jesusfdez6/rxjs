
import {interval,timer} from "rxjs";

const obsevable ={
    next:val => console.log(val),
    error:error =>console.log(error),
    complete:()=>console.log("completed")
}

const obs$ =  interval(10000);


const hoyEn5= new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);



const timer$ = timer(hoyEn5);
console.log("inicio");

//obs$.subscribe(obsevable)
timer$.subscribe(obsevable);
console.log("final");