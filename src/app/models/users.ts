export class Users {
    id: string;
    nombre: string;
    saldo: string;
    ubicacion: string;

    constructor( notData?: any ){
        if( notData ){
            Object.keys( notData ).forEach( key => {
                this[key] = notData[key];
            });
        }
    }
}
