input.split("\n\n").map(items => items.split("\n").map(item => parseInt(item)).reduce((cur, next) => cur + next)).sort((cur, next) => next - cur).slice(0, 3).reduce((cur, next) => cur + next);
