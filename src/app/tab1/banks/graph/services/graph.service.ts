import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICard } from "../model/graph.model";

@Injectable({
    providedIn: 'root'
})
export class GraphService{
    constructor(
        private _http: HttpClient,
    ){

    }

    public getCardOperations(): Observable<{cardSpents: ICard[]}> {
        return this._http.get<{cardSpents: ICard[]}>('assets/data/card-operations.json')
    }
}