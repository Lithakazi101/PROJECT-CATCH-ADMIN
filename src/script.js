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
export const viewPage = document.getElementById('viewPage')


// export const viewEPage = () =>{
// viewPage.addEventListener('click',() =>{
//   window.location.href = "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C5CHFA_enZA1060ZA1061&oq=goo&gs_lcrp=EgZjaHJvbWUqEwgCEC4YgwEYxwEYsQMY0QMYgAQyBggAEEUYOTIGCAEQRRg7MhMIAhAuGIMBGMcBGLEDGNEDGIAEMgYIAxBFGEEyBggEEEUYPDIGCAUQRRg8MgYIBhBFGEEyBggHEEUYQdIBCDQ0NzFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#:~:text=Search%20Results-,Google,https%3A//www.google.com,-Search%20the%20world%27s";
// })
// }

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
hideLoginError()

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
  lblAuthState.innerHTML = `Click here to view visitors `
}
export const detailedList = () => {
  // Create a new paragraph element
  const viewEPage = document.createElement('p');

  // Create a text node with the content "Hi there and greetings!"
  const newContent = document.createTextNode("Hi there and greetings!");

  // Append the text node to the paragraph element
  viewEPage.appendChild(newContent);

  // Append the paragraph element to the 'viewPage' element
  if (viewPage) {
    viewPage.appendChild(viewEPage);
  } else {
    console.error("Element with ID 'viewPage' not found.");
  }
};
export const renderVisitorCard = (visitor) => {
    const visitorCard = document.createElement('div');
    visitorCard.classList.add('visitor-card');
    visitorCard.innerHTML = `
      <h2>${visitor.firstName} ${visitor.surName}</h2>
      <h2>${visitor.emailAddress} </h2>
    `;
    return visitorCard;
  };


