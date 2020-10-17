function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds,
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	clock.style.display = 'block';
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}
const schedule = [
	['Jul 25 2015', 'Sept 20 2015'],
	['Sept 21 2015', 'Jul 25 2016'],
	['Jul 25 2016', 'Jul 25 2030'],
];

// 遍历schedule中的每个元素
schedule.forEach(([startDate, endDate]) => {
	// 以毫秒为单位放置日期以便于比较
	const startMs = Date.parse(startDate);
	const endMs = Date.parse(endDate);
	const currentMs = Date.parse(new Date());

	// 如果当前日期在开始日期和结束日期之间，则显示时钟
	if (endMs > currentMs && currentMs >= startMs) {
        console.log('endDate :>> ', endDate);
		initializeClock('clockdiv', endDate);
	}
});

// const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);
