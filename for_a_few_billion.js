function a(){
    var sum = .01
    for (var days = 1; days < 31; days += 1){
        sum *= 2;
    }
    console.log(sum);
}

function b(){
    var sum = .01
    var days = 1
    while(sum <= 10000){
        sum *= 2;
        days += 1;
    }
    console.log(days-1);
}

function c(){
    var sum = .01
    var days = 1
    while(sum <= 1000000000){
        sum *= 2;
        days += 1;
    }
    console.log(days-1);
}
c();