export class Users {
    id: string;
    nombre: string;
    saldo: string;
    ubicacion: string;

    constructor( user?: any ){
        if( user ){
            Object.keys( user ).forEach( key => {
                this[key] = user[key];
            });
        }
    }

}
