function goldPerMin(goldPerMin1, goldPerMin2)
{

	var total = goldPerMin1 + goldPerMin2;

	var j1Percent = Math.round((goldPerMin1 / total) * 100);
	var j2Percent = Math.round((goldPerMin2 / total) * 100);

	var count = 0;
	var wins1 = 0;
	var wins2 = 0;

	while(count < 10)
	{
		var final = Math.round(Math.random() * 100);

		if (final < j1Percent)
		{

		wins1++;
		count++;

		}
		else
		{
			wins2++;
			count++;
		}
	}
	if(wins1 < wins2)
	{
		return "1";
	}
	else if(wins2 < wins1)
	{
		return "2";
	}
	else
	{
		return "Draw";
	}

}

function CSPerMin(CSPerMin1, CSPerMin2)
{


	var total = CSPerMin1 + CSPerMin2;

	var j1Percent = Math.round((CSPerMin1 / total) * 100);
	var j2Percent = Math.round((CSPerMin2 / total) * 100);

	var count = 0;
	var wins1 = 0;
	var wins2 = 0;

	while(count < 10)
	{
		var final = Math.round(Math.random() * 100);

		if (final < j1Percent)
		{

		wins1++;
		count++;

		}
		else
		{
			wins2++;
			count++;
		}
	}
	if(wins1 < wins2)
	{
		return "1";
	}
	else if(wins2 < wins1)
	{
		return "2";
	}
	else
	{
		return "Draw";
	}

}

function Kill(Kills1, Kills2)
{


	var total = Kills1 + Kills2;

	var j1Percent = Math.round((Kills1 / total) * 100);
	var j2Percent = Math.round((Kills2 / total) * 100);

	var count = 0;
	var wins1 = 0;
	var wins2 = 0;

	while(count < 10)
	{
		var final = Math.round(Math.random() * 100);

		if (final < j1Percent)
		{

		wins1++;
		count++;

		}
		else
		{
			wins2++;
			count++;
		}
	}
	if(wins1 < wins2)
	{
		return "1";
	}
	else if(wins2 < wins1)
	{
		return "2";
	}
	else
	{
		return "Draw";
	}

}

function WinPerc(Wins1, Wins2)
{


	var total = Wins1 + Wins2;

	var j1Percent = Math.round((Wins1 / total) * 100);
	var j2Percent = Math.round((Wins2 / total) * 100);

	var count = 0;
	var wins1 = 0;
	var wins2 = 0;

	while(count < 10)
	{
		var final = Math.round(Math.random() * 100);

		if (final < j1Percent)
		{

		wins1++;
		count++;

		}
		else
		{
			wins2++;
			count++;
		}
	}
	if(wins1 < wins2)
	{
		return "1";
	}
	else if(wins2 < wins1)
	{
		return "2";
	}
	else
	{
		return "Draw";
	}

}
