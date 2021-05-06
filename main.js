var canvas=document.getElementById("Can")
var ctx= canvas.getContext("2d")
car="car.jfif"
background="https://i.pinimg.com/originals/7c/f6/32/7cf632aed6bd21606d27d9d84064ff3a.png"
car_x=10
car_y=50
car_width=200
car_height=90

function add(){
    background_Img=new Image(); //defining a var with a new image
    background_Img.onload= uploadBg; //calling a function on screen load
    background_Img.src=background; //adding the img source

    car_Img=new Image(); //defining a var with a new image
    car_Img.onload= uploadcar; //calling a function on screen load
    car_Img.src=car; //adding the img source
}
function uploadBg(){
    ctx.drawImage(background_Img, 0,0, canvas.width, canvas.height)
}
function uploadcar(){
    ctx.drawImage(car_Img, car_x, car_y, car_width, car_height)
}