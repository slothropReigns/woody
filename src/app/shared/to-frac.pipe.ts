import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toFrac'
})
export class ToFracPipe implements PipeTransform {
    splits: string[];
    frac: number;
    inty: string;
    numer: number;
    denom: number;

    transform(value: string, args?: any): string {
        const toNumber = +value;
        if (Math.round(toNumber) === toNumber) {
            return value;
        } else {
            this.splits = value.split('.');
            this.inty = this.splits[ 0 ];
            this.splits[ 1 ] = '.' + this.splits[ 1 ];
            this.frac = +this.splits[ 1 ] / .0625;
            this.frac = Math.ceil(this.frac); // round to next sixteenth higher

            for (let i = +this.frac; i > 0; i--) {
                if (0 === +this.frac % i && 0 === 16 % i) {
                    this.numer = (+this.frac / i);
                    this.denom = (16 / i);
                    return this.inty + '-' + this.numer + '/' + this.denom;
                }
            }
        }
    }
}
