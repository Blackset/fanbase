import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  toggleForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.toggleForm = this.fb.group({
      style: [''],
      commentaire:['']
    });
  }
  ngOnInit(): void {

  }
  submitForm(event : any){
    event.preventDefault(); // Prevent the default form submission behavior

    // You can access the selected font style using:
    const selectedStyle = this.toggleForm?.get('style')?.value;

    // Perform actions or submit the form data as needed
    console.log('Selected style:', selectedStyle);
  }
}
