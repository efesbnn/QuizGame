const questions = [
    {
      question: "Dünyanın en büyük okyanusu hangisidir?",
      options: ["Atlas", "Hint", "Pasifik", "Arktik"],
      answer: "Pasifik"
    },
    {
      question: "Hangi gezegen Güneş Sistemi'ndeki en büyük gezegendir?",
      options: ["Venüs", "Mars", "Jüpiter", "Satürn"],
      answer: "Jüpiter"
    },
    {
      question: "İnsan vücudunda kaç kemik bulunur?",
      options: ["112", "168", "206", "275"],
      answer: "206"
    },
    {
      question: "Hangi gezegen Güneş Sistemi'nde yaşam bulunduğu iddia edilse de henüz kanıtlanmadı?",
      options: ["Mars", "Jüpiter", "Venüs", "Satürn"],
      answer: "Mars"
    },
    {
      question: "Mona Lisa tablosu hangi İtalyan ressamın eseridir?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raffaello", "Caravaggio"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Kimya'da 'H2O' molekülü hangi bileşiği temsil eder?",
      options: ["Oksijen gazı", "Azot gazı", "Su", "Hidrojen gazı"],
      answer: "Su"
    },
    {
      question: "Türkiye'nin başkenti neresidir?",
      options: ["Ankara", "İstanbul", "İzmir", "Antalya"],
      answer: "Ankara"
    }
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElements = document.querySelectorAll('.option');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function generateRandomQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
  
      optionsElements.forEach((optionElement, index) => {
        optionElement.innerText = currentQuestion.options[index];
        optionElement.addEventListener('click', () => checkAnswer(index));
      });
    } else {
      questionElement.innerText = "Oyun bitti! Tüm soruları yanıtladınız. Skorunuz: " + score;
      optionsElements.forEach(optionElement => {
        optionElement.style.display = 'none';
      });
      resultElement.style.display = 'none';
      scoreElement.style.display = 'none';
    }
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.options.indexOf(currentQuestion.answer);
  
    if (selectedIndex === correctIndex) {
      resultElement.innerText = 'Tebrikler, doğru cevap!';
      score++;
      scoreElement.innerText = `Skor: ${score}`;
    } else {
      resultElement.innerText = 'Maalesef, yanlış cevap.';
    }
  
    currentQuestionIndex++;
    generateRandomQuestion();
  }
  
  window.addEventListener('load', () => {
    generateRandomQuestion();
    scoreElement.innerText = `Skor: ${score}`;
  });
  