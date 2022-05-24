import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  numberTeams = 3;
  constructor() { }

  ngOnInit() {
  }

  setTeamName(idx, name){
    console.log(idx, name);
  }

}
