import React, {} from 'react';
import { AsyncStorage} from 'react-native';

export default class UserData
{

  static setName(value)
  {

    AsyncStorage.setItem('UserName', value);


  }
   static setUserId( value)
  {
    AsyncStorage.setItem('UserId', value);
  }
   static setEmail( value)
  {
    AsyncStorage.setItem('Email', value);
  }


static getName()
{

  return AsyncStorage.getItem('UserName');
}
   static getUserId()
  {
    var  muserId= '';
    AsyncStorage.getItem('UserId').then((value)=>{
muserId=value;

    })
    .catch((error) =>{

      muserId=null;
    });

    return muserId;
  }
}
