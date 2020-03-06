import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-observable-example',
    templateUrl: './observable-example.component.html',
    styleUrls: ['./observable-example.component.scss'],
})
export class ObservableExampleComponent implements OnInit {

    randomStringGenerator: Observable<string>;
    randomStrings: string[] = [];
    subscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.randomStringGenerator = new Observable<string>((observer: any) => {
            setInterval(() => {
                observer.next(Math.random().toString(36) + 'XXX');
            }, 2000);
        });
    }

    subscribe() {
        if (this.subscription == null) {
            this.subscription = this.randomStringGenerator.subscribe((x) => {
                this.randomStrings.push(x);
            });
        } else {
          this.subscription.unsubscribe();
          this.subscription = null;
        }
    }
}
