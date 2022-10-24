/**
 * file: js.js
 */
 console.log("Hi from js.js")

 //nav bar
const NavBar = `
<div class="sidenav">
    <a href="../front-page/index.html">Home</a>
    <a href ="../calendar/calendar">Calendar</a>
    <a href="../announcements/announcements.html">Announcments</a>
    <a href="../facilities/facilities.html">Facilities</a>
    <a href="../ideas/ideas.html">Ideas</a>
    <a href ="../contact/contact.html">Contact</a>
    </div>
`

 document.getElementById("nav").innerHTML= NavBar