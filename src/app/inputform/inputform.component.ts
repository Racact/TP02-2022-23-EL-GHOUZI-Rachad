import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {
  reactiveForm!: FormGroup

  nom : String = "";

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
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

  buttonToggle: boolean = false;
  buttonClick(): void {
    this.nom = this.reactiveForm.controls['nom'].value;

    console.log (this.nom );
    this.buttonToggle = !this.buttonToggle;
  }
}
