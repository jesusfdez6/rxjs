import { range, tap,map } from "rxjs";

const numeros$ =range(1,5).pipe(

    tap(x => console.log("tap",x)),
    map(val=> val*10),
    tap({
        next : valor => console.log("después",valor),
        complete:() => console.log("se termino")
    })
);


numeros$.subscribe(val =>console.log('subs',val));