import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status:string}[] =[];
  constructor(private serversService: ServersService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getService();
  }
  onReload() {
    //this.router.navigate(['/servers'],{relativeTo: this.route});
    this.router.navigate(['/servers']);

  }

}
