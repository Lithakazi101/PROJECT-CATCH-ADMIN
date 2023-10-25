import { AuthErrorCodes } from 'firebase/auth';

export const email = document.querySelector('#email')
export const password = document.querySelector('#password')

export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#logout-button')

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')
export const visitorList = document.getElementById('visitorList');



export const showLoginForm = () => {
  login.style.display = 'block'
  app.style.display = 'none'  
}

export const showApp = () => {
  login.style.display = 'none'
  app.style.display = 'block'
}

export const hideLoginError = () => {
  divLoginError.style.display = 'none'
  lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  divLoginError.style.display = 'block'    
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
  }
  else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
  }
}

export const showLoginState = (user) => {
  lblAuthState.innerHTML = `You're logged in as  (uid: ${user.uid}, email: ${user.email}) `
}


export const renderVisitorCard = (visitor) => {
    const visitorCard = document.createElement('div');
    visitorCard.classList.add('visitor-card');
    visitorCard.innerHTML = `
      <h2>${visitor.firstName} ${visitor.surName}</h2>
      <p><strong>Created At:</strong> ${new Date(visitor.createdAt.seconds * 1000)}</p>
    `;
    return visitorCard;
  };
  
hideLoginError()