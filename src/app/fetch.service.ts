import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  getStudents() {
    return fetch('http://192.168.1.15/getStudents.php/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });
  }
}
