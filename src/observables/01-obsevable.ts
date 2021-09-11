
import { Observable, Observer, Subscriber } from "rxjs";


const observer:Observer<any> = {
    next: value =>console.log("siguiente",value),
    error: error =>console.log("error"),
    complete: ()=>console.log("info")
        

}

const Obs$ = new Observable<string>(subs =>{

    subs.next('Hola');
    subs.next("mundo");

    //forzar un error
    // const a = undefined;
    // a.nombre="Fernando";
    subs.complete();

});

Obs$.subscribe(observer);


//Obs$.subscribe( console.log);
/*
Obs$.subscribe(
valor => console.log("next",valor),
error =>console.log("error"),
()  =>console.log("info")

);*/









