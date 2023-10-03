(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProperties {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class Person {

        public name         : string;
        public gender       : Gender;
        public birthdate    : Date;

        constructor({ name,  gender, birthdate }: PersonProperties){
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate;
        }
    }

    // const newPersona = new Person('Julian', 'M', new Date('1997-04-01'));
    // console.log('newPersona => ', newPersona);

    interface UserProperties {
        email       : string;
        role        : string;
        name        : string;
        gender      : Gender;
        birthdate    : Date;
    }

    class User extends Person {

        public email        : string;
        public role         : string;
        public lastAcces    : Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserProperties ) {
            super({ name, gender, birthdate });
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredecials(){
            return true;
        }
    }

    interface UserSettingsProperties{
        workingDirectory    : string;
        lastOpenFolder      : string;
        email               : string;
        role                : string;
        name                : string;
        gender              : Gender;
        birthdate           : Date;
    }

    class UserSettings extends User {

        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProperties ){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'julian@google.com',
        role: 'Admin',
        name: 'Julian',
        gender: 'M',
        birthdate: new Date('1997-04-01')
    });

    console.log({userSettings, areCredencialsValid: userSettings.checkCredecials()});

})();