import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user have access to Sbux application', () => {
 // do nothing 
});

Then('user should be able to login to Sbux-application', () =>{
  cy.login();
})





