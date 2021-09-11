
import { Observable, Observer, Subject, Subscriber } from "rxjs";


const observer:Observer<any> = {
    next: value =>console.log("siguiente",value),
    error: error =>console.warn("error"),
    complete: ()=>console.info("info")
        

}


const intervalo$ = new Observable<number>(subs =>{
  
    const interval=setInterval(()=>{

        subs.next(Math.random())
    },5000);

    return ()=>{
        clearInterval(interval)
    }

});


//const subs1 = intervalo$.subscribe(random => console.log("subs1",random));
//const subs2 = intervalo$.subscribe(random => console.log("subs2",random));

//1 Casteo multiple
//2 también es un observer
//3  next,error, y complete
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(random => console.log("subs1",random));
const subs2 = subject$.subscribe(random => console.log("subs2",random));


setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500);