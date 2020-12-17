let teamJohnAverage = Math.round((119 + 120 + 103) / 3);
let teamMikeAverage = Math.round((116 + 94 + 123) / 3);

if (teamJohnAverage > teamMikeAverage) {
	console.log(`John's team wins with ${teamJohnAverage} points.`);
} else if (teamJohnAverage < teamMikeAverage) {
	console.log(`Mike's team wins with ${teamMikeAverage} points.`);
} else {
	console.log(`There is draw. Both teams got ${teamMikeAverage} points`);
}
