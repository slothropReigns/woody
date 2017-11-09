import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toDeci'
})
export class ToDeciPipe implements PipeTransform {
    frac: string;
    splits: string[];
    numer: number;
    denom: number;
    inty: number;
    deci: number;

    transform(value: string, args?: any): number {
        this.frac = value;
        if (!this.frac.includes('/')) {
            return +this.frac;
        } else {
            this.splits = this.frac.split('-');
            this.inty = +this.splits[ 0 ];
            this.splits = this.splits[ 1 ].split('/');
            this.numer = +this.splits[ 0 ];
            this.denom = +this.splits[ 1 ];
            this.deci = this.inty + (this.numer / this.denom);
            return this.deci;
        }
    }
}
