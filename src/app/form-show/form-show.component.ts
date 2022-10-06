import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {

  @Input() nom?: String;
  constructor() { }


  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log ("onChanges " + this.nom);
  }
}
