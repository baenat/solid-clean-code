(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia!

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

    // const newPersona = new Person({name: 'Julian', gender: 'M', birthdate: new Date('1997-04-01')});
    // console.log('newPersona => ', newPersona);

    interface UserProperties {
        email       : string;
        role        : string;
    }

    class User {

        public email        : string;
        public role         : string;
        public lastAcces    : Date;

        constructor({
            email,
            role,
        }: UserProperties ) {
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredecials(){
            return true;
        }
    }

    interface SettingsProperties{
        workingDirectory    : string;
        lastOpenFolder      : string;
    }

    class Settings {

        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProperties ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }

    // Aplicando el principio de responsablidad unica, porque cada clase son instancias propias!

    interface UserSettingsProperties {
        name                : string;
        gender              : Gender;
        birthdate           : Date;
        email               : string;
        role                : string;
        workingDirectory    : string;
        lastOpenFolder      : string;
    }

    class UserSettings {
        
        public person   : Person;       // Instancia propia
        public user     : User;         // Instancia propia
        public settings : Settings;     // Instancia propia
        
        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProperties) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'julian@google.com',
        role: 'Admin',
        name: 'Julian',
        gender: 'M',
        birthdate: new Date('1997-04-01'),
    });

    console.log({userSettings, areCredencialsValid: userSettings.user.checkCredecials()});

})();