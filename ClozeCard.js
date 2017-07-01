function ClozeCard(text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = "..." + this.fullText.split(cloze).pop();
};
module.exports = ClozeCard;

var george = new ClozeCard("George was the first prez.", 'George');

console.log(george.cloze);

console.log(george.partial);

console.log(george.fullText);