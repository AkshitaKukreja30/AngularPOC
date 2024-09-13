import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent  implements DoCheck{

  showmenu: boolean = false;
  constructor(private router: Router) {
  }

  ngDoCheck(): void {
    let currenturl=this.router.url;
    if(currenturl=='/login' || currenturl=='/register'){
      this.showmenu=false
    }else{
      this.showmenu=true;
    }
  }
  
}
