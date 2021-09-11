
import { Observable, Observer, Subscriber } from "rxjs";

/*
const observer:Observer<any> = {
    next: value =>console.log("siguiente",value),
    error: error =>console.warn("error"),
    complete: ()=>console.info("info")
        

}*/


const intervalo$ = new Observable<number>(subs =>{
    let i:number=0;
    const intervalo = setInterval(()=>{
        i++;
        subs.next(i);        
    },1000);

    return () =>{
        clearInterval(intervalo);
    }
});


const subscription = intervalo$.subscribe(num=>console.log("num",num));
const subscription1= intervalo$.subscribe(num=>console.log("num",num));
const subscription2 = intervalo$.subscribe(num=>console.log("num",num));

    subscription.add(subscription1);
    subscription.add(subscription2);


setTimeout(() => {
   subscription.unsubscribe()
 //   subscription1.unsubscribe()
 //   subscription2.unsubscribe()

}, 3000);


