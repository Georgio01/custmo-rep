import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.less'
})
export class ControlComponent {

  label=input.required<string>();
  
}
