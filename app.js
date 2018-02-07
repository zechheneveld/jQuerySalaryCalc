var total = 0;

$(document).ready(function () {

    init();
});


function init() {

    $("body").prepend("<p>Employee Salary Calculator</p>");


    $("#employee").on('click', '.deleteBtn', function () {

        console.log("Meow");

    });
}

function submitEmployee() {

    var nameText = $("#name").val();
    var idText = $("#id").val();
    var salaryText = $("#salary").val();

    total += parseFloat(salaryText);

    $("#name").val("");
    $("#id").val("");
    $("#salary").val("");


    //$("#employee").append("<p>" + nameText + " : " + idText + " : $" + salaryText + "</p>");
    $("#totalSalary").text("Total Salary: $" + total);

    $("#employee").append("<div></div>");
    var zechsNewElement = $("#employee").children().last();
    zechsNewElement.append("<span>" + nameText + " : " + idText + " : $" + salaryText + "   " + "</span>");
    zechsNewElement.append("<button class='deleteBtn'>Delete</button>");

}

function resetBtn() {
    total = 0;
    $("#totalSalary").text("Total Salary: $" + total);
    $("#employee").empty();
}