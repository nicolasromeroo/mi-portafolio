
    // Enhanced Gaming Demo Functionality
                            
    // Card pack opening simulation
    function openPack() {
      const packElement = document.getElementById('cardPack');
      const cardsContainer = document.getElementById('cardsRevealed');
      
      // Pack opening animation
      packElement.style.transform = 'rotateY(180deg) scale(0.8)';
      packElement.style.opacity = '0.3';
      
      setTimeout(() => {
        // Generate random cards
        const cardRarities = ['common', 'common', 'rare', 'epic', 'legendary'];
        const cardTypes = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
        
        cardsContainer.innerHTML = '';
        
        cardRarities.forEach((rarity, index) => {
          setTimeout(() => {
            const card = document.createElement('div');
            card.className = `revealed-card ${rarity}`;
            
            const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            card.innerHTML = `
              <div style=`font-weight: 700;`>${randomType}</div>
              <div style=`font-size: 0.6rem; opacity: 0.8;`>${rarity.toUpperCase()}</div>
            `;
            
            cardsContainer.appendChild(card);
          }, index * 200);
        });
        
        // Reset pack
        setTimeout(() => {
          packElement.style.transform = 'rotateY(0deg) scale(1)';
          packElement.style.opacity = '1';
        }, 1500);
      }, 500);
    }

    // Match simulation
    let matchTimer = 0;
    let matchInterval = null;
    let teamAScore = 0;
    let teamBScore = 0;

    function startMatch() {
      if (matchInterval) {
        clearInterval(matchInterval);
      }
      
      matchTimer = 0;
      teamAScore = 0;
      teamBScore = 0;
      
      document.getElementById('teamAScore').textContent = teamAScore;
      document.getElementById('teamBScore').textContent = teamBScore;
      document.getElementById('matchTimer').textContent = '0:00';
      
      matchInterval = setInterval(() => {
        matchTimer++;
        
        // Update timer display
        const minutes = Math.floor(matchTimer / 60);
        const seconds = matchTimer % 60;
        document.getElementById('matchTimer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Random goal events (low probability)
        if (Math.random() < 0.02) { // 2% chance per second
          if (Math.random() < 0.5) {
            teamAScore++;
            document.getElementById('teamAScore').textContent = teamAScore;
            showGoalAnimation('Team A');
          } else {
            teamBScore++;
            document.getElementById('teamBScore').textContent = teamBScore;
            showGoalAnimation('Team B');
          }
        }
        
        // End match after 90 seconds (simulating 90 minutes)
        if (matchTimer >= 90) {
          clearInterval(matchInterval);
          showMatchResult();
        }
      }, 1000);
    }

    function showGoalAnimation(team) {
      const goalAlert = document.createElement('div');
      goalAlert.className = 'goal-alert';
      goalAlert.textContent = `GOAL! ${team}`;
      goalAlert.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ff6b35;
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 1000;
        animation: goalPulse 2s ease-out;
      `;
      
      document.body.appendChild(goalAlert);
      
      setTimeout(() => {
        goalAlert.remove();
      }, 2000);
    }

    function showMatchResult() {
      const result = teamAScore > teamBScore ? 'Team A Wins!' : 
                     teamBScore > teamAScore ? 'Team B Wins!' : 'It\'s a Draw!';
      
      const resultAlert = document.createElement('div');
      resultAlert.className = 'match-result';
      resultAlert.textContent = `Full Time: ${teamAScore} - ${teamBScore} | ${result}`;
      resultAlert.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2c3e50;
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
      `;
      
      document.body.appendChild(resultAlert);
      
      setTimeout(() => {
        resultAlert.remove();
      }, 5000);
    }

    function stopMatch() {
      if (matchInterval) {
        clearInterval(matchInterval);
        matchInterval = null;
      }
    }