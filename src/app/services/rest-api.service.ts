import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  postApi(apiUrl: string, payload: any) {
    return this.http.post(apiUrl, payload);
  }
}
