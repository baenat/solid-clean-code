(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,

        ){}
    }

    // const newPersona = new Person('Julian', 'M', new Date('1997-04-01'));
    // console.log('newPersona => ', newPersona);

    class User extends Person {

        public lastAcces: Date;

        constructor(
            public email: string, 
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ){
            super(name, gender, birthday);
            this.lastAcces = new Date();
        }

        checkCredecials(){
            return true;
        }
    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ){
            super(email, role, name, gender, birthday);
        }

    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'julian@google.com',
        'Admin',
        'Julian',
        'M',
        new Date('1997-04-01')
    );

    console.log({userSettings, areCredencialsValid: userSettings.checkCredecials()});

})();