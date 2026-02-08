const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paintbrush = canvas.getContext("2d")

// line
paintbrush.beginPath()
paintbrush.moveTo(50, 100)
paintbrush.lineTo(400, 100)
paintbrush.strokeStyle = "orangered"
paintbrush.stroke()

// rectangle
paintbrush.fillStyle = "orange"
paintbrush.fillRect(50, 150, 100, 100)
paintbrush.fillStyle = "green"
paintbrush.fillRect(150, 300, 100, 100)
paintbrush.fillStyle = "pink"
paintbrush.fillRect(250, 450, 100, 100)

//arc/circle


for (let i = 0; i < 50; i++) {
    let strokeColors = ["red", "blue", "green", "black"]
    let randomStrokeColors = strokeColors[Math.floor(Math.random() * strokeColors.length)]
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    paintbrush.beginPath()
    paintbrush.arc(x, y, 30, 0, Math.PI * 2, false)
    paintbrush.strokeStyle = randomStrokeColors
    paintbrush.stroke()
}