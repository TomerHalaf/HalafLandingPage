import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'halaf-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    faEdit = faEdit;
    faWallet = faWallet;

    constructor() { }

    ngOnInit() {
    }

}
