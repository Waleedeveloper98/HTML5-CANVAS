const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d")

ctx.fillRect(40, 40, 100, 100)
ctx.fillRect(100, 200, 100, 100)
ctx.fillRect(200, 400, 100, 100)