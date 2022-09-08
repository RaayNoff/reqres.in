import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/models/resource';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss'],
})
export class ResourcesPageComponent implements OnInit {
  constructor(public resourceService: ResourcesService) {}

  ngOnInit(): void {
    this.resourceService.getAll().subscribe();
  }
}
