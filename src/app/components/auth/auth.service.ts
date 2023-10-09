import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    public user$: BehaviorSubject<any> = new BehaviorSubject<any>(null)
}
