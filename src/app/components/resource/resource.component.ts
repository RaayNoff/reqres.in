import { Component, Input, OnInit } from '@angular/core';
import { IResource } from 'src/app/models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  @Input() resource: IResource;
  constructor() {}

  ngOnInit(): void {}
}
