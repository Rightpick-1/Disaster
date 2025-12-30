// Shared JavaScript functionality for the Disaster Emergency Learning Platform

// Hint Mode Toggle
let hintMode = 'voice'; // 'voice' or 'pointer'

function toggleHintMode() {
    const button = document.getElementById('hintToggle');
    const icon = button.querySelector('.hint-icon');
    const text = button.querySelector('.hint-text');
    
    if (hintMode === 'voice') {
        hintMode = 'pointer';
        icon.textContent = '👆';
        text.textContent = typeof getText !== 'undefined' ? getText('pointer') : 'Pointer';
    } else {
        hintMode = 'voice';
        icon.textContent = '🎤';
        text.textContent = typeof getText !== 'undefined' ? getText('voice') : 'Voice';
    }
    
    // Apply hint mode styling
    document.body.setAttribute('data-hint-mode', hintMode);
}

// Safety Score Management
function updateSafetyScore(newScore) {
    if (newScore > 100) newScore = 100;
    if (newScore < 0) newScore = 0;
    
    const scoreElements = document.querySelectorAll('#safetyScore');
    scoreElements.forEach(el => {
        el.textContent = newScore;
    });
    
    localStorage.setItem('safetyScore', newScore);
    
    // Update score display color based on value
    scoreElements.forEach(el => {
        if (newScore >= 80) {
            el.style.color = '#2e7d32';
        } else if (newScore >= 50) {
            el.style.color = '#FF6B35';
        } else {
            el.style.color = '#d32f2f';
        }
    });
}

function getSafetyScore() {
    return parseInt(localStorage.getItem('safetyScore') || '0');
}

// Achievement Badge Management
function unlockBadge(badgeId) {
    const badge = document.querySelector(`[data-badge="${badgeId}"]`);
    if (badge && badge.classList.contains('locked')) {
        badge.classList.remove('locked');
        badge.classList.add('unlocked');
        const statusElement = badge.querySelector('.badge-status');
        if (statusElement) {
            statusElement.textContent = typeof getText !== 'undefined' ? getText('unlocked') : 'Unlocked';
        }
        
        // Save to localStorage
        const unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges') || '[]');
        if (!unlockedBadges.includes(badgeId)) {
            unlockedBadges.push(badgeId);
            localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
        }
        
        // Show notification
        showBadgeNotification(badge.querySelector('.badge-name').textContent);
    }
}

function showBadgeNotification(badgeName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'badge-notification';
    const unlockedText = typeof getText !== 'undefined' ? getText('achievementUnlocked') + '!' : 'Achievement Unlocked!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #FF6B35;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.5rem;">🏆</span>
            <div>
                <div style="font-weight: 600;">${unlockedText}</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${badgeName}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function loadBadges() {
    const unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges') || '[]');
    unlockedBadges.forEach(badgeId => {
        const badge = document.querySelector(`[data-badge="${badgeId}"]`);
        if (badge) {
            badge.classList.remove('locked');
            badge.classList.add('unlocked');
            const statusElement = badge.querySelector('.badge-status');
            if (statusElement) {
                statusElement.textContent = typeof getText !== 'undefined' ? getText('unlocked') : 'Unlocked';
            }
        }
    });
}

// Progress Tracking
function saveProgress() {
    // Save all progress data
    const progress = {
        safetyScore: getSafetyScore(),
        unlockedBadges: JSON.parse(localStorage.getItem('unlockedBadges') || '[]'),
        fireEscapeCompletion: parseInt(localStorage.getItem('fireEscapeCompletion') || '0'),
        bagTrainingCompletion: parseInt(localStorage.getItem('bagTrainingCompletion') || '0'),
        fireEscapeBestScore: parseInt(localStorage.getItem('fireEscapeBestScore') || '0'),
        bagBestScore: parseInt(localStorage.getItem('bagBestScore') || '0'),
        fireEscapeAttempts: parseInt(localStorage.getItem('fireEscapeAttempts') || '0'),
        bagAttempts: parseInt(localStorage.getItem('bagAttempts') || '0'),
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('platformProgress', JSON.stringify(progress));
}

function loadProgress() {
    // Load safety score
    const score = getSafetyScore();
    updateSafetyScore(score);
    
    // Load badges
    loadBadges();
    
    // Load completion percentages
    const fireEscapeCompletion = parseInt(localStorage.getItem('fireEscapeCompletion') || '0');
    const bagTrainingCompletion = parseInt(localStorage.getItem('bagTrainingCompletion') || '0');
    
    const fireEscapeProgress = document.getElementById('completionProgress');
    if (fireEscapeProgress) {
        fireEscapeProgress.textContent = fireEscapeCompletion + '%';
    }
    
    const bagProgress = document.getElementById('completionRate');
    if (bagProgress) {
        bagProgress.textContent = bagTrainingCompletion + '%';
    }
    
    // Update main menu completion
    const mainCompletion = document.getElementById('mainCompletion');
    if (mainCompletion) {
        const totalCompletion = Math.round((fireEscapeCompletion + bagTrainingCompletion) / 2);
        mainCompletion.textContent = totalCompletion + '%';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    // Set initial hint mode
    document.body.setAttribute('data-hint-mode', hintMode);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Export functions for use in other scripts
window.updateSafetyScore = updateSafetyScore;
window.unlockBadge = unlockBadge;
window.saveProgress = saveProgress;
window.loadProgress = loadProgress;
window.toggleHintMode = toggleHintMode;

