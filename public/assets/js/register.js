/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    
    function login() {
         $.ajax({url: "login.php"});
    }
    
    console.log("start_screen.js");
    $('#login').click(login);

});
