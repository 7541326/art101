// Snake
// An implementation of the game
// Laura Zhou
// April 2025


// Define variables to hold score, etc.
// Draw UI on screen (a grid)
// Draw game elements on screen (snake with a starting length of 1, apple)
// Take user input
    // Upon first input, snake begins moving and does not stop 
    // Based on which button the user presses, change snake direction
// While the snake moves, make checks for conditions:
    // If the snake touches an apple:
        // Delete the apple and put another apple somewhere else (cannot be in an occupied square),
        // Add to the snake's length,
         //+1 to score variable
    // If the snake touches a wall (edge of board): 
        // Stop snake movement, 
        // Game over
    // If the snake touches another segment of the snake:
        // Stop snake movement, 
        // Game over
// On game over:
    // Update high score variable with current score,
    // Display game over screen, with current score and high score
// Take user input (start new game)
    // Clear the current score variable for a new game,
    // Reset board
        // Snake length reset to 1, 
        // Snake position and direction reset to starting position,
        // Apple deleted and replaced in starting position
// Take user input (to move snake and play another game, etc.)
