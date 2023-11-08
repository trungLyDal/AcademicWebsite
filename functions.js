 let score = 0;
        let currentPage = 1;

        function calculateScore() {
            const q1Answer = document.querySelector('input[name="q1"]:checked');

            if (q1Answer) {
                if (q1Answer.value === "Correct") {
                    score += 1;
                }

                document.getElementById("score").textContent = "Score: " + score;
            }
            

            currentPage += 1;
            document.getElementById('page' + (currentPage - 1)).style.display = 'none';

            if (currentPage <= 4) { // Adjust this number based on the number of questions
                document.getElementById('page' + currentPage).style.display = 'block';
            } else {
                document.getElementById('score').textContent = "Final Score: " + score;
            }
        }