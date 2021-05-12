import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task traker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiServise:UiService, private router: Router) {
    this.subscription = this.uiServise.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServise.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
