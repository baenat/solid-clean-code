import { ExternalService, UseCase } from "./06-dependency-inversion-b";

const externalService = new ExternalService();
const useCase = new UseCase(externalService);
const doTask = useCase.doSomething();
console.log(doTask);