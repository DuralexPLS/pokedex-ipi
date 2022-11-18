import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAdminView(){
    this.router.navigate(['admin']);
  }

}
