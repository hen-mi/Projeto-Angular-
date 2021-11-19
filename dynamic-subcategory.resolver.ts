import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class DynamicSubcategoryResolver implements Resolve<any> {
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const subcategoryName: string | null = route.paramMap.get("subcategoryName");
 
    console.log("route ", route);

    return of({
      breadcrumb: " " + subcategoryName,
      produto: "Você está em: " +subcategoryName
      
    }).pipe(delay(100));
  }
}
