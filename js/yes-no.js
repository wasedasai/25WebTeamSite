const questions = [
  { question: "2025新歓サイトを見た", id: 1 },
  { question: "新しいことに挑戦したい", id: 2 },
  { question: "プログラミングに興味がある", id: 3 },
  { question: "チーフはかっこいいと思う", id: 4 },
  { question: "Webチームに入りたい", id: 5 }
];

let currentQuestionIndex = 0;

function nextQuestion(answer) {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    updateQuestion();
  } else {
    // 5問目が終わったら loading.html に遷移
    window.location.href = "yes-no-loading.html";
  }
}

function updateQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById("question-number").innerText = `${questionData.id}`;
  document.getElementById("question-text").innerText = questionData.question;
}
