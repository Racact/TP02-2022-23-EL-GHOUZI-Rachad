import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {

  @Input() formulaire!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formulaire = new FormGroup({
      prenom: new FormControl(null),
      nom: new FormControl(null),
      adresse: new FormControl(null),
      cp: new FormControl(null),
      tel: new FormControl(null),
      email: new FormControl(null),
      civ: new FormControl(null),
      login: new FormControl(null)
      // Pas une très bonne idée d'afficher le mdp de l'utilisateur à l'écran, d'où le non affichage de ce dernier
    })
  }

  ngOnChanges(): void {
    this.formulaire = new Input();
  }
}
