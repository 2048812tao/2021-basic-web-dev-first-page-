function randomNum(x, y){
    console.log(x, "+", y, "=", x+y);
    console.log(x, "-", y, "=", x-y);
    console.log(x, "*", y, "=", x*y);
    console.log(x, "/", y, "=", x/y);
}
randomNum(Math.ceil(Math.random()*100), Math.ceil(Math.random()*100))