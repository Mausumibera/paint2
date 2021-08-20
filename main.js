
var lastx,lasty
canvas =document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
colour ="violet"
widthofline=1
var width=screen.width
var height=screen.height
new_width=width-70
new_height=height-300
if(width<992){
    document.getElementById("mycanvas").width=new_width
    document.getElementById("mycanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart (e)
{
colour =document.getElementById("colour").value
widthofline =document.getElementById("width").value
lastx=e.touches[0].clientX-canvas.offsetLeft
lasty=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove (e)
{
currentx=e.touches[0].clientX-canvas.offsetLeft
currenty=e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle=colour
    ctx.lineWidth=widthofline
    ctx.moveTo(lastx,lasty)
    ctx.lineTo(currentx,currenty)
    ctx.stroke()

lastx=currentx
lasty=currenty
}

function cleararea ()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}