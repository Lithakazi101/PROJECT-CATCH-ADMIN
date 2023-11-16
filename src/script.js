import { AuthErrorCodes } from 'firebase/auth';

export const email = document.querySelector('#email')
export const password = document.querySelector('#password')

export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#logout-button')

//AUthState
export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

//Visitor SIgn in Divs
export const visitorList = document.querySelector('#visitorList');



export const showLoginForm = () => {
  login.style.display = 'block'
  app.style.display = 'none'  
}

export const showApp = () => {
  login.style.display = 'none'
  app.style.display = 'block'
}

// export const hideLoginError = () => {
//   divLoginError.style.display = 'none'
//   lblLoginErrorMessage.innerHTML = ''
// }


export const showLoginError = (error) => {
  divLoginError.style.display = 'block'    
  if (error.message == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
  }
  else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
  }
}

// export const showLoginState = (user) => {
//   lblAuthState.innerHTML = `Click here to view visitors `
// }

//Creates Visitor Card
export const renderVisitorCard = (visitor) => {
    const visitorCard = document.createElement('div');
    visitorCard.classList.add('visitor-card');
    visitorCard.setAttribute('draggable','true');
    visitorCard.innerHTML = `
      <p>${visitor.firstName} ${visitor.surName}</p>
      <p>${visitor.emailAddress} </p>
    `;
    return visitorCard;
  };

  export const visitor = document.querySelector('.visitor-card');
  export const dropCard = document.querySelector('.lanes');
  

  export const draggables = () =>{
  dropCard.forEach((task)=>{
    task.addEventListener("dragstart", ()=>{
      task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", ()=> {
      task.classList.remove("is-dragging");
    });
  });
}
