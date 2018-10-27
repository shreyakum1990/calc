import { ParameterService } from "./parameter.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TriangleService{
 
    constructor(private para: ParameterService){}

    getarea(a,b,c){
        let s = this.para.getParameter(a,b,c);
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
}