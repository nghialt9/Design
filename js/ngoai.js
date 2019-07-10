angular.element(document).ready(function() {
    $("#txtDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
});

function decrementQty() {
    document.getElementById('numDay').value = parseInt(document.getElementById('numDay').value) - 1;
}

function incrementQty() {
    document.getElementById('numDay').value = parseInt(document.getElementById('numDay').value) + 1;
}

function getdate() {
    var tt = document.getElementById('txtDate').value;
    var initial = tt.split(/\//).reverse().join('/');

    var date = new Date(initial);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + parseInt(document.getElementById('numDay').value) - 1);

    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = dd + '/' + mm + '/' + y;
    document.getElementById('follow_Date').value = someFormattedDate;
}