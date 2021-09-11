


import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from 'rxjs/operators';
/*
range(1,5).pipe(
    map<number,number>(val=>{
        return val*10
    })
).subscribe(console.log);
*/

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

keyup$.pipe(
    map(key => key.code)
).subscribe(val=>console.log(val)); 


const keypluck$ =keyup$.pipe(
    pluck('target','baseURI')
)

const mapto$ =keyup$.pipe(
    mapTo("tecla presionada")
)

keypluck$.subscribe(console.log);

mapto$.subscribe(console.log);