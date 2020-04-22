function updateBracket()
{

	var OneOne = document.getElementById("OneOne").value;
	var OneTwo = document.getElementById("OneTwo").value;
	var OneOneScore = algo(OneOne,OneTwo);
	var OneTwoScore = 5 - OneOneScore;

	var TwoOne = document.getElementById("TwoOne").value;
	var TwoTwo = document.getElementById("TwoTwo").value;
	var TwoOneScore = algo(TwoOne,TwoTwo);
	var TwoTwoScore = 5 - TwoOneScore;

	var ThreeOne = document.getElementById("ThreeOne").value;
	var ThreeTwo = document.getElementById("ThreeTwo").value;
	var ThreeOneScore = algo(ThreeOne,ThreeTwo);
	var ThreeTwoScore = 5 - ThreeOneScore;

	var FourOne = document.getElementById("FourOne").value;
	var FourTwo = document.getElementById("FourTwo").value;
	var FourOneScore = algo(FourOne,FourTwo);
	var FourTwoScore = 5 - FourOneScore;


	if (OneOneScore > OneTwoScore) {
		var QuarterOneWinner = OneOne;
	}
	else {
		var QuarterOneWinner = OneTwo;
	}

	if (TwoOneScore > TwoTwoScore) {
		var QuarterTwoWinner = TwoOne;
	}
	else {
		var QuarterTwoWinner = TwoTwo;
	}

	var SemiOneOneScore = algo(QuarterOneWinner, QuarterTwoWinner);
	var SemiOneTwoScore = 5 - SemiOneOneScore;


	if (ThreeOneScore > ThreeTwoScore) {
		var QuarterThreeWinner = ThreeOne;
	}
	else {
		var QuarterThreeWinner = ThreeTwo;
	}

	if (FourOneScore > FourTwoScore) {
		var QuarterFourWinner = FourOne;
	}
	else {
		var QuarterFourWinner = FourTwo;
	}

	var SemiTwoOneScore = algo(QuarterThreeWinner, QuarterFourWinner);
	var SemiTwoTwoScore = 5 - SemiTwoOneScore;


	if (SemiOneOneScore > SemiOneTwoScore) {
		var SemiOneWinner = QuarterOneWinner;
		var SemiOneLoser = QuarterTwoWinner;
	}
	else {
		var SemiOneWinner = QuarterTwoWinner;
		var SemiOneLoser = QuarterOneWinner;
	}

	if (SemiTwoOneScore > SemiTwoTwoScore) {
		var SemiTwoWinner = QuarterThreeWinner;
		var SemiTwoLoser = QuarterFourWinner;
	}
	else {
		var SemiTwoWinner = QuarterFourWinner;
		var SemiTwoLoser = QuarterThreeWinner;
	}

	var FinalOneScore = algo(SemiOneWinner, SemiTwoWinner);
	var FinalTwoScore = 5 - FinalOneScore;

	var LoserOneScore = algo(SemiOneLoser, SemiTwoLoser);
	var LoserTwoScore = 5 - LoserOneScore;









	var minData = {
			teams : [
				[OneOne,OneTwo],
				[TwoOne,TwoTwo],
				[ThreeOne,ThreeTwo],
				[FourOne,FourTwo]
			],
			results : [
				[[OneOneScore,OneTwoScore], [TwoOneScore,TwoTwoScore], [ThreeOneScore,ThreeTwoScore], [FourOneScore,FourTwoScore]],
				[[SemiOneOneScore,SemiOneTwoScore], [SemiTwoOneScore,SemiTwoTwoScore]],
				[[FinalOneScore,FinalTwoScore], [LoserOneScore,LoserTwoScore]
				]
			]
		}
		$('.tournament').bracket({
			init: minData
		});


}
