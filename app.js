$(document).ready(function () {

    init();
});

var total = 0;

function init() {

    $("body").prepend("<p>Employee Salary Calculator</p>");
}

function submitEmployee() {

    var nameText = $("#name").val();
    var idText = $("#id").val();
    var salaryText = $("#salary").val();

    total += parseFloat(salaryText);

    $("#name").val("");
    $("#id").val("");
    $("#salary").val("");


    $("#employee").append("<p>" + nameText + " : " + idText + " : $" + salaryText + "</p>");
    $("#totalSalary").text("Total Salary: $" + total);
}

function resetBtn() {
    total = 0;
    $("#totalSalary").text("Total Salary: $" + total);
    $("#employee").empty();
}