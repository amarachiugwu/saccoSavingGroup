var btn = document.getElementById('btn');

	btn.addEventListener('click', startSave);

	function startSave() {
		const data = [["Enter your name", "wright brothers"], ["Which Bird has its Latin name as PIEBALD?", "bald eagle"], ["How many countries make up the United Kingdom", "4"], ["What is the full meaning of INEC?", "independent national electoral commission"], ["Who is the President of Nigeria", "buhari"], ["What is the chemical formular of water?", "h20"]];


		var score = 0;

		for (var i = 0; i < data.length; i++) {
			var question = data[i][0];
			var answer = data[i][1];

			var response = prompt(question);
			response = response.toLowerCase();

			if (response != '') {
				alert("Correct!");
				score++;
			} else {
				alert("Please input a name");
			}
		}

		alert(`Thank you for taking our Quiz!\nYou scored ${score} point(s)`);

	}