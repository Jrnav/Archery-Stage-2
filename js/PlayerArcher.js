class playerArcher {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height)
        this.width = width
        this.height = height
        this.image = loadImage("./assets/playerArcher.png")

        World.add(world, this.body)
    }

    display() {
        push()
        
    }
}