import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'halaf-staff-image',
  templateUrl: './staff-image.component.html',
  styleUrls: ['./staff-image.component.css']
})
export class StaffImageComponent implements OnInit {
    @Input() fileName:string;
    staffName:string="";
    title:string=";"

    constructor() { }

    ngOnInit() {
        let temp = this.fileName.split(",");
        this.staffName = temp[0];
        this.title = temp[1];
    }

}
