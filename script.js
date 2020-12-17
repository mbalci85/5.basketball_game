let teamJohnAverage = Math.round((124 + 120 + 103) / 3);
let teamMikeAverage = Math.round((129 + 120 + 103) / 3);
let teamMaryAverage = Math.round((103 + 104 + 145) / 3);

// if (teamJohnAverage > teamMikeAverage) {
// 	console.log(`John's team wins with ${teamJohnAverage} points.`);
// } else if (teamJohnAverage < teamMikeAverage) {
// 	console.log(`Mike's team wins with ${teamMikeAverage} points.`);
// } else {
// 	console.log(`There is draw. Both teams got ${teamMikeAverage} points`);
// }

console.log("John's team: " + teamJohnAverage);
console.log("Mike's team: " + teamMikeAverage);
console.log("Mary's team: " + teamMaryAverage);

if (teamMikeAverage > teamMaryAverage && teamMikeAverage > teamJohnAverage) {
	console.log(`Mike's team wins with ${teamMikeAverage} points.`);
} else if (
	teamMaryAverage > teamMikeAverage &&
	teamMaryAverage > teamJohnAverage
) {
	console.log(`Mary's team wins with ${teamMaryAverage} points.`);
} else if (
	teamJohnAverage > teamMikeAverage &&
	teamJohnAverage > teamMaryAverage
) {
	console.log(`John's team wins with ${teamJohnAverage} points.`);
} else if (
	teamJohnAverage == teamMikeAverage &&
	teamJohnAverage == teamMaryAverage
) {
	console.log(`There is draw and all teams scored ${teamJohnAverage} points.`);
} else if (
	teamJohnAverage == teamMikeAverage &&
	teamJohnAverage > teamMaryAverage
) {
	console.log(
		`There is draw between John's and Mike's team with ${teamJohnAverage} points.`,
	);
} else if (
	teamMaryAverage == teamMikeAverage &&
	teamMaryAverage > teamJohnAverage
) {
	console.log(
		`There is draw between Mary's and Mike's team with ${teamMaryAverage} points.`,
	);
} else if (
	teamMaryAverage == teamJohnAverage &&
	teamMaryAverage > teamMikeAverage
) {
	console.log(
		`There is draw between Mary's and John's team with ${teamMaryAverage} points.`,
	);
}
