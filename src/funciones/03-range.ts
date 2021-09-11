
import { range,of, asyncScheduler } from "rxjs";


const src$ = range(1,5,asyncScheduler);


console.log("inicio")
 src$.subscribe(console.log);
console.log("final")

