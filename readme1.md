src/
|   App.jsx
|   index.css
|   main.jsx
|   
+---assets
|       about.png
|       avatar.jpg
|       chatbot.json
|       document-drafting.webp
|       image_robot.webp
|       legal-advice.webp
|       legal-queries.webp
|       mock-trial.png
|       mock-trial.webp
|       quan.jpg
|       react.svg
|       shape-23.png
|       shape-24.png
|       shape-25.png
|       shape-26.png
|       shape-47.png
|       shape-48.png
|       shape-49.png
|       shape-50.png
|       shape-51.png
|       shape-51.webp
|       shape-52.png
|       voice.webp
|       
+---component
|   +---GoToTop
|   |       GoToTop.css
|   |       GoToTop.jsx
|   |       
|   \---ui
|       |   alert.tsx
|       |   avatar.tsx
|       |   button.tsx
|       |   dialog.tsx
|       |   dropdown-menu.tsx
|       |   form.tsx
|       |   input.tsx
|       |   label.tsx
|       |   navigation-menu.tsx
|       |   progress.tsx
|       |   select.tsx
|       |   separator.tsx
|       |
|       +---alert
|       |       Alert.css
|       |       Alert.jsx
|       |
|       +---avatar
|       |       Avatar.css
|       |       Avatar.jsx
|       |
|       +---button
|       |       Button.jsx
|       |
|       +---dialog
|       |       Dialog.jsx
|       |
|       +---dropdownmenu
|       |       DropdownMenu.jsx
|       |
|       \---separator
|               Separator.css
|               Separator.jsx
|
+---layouts
|   +---DefaultLayout
|   |       DefaultLayout.css
|   |       DefaultLayout.jsx
|   |
|   \---partials
|       +---Footer
|       |       Footer.css
|       |       Footer.jsx
|       |
|       \---Navbar
|               Navbar.css
|               NavBar.jsx
|
+---lib
|       utils.js
|
+---pages
|   +---About
|   |       About.css
|   |       About.jsx
|   |
|   +---Auth
|   |   +---ForgotPassword
|   |   |       ForgotPassword.css
|   |   |       ForgotPassword.jsx
|   |   |
|   |   +---Login
|   |   |       Loginpage.css
|   |   |       LoginPage.jsx
|   |   |
|   |   +---ProfilePage
|   |   |       ProfilePage.css
|   |   |       ProfilePage.jsx
|   |   |
|   |   \---Register
|   |           Registerpage.css
|   |           Registerpage.jsx
|   |
|   +---Chat
|   |   |   ChatAreaLayout.jsx
|   |   |   IndexPage.jsx
|   |   |
|   |   +---LayoutChat
|   |   |   +---Chatarea
|   |   |   |       Chatarea.css
|   |   |   |       Chatarea.jsx
|   |   |   |
|   |   |   +---Chatprompt
|   |   |   |       Chatpromt.jsx
|   |   |   |
|   |   |   +---Chatrow
|   |   |   |       Chatrow.jsx
|   |   |   |
|   |   |   +---Header
|   |   |   |       Header.css
|   |   |   |       Header.jsx
|   |   |   |
|   |   |   +---Message
|   |   |   |       Message.css
|   |   |   |       Message.jsx
|   |   |   |
|   |   |   +---Newchat
|   |   |   |       Newchat.jsx
|   |   |   |
|   |   |   \---Sidebar
|   |   |           Sidebar.css
|   |   |           Sidebar.jsx
|   |   |
|   |   \---[id]
|   |           Chatpage.css
|   |           Chatpage.jsx
|   |
|   +---Contact
|   |       Contact.css
|   |       Contact.jsx
|   |
|   +---Donation
|   |       Donation.css
|   |       Donation.jsx
|   |
|   +---Feature
|   |       Feature.css
|   |       Feature.jsx
|   |
|   +---Homepage
|   |       Homepage.css
|   |       Homepage.jsx
|   |
|   \---Pricing
|           Pricing.css
|           Pricing.jsx
|
+---redux
|   |   base.js
|   |   provider.jsx
|   |   store.js
|   |
|   \---slices
|           app.js
|           auth.js
|           chat.js
|
+---route
|       index.jsx
|
+---test_redux
|       testredux.js
|
\---utils
        axios.js