import { takeUntil} from 'rxjs/operators'
import { interval, timer } from 'rxjs'

const second = interval(1000)
const timer$ = timer(10000)
 
second.pipe(takeUntil(timer$)).subscribe(console.log)