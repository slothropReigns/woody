import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Wood } from './wood.model';

@Injectable()
export class WoodsService {
    woodsChanged = new Subject<Wood[]>();

    woodsCollection: AngularFirestoreCollection<Wood>;
    woods: Observable<Wood[]>;
    woodDoc: AngularFirestoreDocument<Wood>;


    // dummy woods
    private tempWoods: Wood[] = [
        new Wood(
            'placeHolderID0000',
            'Alder - Clear',
            'Clr.Alder',
            'Clear Alder Description Goes Here',
            'imgPath',
            13.16, 17.14, 19.99,
            15.84, 19.72, 23.24,
            17.64, 20.68, 23.99,
            15.83),
        new Wood(
            'placeHolderID0001',
            'Alder - Knotty',
            'K.Alder',
            'Knotty Alder Description Goes Here',
            'imgPath',
            12.10, 15.84, 17.42,
            15.32, 18.80, 20.96,
            16.44, 19.30, 21.46,
            12.79),
        new Wood(
            'placeHolderID0002',
            'Beech',
            'Beech',
            'Beech Description Goes Here',
            'imgPath',
            13.61, 17.06, 20.88,
            16.76, 20.22, 24.84,
            18.48, 21.55, 25.74,
            16.64),
        new Wood(
            'placeHolderID0003',
            'Cherry',
            'Cherry',
            'Cherry Description Goes Here',
            'imgPath',
            14.55, 18.12, 21.73,
            17.84, 21.49, 24.96,
            18.82, 22.64, 25.79,
            16.94),
        new Wood(
            'placeHolderID0004',
            'Cherry - Knotty',
            'Kn.Cherry',
            'Knotty Cherry Description Goes Here',
            'imgPath',
            13.13, 16.62, 19.85,
            17.23, 20.25, 24.50,
            19.18, 21.50, 25.31,
            16.26),
        new Wood(
            'placeHolderID0005',
            'Cypress',
            'Cypress',
            'Cypress Description Goes Here',
            'imgPath',
            0, 0, 22.30,
            0, 0, 25.86,
            0, 0, 26.73,
            17.52),
        new Wood(
            'placeHolderID0006',
            'Hickory',
            'Hickory',
            'Hickory Description Goes Here',
            'imgPath',
            13.28, 16.78, 22.00,
            16.36, 19.71, 23.55,
            17.99, 20.72, 24.24,
            15.11),
        new Wood(
            'placeHolderID0007',
            'Hickory - Knotty',
            'Kn.Hickory',
            'Knotty Hickory Description Goes Here',
            'imgPath',
            13.33, 0, 20.33,
            16.94, 0, 24.47,
            18.59, 0, 25.22,
            15.88),
        new Wood(
            'placeHolderID0008',
            'Hard Maple',
            'H.Maple',
            'Hard Maple Description Goes Here',
            'imgPath',
            13.61, 17.51, 21.09,
            16.92, 20.71, 24.72,
            18.55, 21.87, 25.57,
            16.15) ];

    // finish dummy woods

    constructor(private af: AngularFirestore) {
        this.woodsCollection =
            this.af.collection('woods', ref =>
                ref.orderBy('name', 'asc'));
        this.woods = this.woodsCollection.snapshotChanges()
            .map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as Wood;
                    data.id = a.payload.doc.id;
                    return data;
                });
            });
    }

    getWoods() {
        return this.woods;
    }

    getWood(id: string) {
        return this.tempWoods[ id ];
    }

    addNewWood(newWood: Wood) {
        this.woodsCollection.add(newWood);
    }

    updateWood(wood: Wood) {
        this.woodDoc = this.af.doc(`woods/${wood.id}`);
        this.woodDoc.update(wood);
    }

    deleteWood(id: string) {

    }

}

// TODO timestamp wood record so we know when it was last updated
// TODO when firebase updates the woods list, clear the list first of hardcoded data
