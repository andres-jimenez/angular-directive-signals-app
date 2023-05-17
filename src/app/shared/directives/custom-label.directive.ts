import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  @Input() set color(value: string) {
    this._color = value;

    this.setColor();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;

    this.setErrorMessage();
  }

  private htmlElement?: ElementRef<HTMLElement>;
  private _color?: string;
  private _errors?: ValidationErrors | null | undefined;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  setColor() {
    if (!this.htmlElement || !this._color) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.style.display = 'none';
      return;
    }

    this.htmlElement.nativeElement.style.display = 'block';

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'This field is required';
      return;
    }

    if (errors.includes('minlength')) {
      const requiredLength = this._errors['minlength'].requiredLength;

      this.htmlElement.nativeElement.innerText = `This field must have at least ${requiredLength} characters`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Enter a valid email';
      return;
    }
  }
}
