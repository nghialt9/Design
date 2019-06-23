// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that will contain the game
var main_state = {

    // Function called first to load all the assets
    preload: function() {
        // Change the background color of the game
        this.game.stage.backgroundColor = '#71c5cf';

        // Load the bird sprite
        this.game.load.image('bird', '../assets/bird.png');

        // Load the pipe sprite
        this.game.load.image('pipe', '../assets/pipe.png');

        game.load.audio('jump', '../assets/jump.wav');

    },

    // Fuction called after 'preload' to setup the game 
    create: function() {
        // Display the bird on the screen
        this.bird = this.game.add.sprite(100, 245, 'bird');

        // Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;
        this.bird.anchor.setTo(-0.2, 0.5);

        // Call the 'jump' function when the spacekey is hit
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);

        // click / touch to jump
        game.input.onDown.add(this.jump, this);

        // Create a group of 20 pipes
        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');

        // Timer that calls 'add_row_of_pipes' ever 1.5 seconds
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);

        this.jumpSound = game.add.audio('jump');

        // Add a score label on the top left of the screen
        this.score = 0;
        this.count = 0;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style);
    },

    // This function is called 60 times per second
    update: function() {
        // If the bird is out of the world (too high or too low), call the 'restart_game' function
        if (this.bird.inWorld == false)
            this.restart_game();

        if (this.bird.angle < 20)
            this.bird.angle += 1;
        // If the bird overlap any pipes, call 'restart_game'
        this.game.physics.overlap(this.bird, this.pipes, this.hitPipe, null, this);
    },

    // Make the bird jump 
    jump: function() {
        if (this.bird.alive == true) {
            this.jumpSound.play();

            // Add a vertical velocity to the bird
            this.bird.body.velocity.y = -350;
            // Create an animation on the bird
            var animation = game.add.tween(this.bird);

            // Change the angle of the bird to -20° in 100 milliseconds
            animation.to({ angle: -20 }, 100);

            // And start the animation
            animation.start();
        }
    },

    // Restart the game
    restart_game: function() {
        // Remove the timer
        this.game.time.events.remove(this.timer);

        // Start the 'main' state, which restarts the game
        this.game.state.start('main');
    },

    hitPipe: function() {
        // If the bird has already hit a pipe, do nothing
        // It means the bird is already falling off the screen
        if (this.bird.alive == false)
            return;

        // Set the alive property of the bird to false
        this.bird.alive = false;

        // Prevent new pipes from appearing
        game.time.events.remove(this.timer);

        // Go through all the pipes, and stop their movement
        this.pipes.forEach(function(p) {
            p.body.velocity.x = 0;
        }, this);
    },

    // Add a pipe on the screen
    add_one_pipe: function(x, y) {
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        pipe.reset(x, y);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200;

        // Kill the pipe when it's no longer visible 
        pipe.outOfBoundsKill = true;
    },

    // Add a row of 6 pipes with a hole somewhere in the middle
    add_row_of_pipes: function() {
        var hole = Math.floor(Math.random() * 5) + 1;

        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1)
                this.add_one_pipe(400, i * 60 + 10);

        if (this.count > 0)
            this.score += 1;
        this.label_score.content = this.score;
        this.count += 1;
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);
game.state.start('main');