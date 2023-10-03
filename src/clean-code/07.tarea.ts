(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {

        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {

        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {

        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    //? Idea para la nueva clase InputElement

    class InputElement {

        public htmlElement      : HtmlElement;
        public inputAttributes  : InputAttributes;
        public inputEvents      : InputEvents;

        constructor (
            id: string, value: string, placeholder: string,
        ) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }

    }

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    // console.log({ nameField });

    const nameField = new InputElement('txtName', 'Fernando', 'Enter first name');
    console.log({ nameField });

})()