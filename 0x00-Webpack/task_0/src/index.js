import $ from "jquery";

$(document).onload(function () {
    $("body").add("<p>Holberton Dashboard</p>")
    $("body").add("<p>Dashboard data for the students</p>")
    $("body").add("<p>Copyright - Holberton School</p>")
        .appendTo(document.body);
});