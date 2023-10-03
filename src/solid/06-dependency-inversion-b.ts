//Dependencia oculta de ExternalService
// export class UseCase {

//     public externalService: ExternalService;

//     constructor() {
//         this.externalService = new ExternalService();
//     }

//     doSomething() {
//         this.externalService.doExternalTask();
//     }

// }

// class ExternalService {

//     doExternalTask() {
//         console.log('Doing task ...')
//     }
// }

// Refactorizacion
// Aplicando la inversion de dependencias - Dependency Inversion
// Nuestra clase UseCase depende de ExternalService
// Ayuda a aplicar el principio de responsabilidad unica, y ayuda a que el testing mucho mas facil
export class UseCase {

    constructor(public externalService: ExternalService) {}

    doSomething() {
        this.externalService.doExternalTask();
    }

}

export class ExternalService {

    doExternalTask() {
        console.log('Doing task ...')
    }
}