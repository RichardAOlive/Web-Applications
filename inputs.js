function inputs(){
    var custName = document.getElementById("fname").value;
    var custEmail = document.getElementById("Email").value;
    alert("Hello " + custName + "\r\n" + "We will contact you at " + custEmail + "\r\n" + "We appreciate your feedback.");

    document.getElementById("frm1").submit();
}
