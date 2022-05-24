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
export class UserService {

  public isLoggedIn = false;

  public userDetails: any = {
    user: {}
  };
  public userDetails$: BehaviorSubject<any> = new BehaviorSubject(null)
  hasNewMatches:boolean=false
  otherUserDetail: any;

  constructor(public apollo: Apollo, private route: Router) { }
  async UserData() {
   
   
    const data = await Storage.get({ key: 'userdetails' });

    try {
      const userdata = JSON.parse(data.value);
    
      if (userdata) {
        this.isLoggedIn = true;
        this.userDetails = userdata;
        console.log(userdata)
        this.getCurrentUser().subscribe( res =>{
          this.userDetails = res.data
          this.userDetails$.next(res.data);
          this.pollerUserData();
         
        })
      }
      else {
        this.isLoggedIn = false; 
        this.finalizeInit();
      }
      finalize(() =>this.finalizeInit())
    }
    catch (e) {
      this.finalizeInit();
    }
  }
  finalizeInit() {
    const initComplete = new Event('initComplete');
    window.dispatchEvent(initComplete);
  }
  getCurrentUser(){
    const userId: string = this.userDetails.user.id;
     let variables = {
       userId: parseFloat(userId)
     };
     return this.apollo.watchQuery({
       query: gql`
     query($userId:Float!){
       user(id:$userId){
         id
         email
         mobile
         
       }
     }`,variables,
     fetchPolicy:'network-only'
   }).valueChanges
 }
 pollerUserData(){
  setInterval( ()=>{
   this.getCurrentUser().subscribe( res=>{
     this.userDetails$.next(res.data)
   })
  },5000)
}
  register(data) {
    return this.apollo.mutate({
      mutation: gql`
      mutation($data:CreateUserInput!){
        createUser(data:$data){
          id
          email
          userName
          mobile

        }
      }`,
      variables: { data },
    }).pipe(
      map((res: any) => {
     //   console.log('register', res.data.createUser);
        return res.data.createUser;
      })
    );
  }
  emailExists(email){
    const variables = {
      email:email
    } 
    return this.apollo.query({
      query: gql`
      query($email:String!){
        emailExists(email:$email)
      }`,
      variables,
      fetchPolicy:'network-only',
    });
   }
   userNameExists(userName){
    const variables = {
      userName:userName
    } 
    return this.apollo.query({
      query: gql`
      query($userName:String!){
        userNameExists(userName:$userName)
      }`,
      variables,
      fetchPolicy:'network-only',
    });
   }
   public signIn(data) {
    const variables = {
      ...data
    };
    return this.apollo.watchQuery({
      query: gql`
        query($password:String,$email:String!) {
          userLogin(password: $password,email:$email) {
            status token
            user{
                id
                email
                mobile
                
            }

        }
        }
      `,
      variables,
    }).valueChanges;
  }
}
