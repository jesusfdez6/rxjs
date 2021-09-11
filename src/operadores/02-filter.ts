import { from, fromEvent, of, range } from 'rxjs';
import {filter,map} from 'rxjs/operators'


const src$ = range(1,10).pipe(
    filter((value,i) => value%2==0)
)

//src$.subscribe(console.log);
interface Personaje{
    tipo:string,
    nombre:string

}


const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'batman'
    },
    {
        tipo:'villano',
        nombre:'joker'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    }
]

const personajes$ = from(personajes).pipe(
    filter((value,i)=>{
        return  (value.tipo=='heroe');
    })
)

personajes$.subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event =>event.code),
    filter(code => code==='Enter')

)

keyup$.subscribe(console.log);