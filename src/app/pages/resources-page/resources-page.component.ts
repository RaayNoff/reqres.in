import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResource } from 'src/app/models/resource';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss'],
})
export class ResourcesPageComponent implements OnInit, OnDestroy {
  aSub: Subscription;

  constructor(public resourceService: ResourcesService) {}

  ngOnInit(): void {
    this.aSub = this.resourceService.getAll().subscribe();
  }
  ngOnDestroy(): void {
    if (this.aSub) this.aSub.unsubscribe();
  }
}
