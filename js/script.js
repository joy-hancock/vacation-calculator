const tripInfoButton = document.querySelector(".trip-info");

const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
	const totalBudget = Number(prompt("What is your total budget?"));
	const accommodation = Number(
		prompt("What are your daily accommodation costs?")
	);
	const numDays = Number(prompt("How many days does your trip last?"));
	calculateDailyBudget(totalBudget, accommodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accommodation, numDays) {
	const daysBudget = totalBudget / numDays;
	const totalAccommodation = accommodation * numDays;
	const daily = totalAccommodation - daysBudget;
	dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);
