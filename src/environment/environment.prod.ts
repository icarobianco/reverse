export const environment:any = {

    ENVIRONMENT: 'PROD', 
  
    firebaseConfig: {
      apikey: "AIzaSyBXsQncVeTBrSF2mTRpBeACH3i1JseIK5E",  
      authDomain: "reverse-tshirt.firebaseapp.com",  
      projectId: "reverse-tshirt",  
      storageBucket: "reverse-tshirt.appspot.com",  
      messagingSenderId: "511755119341",  
      appId: "1:511755119341:web:0a94e04a531c9124943ae4",  
      measurementId: "G-1YPY59LX6F"
    },
  
    jwtSecret: "reverse-tshirt",
  
    token: {
      label: '',
      algorithm: '',
      digits: 0,
      period: 0
    },
  
    icons: {
      active: 'check_circle',
      inactive: 'do_not_disturb_on',
  
      buy: 'download_for_offline',
      sell: 'publish',
  
      add: 'add_circle', 
      edit: 'ink_pen',
      delete: 'delete_forever',
      attach: 'attach_file_add'
    }
    
  }