import { Component, Input, input, Type } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = 'Botón';
  @Input() type: 'button' | 'submit' = 'button';
}
