import { fromEvent, interval } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";



const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";

document.querySelector("body").append(boton);


const counter$ = interval(1000);
const click$ = fromEvent<PointerEvent>(boton,'click')
.pipe(
    skip(2)
)

counter$
.pipe(
    takeUntil(click$)
)
.subscribe({
    next:value=>console.log("value",value),
    complete:()=>console.log("completed")
});






