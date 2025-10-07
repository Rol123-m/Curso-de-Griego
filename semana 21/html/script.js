// ---------- FLASHCARDS ----------
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});

// ---------- QUIZ ----------
let score = 0;
let answered = 0;

function checkAnswer(button, correct) {
  // Evita que el usuario cambie la respuesta una vez pulsado
  if (button.classList.contains("answered")) return;

  button.classList.add("answered");
  answered++;

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  // Muestra resultado al final
  const result = document.getElementById("result");
  const totalQuestions = document.querySelectorAll(".quiz .question").length;
  if (answered === totalQuestions) {
    result.textContent = `Has obtenido ${score} de ${totalQuestions} correctas.`;
  }
}
