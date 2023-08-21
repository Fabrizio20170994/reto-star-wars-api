import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class SwapiService {
  constructor(private readonly httpService: HttpService) {}
  async findAll() {
    const responseData = await lastValueFrom(
      this.httpService.get('https://swapi.py4e.com/api/planets').pipe(
        map((response) => {
          return response.data;
        }),
      ),
    );
    return responseData.results;
  }

  async findOne(id: number) {
    const responseData = await lastValueFrom(
      this.httpService.get(`https://swapi.py4e.com/api/planets/${id}/`).pipe(
        map((response) => {
          return response.data;
        }),
      ),
    );
    return responseData.results;
  }
}
