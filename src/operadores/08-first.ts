import { fromEvent } from "rxjs";
import { first,map } from "rxjs/operators";


const click$=fromEvent<PointerEvent>(document,"click");



click$.pipe(
map(({clientX,clientY}) =>({clientX,clientY})),
first(val =>val.clientY>150)
).
subscribe({
    next:val=>console.log("next:",val),
    complete:()=>console.log("completed")
})