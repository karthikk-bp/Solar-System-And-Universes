// Space & Universe Interactive Trivia Quiz

import { quizQuestions } from '../data/quizData.js';
import { sound } from './soundFX.js';

export class SpaceQuiz {
  constructor(containerElement) {
    this.container = containerElement;
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.selectedOption = null;
    this.isComplete = false;
    this.render();
  }

  render() {
    if (this.isComplete) {
      this.renderSummary();
      return;
    }

    const q = quizQuestions[this.currentIndex];

    this.container.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-header">
          <div class="quiz-progress-meta">
            <span class="quiz-step">Question ${this.currentIndex + 1} of ${quizQuestions.length}</span>
            <span class="quiz-score-badge">Score: ${this.score} pts</span>
          </div>
          <div class="quiz-progress-bar-wrap">
            <div class="quiz-progress-bar-fill" style="width: ${((this.currentIndex) / quizQuestions.length) * 100}%;"></div>
          </div>
        </div>

        <div class="quiz-question-card">
          <h3 class="quiz-question-text">${q.question}</h3>

          <div class="quiz-options-list">
            ${q.options.map((opt, idx) => {
              let btnClass = 'quiz-opt-btn';
              if (this.answered) {
                if (idx === q.correctAnswer) {
                  btnClass += ' correct';
                } else if (idx === this.selectedOption) {
                  btnClass += ' incorrect';
                } else {
                  btnClass += ' disabled';
                }
              }
              return `
                <button class="${btnClass}" data-idx="${idx}" ${this.answered ? 'disabled' : ''}>
                  <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${this.answered ? `
            <div class="quiz-feedback-box ${this.selectedOption === q.correctAnswer ? 'success' : 'fail'}">
              <div class="feedback-title">
                ${this.selectedOption === q.correctAnswer ? '🎉 Correct Answer!' : '❌ Incorrect'}
              </div>
              <p class="feedback-explanation">${q.explanation}</p>
              <button class="quiz-next-btn" id="quizNextBtn">
                ${this.currentIndex < quizQuestions.length - 1 ? 'Next Question →' : 'View Final Score 🏆'}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Attach click listeners to option buttons
    this.container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        const selected = parseInt(btn.getAttribute('data-idx'), 10);
        this.handleSelect(selected);
      });
    });

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < quizQuestions.length - 1) {
          this.currentIndex++;
          this.answered = false;
          this.selectedOption = null;
          sound.playPlanetBlip();
          this.render();
        } else {
          this.isComplete = true;
          this.render();
        }
      });
    }
  }

  handleSelect(optionIndex) {
    const q = quizQuestions[this.currentIndex];
    this.answered = true;
    this.selectedOption = optionIndex;

    if (optionIndex === q.correctAnswer) {
      this.score += 10;
      sound.playSuccess();
    } else {
      sound.playError();
    }

    this.render();
  }

  renderSummary() {
    const totalPossible = quizQuestions.length * 10;
    const percentage = Math.round((this.score / totalPossible) * 100);

    let rankTitle = 'Space Cadet';
    let rankDesc = 'Keep looking up! The cosmos holds infinite mysteries to learn.';
    if (percentage >= 90) {
      rankTitle = 'Chief Astrophysicist 🚀';
      rankDesc = 'Mastery level knowledge! You understand celestial mechanics and cosmology like a NASA scientist.';
    } else if (percentage >= 70) {
      rankTitle = 'Veteran Planetary Explorer 🛰️';
      rankDesc = 'Splendid grasp of the solar system and stellar evolution!';
    } else if (percentage >= 50) {
      rankTitle = 'Orbital Navigator 🪐';
      rankDesc = 'Good foundation! A few more explorations through the planet archives and you will be an expert.';
    }

    this.container.innerHTML = `
      <div class="quiz-summary-card">
        <div class="summary-trophy">🏆</div>
        <h2>Quiz Completed!</h2>
        <div class="summary-score-large">${this.score} / ${totalPossible}</div>
        <div class="summary-percentage">${percentage}% Accuracy</div>
        <div class="summary-rank-badge">${rankTitle}</div>
        <p class="summary-desc">${rankDesc}</p>

        <button class="quiz-restart-btn" id="quizRestartBtn">Restart Quiz 🔄</button>
      </div>
    `;

    document.getElementById('quizRestartBtn').addEventListener('click', () => {
      this.currentIndex = 0;
      this.score = 0;
      this.answered = false;
      this.selectedOption = null;
      this.isComplete = false;
      sound.playPlanetBlip();
      this.render();
    });
  }
}
