/**
 * file: js.js
 */
 console.log("Hi from js.js")

 //nav bar
const NavBar = `
<div class="sidenav">
    <a href="../front-page/index.html"><img src="../images/icons/home.png" class="icon"></a>
    <a href ="../calendar/calendar"><img src="../images/icons/nav.cal.png" class="icon"></a>
    <a href="../announcements/announcements.html"><img src="../images/icons/nav.an.png" class="icon"></a>
    <a href="../facilities/facilities.html"><img src="../images/icons/nav.map.png" class="icon"></a>
    <a href="../ideas/ideas.html"><img src="../images/icons/nav.id.png" class="icon"></a>
    <a href ="../contact/contact.html"><img src="../images/icons/nav.con.png" class="icon"></a>
    </div>
`

 document.getElementById("nav").innerHTML= NavBar