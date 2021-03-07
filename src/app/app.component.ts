import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  getTitle = (title: string) => {
    this.title = title
    return title
  }
  getValue = (val) => {
    this.inputVal = val
  }
  inputVal: string = 'hey'
  key: number = 1
  arr = [
    {
      id: 1,
      title: 'title1'
    },
    {
      id: 2,
      title: 'title2'
    },
    {
      id: 3,
      title: 'title3'
    },
    {
      id: 4,
      title: 'title4'
    },
  ]
  tableData: any = []
  constructor(private user:UserserviceService){
    this.user.getData().subscribe(data => {
      this.tableData = data
    })
  }
  displayedColumns: string[] = ['id', 'title', 'completed'];
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  onSubmit = (val) => {
    console.log(val)
  }
}
