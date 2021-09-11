import { fromEvent } from "rxjs";
import { takeWhile,map } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document,'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    takeWhile(({y})=>y<=150,true)
    )
    .subscribe({
    next:value=>console.log("value",value),
    complete:()=>console.log("completed")
});







