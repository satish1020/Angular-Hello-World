import { Component } from '@angular/core'
@Component({
    selector: 'hello',
    template: "<strong> {{getMessage()}}</strong>"
}
)

export class HelloWorldComponent {

    getMessage(): string{
        return "this is my first test message";
    }
}

