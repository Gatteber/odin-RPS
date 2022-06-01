# odin-RPS
Rock Paper Scissors Assignment in JS


Fetch the CPU Input (Done)
Cpu Input -> return rock, paper, scissors
Start game loop
Ask for user input
Compare, return, done.

        //Approaching the RPS problem.
        //Play 1 game
        //Play 5 rounds
        //Need CPU input (random)
        //Need User input
        //compare and display results

        //Start by 1 round
        //pick a random input using math.random and math.floor
        //convert the int to lower(rock (1), paper(2), scissors(3))
        // Rock -> Paper
        // Rock -> Scissors       +
        // Rock -> Rock           +
        // Paper -> Scissors
        // Paper -> Paper         +
        // Scissors -> Scissors   +
        // Paper -> Rock          +
        // Scissors -> Paper      +
        // Scissors -> Rock
        // p, r, s
        // if u.inp = cpu.inp : tie
        // if inp1 = r and inp2 = s
        // winner
        // if inp.1 = p and inp2 = r
        // winner
        // if inp.1 = s and inp2 = p
        // winner
        // else
        // loser
        // display output and tell winner.