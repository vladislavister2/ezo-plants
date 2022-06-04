import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { randomInt } from 'crypto';

@Injectable()
export class InfoArticlesService {
  constructor(private httpService: HttpService) {}

  findPoetry(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://api-thirukkural.vercel.app/api?num=${randomInt(1, 1000)}`)
      .pipe(map((response) => response.data));
  }
}
