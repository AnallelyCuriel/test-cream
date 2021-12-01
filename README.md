About this project
This project read API services to get registration data in JSON form and render it to view page.
Steps:
• Create login page, validate autentication data.
• Create a site which renders registration fields of our Affiliate API. 
• FetchtheregistrationfieldsfromaffiliateAPIfunction: https://platon.cf-it.at/affiliate/getRegistrationFields
• Cache them on the server side using Redis
• Render them via the template engine Pug and using Formio library
• Validate the input of the registrationfields using Formio library

NodeJS Express project 
• Pug    - template engine                                                           • Redis  - as session and caching storage Affiliate API data
• Gulp   - to build assets (js, sass, images etc.)
• Formio - to render JSON in Form registration.
• JsDocs - to document the project.

About Formio (https://formio.github.io/formio.js/) 

This library is a plain JavaScript form renderer and SDK for Form.io. This allows you to render the JSON schema forms produced by Form.io and render those within your application using plain JavaScript, as well as provides an interface SDK to communicate to the Form.io API's. The benefits of this library include.

     * Plain JavaScript implementation using ES6 and Modern practices (no jQuery,      Angular, React, or any other framework dependency)
     * Renders a JSON schema as a webform and hooks up that form to the Form.io API's
     * Complete Form Builder which creates the JSON schema used to render the forms.
     * Nested components, layouts, Date/Time, Select, Input Masks, and many more included features
     * Full JavaScript API SDK library on top of Form.io

    Wizard Rendering
    This library can also be used to render a form wizard within your application using the same method as rendering a form. The determiniation on whether it should render as a wizard or not is based on the display property of the form schema being set to wizard.

        <html>
        <head>
            <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'>
            <link rel='stylesheet' href='https://cdn.form.io/formiojs/formio.full.min.css'>
            <script src='https://cdn.form.io/formiojs/formio.full.min.js'></script>
            <script type='text/javascript'>
            window.onload = function() {
                Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/wizard');
            };
            </script>
        </head>
        <body>
            <div id='formio'></div>
        </body>
        </html>

Getting Started

1.- Clone the repo
    git clone https://github.com/AnallelyCuriel/test-cream.git
2.- Install NPM packages    
    npm install
3.- Run 
    npm run dev
4.- Application 
    http://localhost:8000/


Contact
Anallely Curiel  - anallely.curiel@gmail.com

Project Link: https://github.com/AnallelyCuriel/test-cream

