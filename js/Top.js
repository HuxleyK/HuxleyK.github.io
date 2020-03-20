function compareTop(Top, Top2)	// Gold per min , CS per min, kills, win %
{
  var goldPerMin1 = Top[0];
  var goldPerMin2 = Top2[0];
  var GoldWinner = goldPerMin(goldPerMin1, goldPerMin2);


  var CSPerMin1 = Top[1];
  var CSPerMin2 = Top2[1];
  var CSWinner = CSPerMin(CSPerMin1, CSPerMin2);


  var Kills1 = Top[2];
  var Kills2 = Top2[2];
  var KillWinner = Kill(Kills1, Kills2);


  var Wins1 = Top[2];
  var Wins2 = Top2[2];
  var WinsWinner = WinPerc(Wins1, Wins2);

  var OneTotal = 0;
  var TwoTotal = 0;
  var StaleMate = 0;

	// gold Total
  if(GoldWinner == "1")
  {
	OneTotal++;
  }
  else if(GoldWinner == "2")
  {
	  TwoTotal++;
  }
  else
  {
	  StaleMate++;
  }


  // cs winner
  if(CSWinner == "1")
  {
	OneTotal++;
  }
  else if(CSWinner == "2")
  {
	  TwoTotal++;
  }
  else
  {
	  StaleMate++;
  }


  // Kill Winner
  if(KillWinner == "1")
  {
	OneTotal++;
  }
  else if(KillWinner == "2")
  {
	  TwoTotal++;
  }
  else
  {
	  StaleMate++;
  }


  // Win % Winner
  if(WinsWinner == "1")
  {
	OneTotal++;
  }
  else if(WinsWinner == "2")
  {
	  TwoTotal++;
  }
  else
  {
	  StaleMate++;
  }

  if(OneTotal < TwoTotal || OneTotal < StaleMate)
  {
	  return 1;
  }


  else if(TwoTotal < OneTotal || TwoTotal < StaleMate)
  {
	  return 2;
  }


  else if(StaleMate < TwoTotal || StaleMate < OneTotal)
  {
	  return 0;
  }

  
}
