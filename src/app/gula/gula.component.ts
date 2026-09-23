import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gula',
  imports: [ReactiveFormsModule],
  templateUrl: './gula.component.html',
  styleUrl: './gula.component.css',
})
export class GulaComponent {
  builder = inject(FormBuilder);

  gulaForm = this.builder.group({
    height: ['',[Validators.required, Validators.min(1)]],
    baseSide: ['',[Validators.required, Validators.min(1)]],
    volume: ['']
  });

  showVolume = true;

  startCalc() {
    const height = Number(this.gulaForm.value.height);
    const baseSide = Number(this.gulaForm.value.baseSide);
    const volume = this.calcVolume(baseSide, height);
    this.gulaForm.get('volume')?.setValue(String(volume));
    this.showVolume = true;
  }
  calcVolume(baseSide: number, height: number):number {
    const volume = 1.0/3.0*Math.pow(baseSide,2)*height;
    return volume;
  }
}
