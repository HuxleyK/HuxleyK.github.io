function algo(teamone, teamtwo)
{
  var OneTTop = [385,8,4,64]; // Gold per min , CS per min, kills, win perc
  var OneTjungle = [346,5,3,51];
  var OneTMid = [406,9,5,62];
  var OneTBot = [428,10,5,52];
  var OneTSupport = [266,1,5,62];

  var Cloud9Top = [396,9,3,60];
  var Cloud9jungle = [364,6,4,72];
  var Cloud9Mid = [395,9,5,56];
  var Cloud9Bot = [429,10,5,61];
  var Cloud9Support = [247,1,4,50];

  var CLogicTop = [398,8,3,56];
  var CLogicjungle = [330,5,3,53];
  var ClogicMid = [401,9,3,55];
  var OneTBot = [413,9,4,51];
  var OneTSupport = [253,1,4,56];

  var DignTop = [403,8,3,62];
  var Dignjungle = [318,5,3,52];
  var DignMid = [395,9,4,45];
  var DignBot = [398,9,3,27];
  var DignSupport = [253,1,3,53];

  var SoloMidTop = [385,8,4,64];
  var SoloMidjungle = [346,5,3,51];
  var SoloMidMid = [406,9,5,62];
  var SoloMidBot = [428,10,5,52];
  var SoloMidSupport = [266,1,5,62];

  var LiquidTop = [373,8,4,63];
  var Liquidjungle = [355,6,3,64];
  var LiquidMid = [418,9,5,60];
  var LiquidBot = [431,9,5,63];
  var LiquidSupport = [279,3,4,59];

  var FlyTop = [448,10,7,63];
  var Flyjungle = [319,4,5,49];
  var FlyMid = [401,9,4,54];
  var FlyBot = [407,9,4,56];
  var FlySupport = [248,1,4,42];

  var Goldenjungle = [393,8,4,60];
  var GoldenTop = [344,5,4,69];
  var GoldenMid = [398,9,4,51];
  var GoldenBot = [451,10,5,60];
  var GoldenSupport = [389,8,3,49];

  var Eviljungle = [385,8,4,66];
  var EvilTop = [335,4,3,62];
  var EvilMid = [405,9,3,54];
  var EvilBot = [425,9,6,64];
  var EvilSupport = [262,1,4,60];

  var Immortaljungle = [358,7,3,57];
  var ImmortalTop = [334,5,4,57];
  var ImmortalMid = [410,9,4,61];
  var ImmortalBot = [404,9,4,48];
  var ImmortalSupport = [260,1,3,41];


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
