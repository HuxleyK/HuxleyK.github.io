function compareMid(Mid, Mid2)	// Gold per min , CS per min, kills, win %
{
  var goldPerMin1 = Mid[0];
  var goldPerMin2 = Mid2[0];
  var GoldWinner = goldPerMin(goldPerMin1, goldPerMin2);


  var CSPerMin1 = Mid[1];
  var CSPerMin2 = Mid2[1];
  var CSWinner = CSPerMin(CSPerMin1, CSPerMin2);


  var Kills1 = Mid[2];
  var Kills2 = Mid2[2];
  var KillWinner = Kill(Kills1, Kills2);


  var Wins1 = Mid[2];
  var Wins2 = Mid2[2];
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
