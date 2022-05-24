import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Storage } from '@capacitor/storage';
import { finalize, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public apollo: Apollo) { }
  themes(){
    return this.apollo.watchQuery({
      query: gql`
    query{
      themes{
        id
        title
        definition
        storyReference
        storyContent
        visual
        
      }
    }`,
    fetchPolicy:'network-only'
  }).valueChanges
  }
}
