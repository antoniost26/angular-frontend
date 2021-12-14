import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function exclusionListValidator(exclusions: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return exclusions.includes(control.value.toString())
      ? { exclusionList: { value: control.value } }
      : null;
  };
}
