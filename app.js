	var btn = document.getElementById('btn');
	var main = document.getElementById('main');

	btn.addEventListener('click', startSacco);
	
	// assuming all the 12 riders have contributed 30k naira each from which they can choose a tire to invest, the funds and intrest earned are stored in the RIDERS save
	const RIDERS = [
		{
			name: "rider 1",
			balance: 30000
		},
		{
			name: "rider 2",
			balance: 30000
		},
		{
			name: "rider 3",
			balance: 30000
		},
		{
			name: "rider 4",
			balance: 30000
		},
		{
			name: "rider 5",
			balance: 30000
		},
		{
			name: "rider 6",
			balance: 30000
		},
		{
			name: "rider 7",
			balance: 30000
		},
		{
			name: "rider 8",
			balance: 30000
		},
		{
			name: "rider 9",
			balance: 30000
		},
		{
			name: "rider 10",
			balance: 30000
		},
		{
			name: "rider 11",
			balance: 30000
		},
		{
			name: "rider 12",
			balance: 30000
		}

	];

	function fetchRiders(){
		if (localStorage.getItem('riders')) {
			var riders = JSON.parse(localStorage.getItem('riders'));
			return riders;
		} else {
			localStorage.setItem('riders', JSON.stringify(RIDERS));
			riders = JSON.parse(localStorage.getItem('riders'));
			return riders;
		}
	}

	function chooseTire(){
		main.innerHTML = "hellooo";
	}

	function ShowStats(){
		main.innerHTML = "hello";
	}

	function startSacco() {
		
		var riders = fetchRiders();
		var response = prompt('Enter your name');
		response = response.toLowerCase();

		if (response != '') {
			riders.map((rider) => {
				rider.name == response
				? rider.tire 
				? (ShowStats())
				: (chooseTire())
				: console.log('You are not a registered member of the Sacco Saving Group');
			});
		} else {
			alert("Please enter a name");
		}
	}