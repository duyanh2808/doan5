import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-loai',
  templateUrl: './loai.component.html',
  styleUrls: ['./loai.component.css']
})
export class LoaiComponent extends BaseComponent implements OnInit {
  list:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.list = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/get-pro-by-type/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });

  }
  
}
