import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public fetch:FetchService) {
    this.get();
  }
algo:any;
  get(){
    this.fetch.getStudents().then((res: any) => {
      // Maneja la respuesta aquí
      console.log(res);
      this.algo=res;
    })
    .catch(error => {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error(error);
    });
  }
  


  

}
