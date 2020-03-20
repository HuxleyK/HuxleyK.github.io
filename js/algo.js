function algo(teamone, teamtwo)
{
  var OneTjungle = [8,5,7,10]; // Gold per min , CS per min, kills, win perc
  var OneTTop = [10,10,10,10];
  var OneTMid = [10,10,10,10];
  var OneTBot = [10,10,10,10];
  var OneTSupport = [10,10,10,10];

  var Cloud9jungle = [9,4,9,5];
  var Cloud9Top = [5,5,5,5];
  var Cloud9Mid = [5,5,5,5];
  var Cloud9Bot = [5,5,5,5];
  var Cloud9Support = [5,5,5,5];

  var CLogicjungle = [7,9,8,3];
  var CLogicTop = [9,8,5,6];
  var ClogicMid = [4,5,7,6];
  var OneTBot = [1,2,7,4];
  var OneTSupport = [2,3,5,5];
  
  var Dignjungle = [0,0,0,0];
  var DignTop = [0,0,0,0];
  var DignMid = [0,0,0,0];
  var DignBot = [0,0,0,0];
  var DignSupport = [0,0,0,0];
  
  var SoloMidjungle = [0,0,0,0];
  var SoloMidTop = [0,0,0,0];
  var SoloMidMid = [0,0,0,0];
  var SoloMidBot = [0,0,0,0];
  var SoloMidSupport = [0,0,0,0];
  
  var Liquidjungle = [0,0,0,0];
  var LiquidTop = [0,0,0,0];
  var LiquidMid = [0,0,0,0];
  var LiquidBot = [0,0,0,0];
  var LiquidSupport = [0,0,0,0];
  
  var Flyjungle = [0,0,0,0];
  var FlyTop = [0,0,0,0];
  var FlyMid = [0,0,0,0];
  var FlyBot = [0,0,0,0];
  var FlySupport = [0,0,0,0];
  
  var Goldenjungle = [0,0,0,0];
  var GoldenTop = [0,0,0,0];
  var GoldenMid = [0,0,0,0];
  var GoldenBot = [0,0,0,0];
  var GoldenSupport = [0,0,0,0];
  
  var Eviljungle = [0,0,0,0];
  var EvilTop = [0,0,0,0];
  var EvilMid = [0,0,0,0];
  var EvilBot = [0,0,0,0];
  var EvilSupport = [0,0,0,0];
  
  var Immortaljungle = [0,0,0,0];
  var ImmortalTop = [0,0,0,0];
  var ImmortalMid = [0,0,0,0];
  var ImmortalBot = [0,0,0,0];
  var ImmortalSupport = [0,0,0,0];


  var BaseJungle = [0,0,0,0];
  var BaseTop = [0,0,0,0];
  var BaseMid = [0,0,0,0];
  var BaseBot = [0,0,0,0];
  var BaseSupport = [0,0,0,0];

  var Base2Jungle = [0,0,0,0];
  var Base2Top = [0,0,0,0];
  var Base2Mid = [0,0,0,0];
  var Base2Bot = [0,0,0,0];
  var Base2Support = [0,0,0,0];

  var t1select = "OneT";
  var t2select = "Cloud9";

  var jungleWinner = "";
  var topWinner = "";
  var midWinner = "";
  var botWinner = "";
  var supportWinner = "";


  if(t1select == "OneT")
  {
	  BaseJungle = OneTjungle;
	  BaseTop = OneTTop;
	  BaseMid = OneTMid;
	  BaseBot = OneTBot;
	  BaseSupport = OneTSupport;
  }

  else if(t1select == "Cloud9")
  {
	  BaseJungle = Cloud9jungle;
	  BaseTop = Cloud9Top;
	  BaseMid = Cloud9Mid;
	  BaseBot = Cloud9Bot;
	  BaseSupport = Cloud9Support;
  }
  else if(t1select == "CLogic")
	{
	  BaseJungle = CLogicjungle;
	  BaseTop = CLogicTop;
	  BaseMid = CLogicMid;
	  BaseBot = ClogicBot;
	  BaseSupport = CLogicSupport;
	}
	
	else if(t1select == "Dignitas")
	{
	  BaseJungle = DignJungle;
	  BaseTop = DignTop;
	  BaseMid = DignMid;
	  BaseBot = DignBot;
	  BaseSupport = DignSupport;
	}
	
	else if(t1select == "Immortals")
	{
	  BaseJungle = Immortaljungle;
	  BaseTop = ImmortalTop;
	  BaseMid = ImmortalMid;
	  BaseBot = ImmortalBot;
	  BaseSupport = ImmortalSupport;
	}
	
	else if(t1select == "EvilGeniuses")
	{
	  BaseJungle = Eviljungle;
	  BaseTop = EvilTop;
	  BaseMid = EvilMid;
	  BaseBot = EvilBot;
	  BaseSupport = EvilSupport;
	}
	
	else if(t1select == "GoldenGuardians")
	{
	  BaseJungle = Goldenjungle;
	  BaseTop = GoldenTop;
	  BaseMid = GoldenMid;
	  BaseBot = GoldenBot;
	  BaseSupport = GoldenSupport;
	}
	
	else if(t1select == "FlyQuest")
	{
	  BaseJungle = Flyjungle;
	  BaseTop = FlyTop;
	  BaseMid = FlyMid;
	  BaseBot = FlyBot;
	  BaseSupport = FlySupport;
	}
	
	else if(t1select == "Liquid")
	{
	  BaseJungle = Liquidjungle;
	  BaseTop = LiquidTop;
	  BaseMid = LiquidMid;
	  BaseBot = LiquidBot;
	  BaseSupport = LiquidSupport;
	}
	
	else if(t1select == "SoloMid")
	{
	  BaseJungle = SoloMidjungle;
	  BaseTop = SoloMidTop;
	  BaseMid = SoloMidMid;
	  BaseBot = SoloMidBot;
	  BaseSupport = SoloMidSupport;
	}


	if(t2select == "OneT")
  {
	  Base2Jungle = OneTjungle;
	  Base2Top = OneTTop;
	  Base2Mid = OneTMid;
	  Base2Bot = OneTBot;
	  Base2Support = OneTSupport;
  }

  else if(t2select == "Cloud9")
  {
	  Base2Jungle = Cloud9jungle;
	  Base2Top = Cloud9Top;
	  Base2Mid = Cloud9Mid;
	  Base2Bot = Cloud9Bot;
	  Base2Support = Cloud9Support;
  }
  else if(t2select == "CLogic")
	{
	  Base2Jungle = CLogicjungle;
	  Base2Top = CLogicTop;
	  Base2Mid = CLogicMid;
	  Base2Bot = ClogicBot;
	  Base2Support = CLogicSupport;
	}
	
	else if(t2select == "Dignitas")
	{
	  Base2Jungle = DignJungle;
	  Base2Top = DignTop;
	  Base2Mid = DignMid;
	  Base2Bot = DignBot;
	  Base2Support = DignSupport;
	}
	
	else if(t2select == "Immortals")
	{
	  Base2Jungle = Immortaljungle;
	  Base2Top = ImmortalTop;
	  Base2Mid = ImmortalMid;
	  Base2Bot = ImmortalBot;
	  Base2Support = ImmortalSupport;
	}
	
	else if(t2select == "EvilGeniuses")
	{
	  Base2Jungle = Eviljungle;
	  Base2Top = EvilTop;
	  Base2Mid = EvilMid;
	  Base2Bot = EvilBot;
	  Base2Support = EvilSupport;
	}
	
	else if(t2select == "GoldenGuardians")
	{
	  Base2Jungle = Goldenjungle;
	  Base2Top = GoldenTop;
	  Base2Mid = GoldenMid;
	  Base2Bot = GoldenBot;
	  Base2Support = GoldenSupport;
	}
	
	else if(t2select == "FlyQuest")
	{
	  Base2Jungle = Flyjungle;
	  Base2Top = FlyTop;
	  Base2Mid = FlyMid;
	  Base2Bot = FlyBot;
	  Base2Support = FlySupport;
	}
	
	else if(t2select == "Liquid")
	{
	  Base2Jungle = Liquidjungle;
	  Base2Top = LiquidTop;
	  Base2Mid = LiquidMid;
	  Base2Bot = LiquidBot;
	  Base2Support = LiquidSupport;
	}
	
	else if(t2select == "SoloMid")
	{
	  Base2Jungle = SoloMidjungle;
	  Base2Top = SoloMidTop;
	  Base2Mid = SoloMidMid;
	  Base2Bot = SoloMidBot;
	  Base2Support = SoloMidSupport;
	}
	
	var TeamOneTotal = 0;
	var TeamTwoTotal = 0;

	jungleWinner = comparejungle(BaseJungle, Base2Jungle);
	if(jungleWinner == 1)
	{
		TeamOneTotal++;
	}
	else if(jungleWinner == 2)
	{
		TeamTwoTotal++;
	}
	
	topWinner = compareTop(BaseTop, Base2Top);
	if(topWinner == 1)
	{
		TeamOneTotal++;
	}
	else if(topWinner == 2)
	{
		TeamTwoTotal++;
	}
	
	midWinner = compareMid(BaseMid, Base2Mid);
	if(midWinner == 1)
	{
		TeamOneTotal++;
	}
	else if(midWinner == 2)
	{
		TeamTwoTotal++;
	}
	
	botWinner = compareBot(BaseBot, Base2Bot);
	if(botWinner == 1)
	{
		TeamOneTotal++;
	}
	else if(botWinner == 2)
	{
		TeamTwoTotal++;
	}
	
	supportWinner = compareSupport(BaseSupport, Base2Support);
	if(supportWinner == 1)
	{
		TeamOneTotal++;
	}
	else if(supportWinner == 2)
	{
		TeamTwoTotal++;
	}
	
	return TeamOneTotal;
}




