function submit() {
    
    var amount = $("#amount").val();
    var expiry = $("#expiry").val();
    var details = $("#details").val();
    var code = $("#code").val();
    var location = $("#location").val();
    
    if(amount == null || expiry == null || details == null || code == null || location == null) {
        alert("Please fill in all the fields");
    } else {
        coupons.push({
            amount: amount,
            expiry: expiry,
            details: details,
            code: code,
            location: location
        });
    
        alert("Coupon Added");
    }
}