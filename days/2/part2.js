input.split("\n").map(round => round.split(' ').reduce((opponent, me) => (me == "X" ? (opponent == "A" ? 3 : (opponent == "B" ? 1 : 2)) : (me == "Y" ? (opponent == "A" ? 4 : (opponent == "B" ? 5 : 6)) : (opponent == "A" ? 8 : (opponent == "B" ? 9 : 7)))))).reduce((cur, next) => cur + next);
