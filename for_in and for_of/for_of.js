const student = {
	"name": "Harikrishnan",
	"qualification": "mca",
	"designation": "software engineer"
}
for(const n in student){
	console.log(n);
}
/**
 * Output
 * name
 * qualification
 * designation
 */

for(const n in student){
	console.log(student[n]);
}
/**
 * Output
 * 
 * Harikrishnan
 * mca
 * software engineer
 */