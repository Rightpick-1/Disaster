// Language Translation System
const translations = {
    en: {
        // Navigation
        home: "Home",
        progress: "Progress",
        
        // Header
        platformTitle: "SilverCare Disaster Emergency Learning Platform",
        
        // Status Panel
        activeMode: "Active Mode:",
        currentState: "Current State",
        currentActivity: "Current Activity:",
        completionProgress: "Completion Progress",
        completion: "Completion:",
        weight: "Weight:",
        mainMenu: "Main Menu",
        messageMode: "Message Mode",
        gaussianMode: "Gaussian Mode",
        thunderstormMode: "Thunderstorm Mode",
        hintQuestion: "According to the guide, where should towels and masks be placed for fastest access?",
        pdfReference: "(PDF p.6)",
        referenceAlert: "Reference: PDF p.6",
        
        // Recommendations
        recommendation: "Recommendation:",
        recommendationText: "Suggested to start with Emergency Bag training first",
        
        // Training Modules
        trainingModules: "Training Modules",
        emergencyBagPacking: "Emergency Bag Packing",
        emergencyBagDescription: "Learn to pack essential items for emergency evacuation",
        fireEscapeSimulation: "Fire Escape Simulation",
        fireEscapeDescription: "Practice fire safety and evacuation procedures",
        recommended: "Recommended",
        startTraining: "Start Training",
        
        // Emergency Bag Training
        emergencyBagTraining: "Emergency Bag Training",
        availableItems: "Available Items",
        safetyScore: "Safety Score",
        emergencyBag: "Emergency Bag",
        topEasyAccess: "Top / Easy Access",
        topDescription: "Items needed immediately during evacuation",
        middleMain: "Middle / Main",
        middleDescription: "Essential communication and identification items",
        sideSmall: "Side / Small",
        sideDescription: "Medical supplies and small essential items",
        dragItemsHere: "Drag items here",
        completeToSeeScore: "Complete to see score",
        placeAllItemsToContinue: "Place all items to continue",
        emergencyHotline: "Emergency Hotline",
        
        // Items
        wetTowel: "Wet towel",
        smokeMask: "Smoke mask",
        phonePowerbank: "Phone/Power bank",
        keysDocuments: "Keys/Documents",
        firstAidMedicine: "First aid medicine",
        
        // Completion Screen
        emergencyBagTrainingComplete: "Emergency Bag Training Complete!",
        finalScore: "Final Score:",
        totalWeight: "Total Weight:",
        achievementBadges: "Achievement Badges",
        achievements: "Achievements",
        achievementUnlocked: "Achievement Unlocked",
        distributionQuestions: "Distribution Questions",
        quickResponse: "Quick Response",
        perfectEscape: "Perfect Escape",
        locked: "Locked",
        unlocked: "Unlocked",
        tryAgain: "Try Again",
        continueToFireEscape: "Continue to Fire Escape Training",
        placeAllItemsToContinue: "Place all items to continue",
        voice: "Voice",
        pointer: "Pointer",
        
        // Progress Page
        trainingProgress: "Training Progress",
        trackPerformance: "Track your disaster preparedness training performance.",
        inProgress: "In Progress",
        oneModuleCompleted: "One module completed. Continue with the remaining training to build comprehensive emergency preparedness.",
        completed: "Completed",
        averageScore: "Average Score",
        totalPoints: "Total Points",
        totalAttempts: "Total Attempts",
        trainingModulesSection: "Training Modules",
        status: "Status",
        statusColon: "Status:",
        bestScore: "Best Score",
        bestScoreColon: "Best Score:",
        attempts: "Attempts",
        attemptsColon: "Attempts:",
        performance: "Performance:",
        notStarted: "Not Started",
        trainingBestPractices: "Training Best Practices",
        practiceRegularly: "Practice Regularly",
        practiceRegularlyDesc: "Repetition helps reinforce emergency procedures. Try each module multiple times.",
        applyKnowledge: "Apply Knowledge",
        applyKnowledgeDesc: "Use this training to prepare your home. Create escape plans and pack an emergency bag.",
        reviewFeedback: "Review Feedback",
        reviewFeedbackDesc: "Understanding why certain choices are safer helps you make better decisions.",
        setGoals: "Set Goals",
        setGoalsDesc: "Aim for 90% or higher on all modules to ensure comprehensive preparedness.",
        
        // Fire Escape
        fireEscapeSimulationComplete: "Fire Escape Simulation Complete!",
        time: "Time:",
        escapeSimulation: "Escape Simulation",
        networkTimer: "Network Timer",
        elevatorWarning: "Do not use elevators! Use stairs to escape!",
        scenario: "Scenario",
        of: "of",
        scenario1of4: "Scenario 1 of 4",
        nextScenario: "Next Scenario",
        fourWeekTrainingProgram: "4-Week Training Program",
        week1FireDetection: "Week 1: Fire Detection",
        week2EscapeRoutes: "Week 2: Escape Routes (Current)",
        week3EmergencySupplies: "Week 3: Emergency Supplies",
        week4FamilyPlanning: "Week 4: Family Planning",
        // Scenario 1
        scenario1Description: "You are resting in your living room when you suddenly notice thick smoke coming from the kitchen. The fire is spreading. You need to make the right decision to protect your safety.",
        scenario1Option1: "Immediately call 999 and prepare emergency bag",
        scenario1Option2: "Go to the kitchen to check the fire and attempt to extinguish it",
        scenario1FeedbackCorrect: "Correct! Always call emergency services first. Never attempt to fight a spreading fire without proper training.",
        scenario1FeedbackIncorrect: "Incorrect. Never attempt to fight a spreading fire yourself. Call 999 immediately and evacuate.",
        // Scenario 2
        scenario2Description: "Preparing to escape. Facing a closed door, how should you check it?",
        scenario2Option1: "Use your finger to test the door handle temperature",
        scenario2Option2: "Open the door directly to check the situation",
        scenario2FeedbackCorrect: "Correct! Always check door temperature before opening during a fire. A hot door indicates fire on the other side.",
        scenario2FeedbackIncorrect: "Dangerous! Opening a door to a fire can cause flashover. Always check for heat first.",
        // Scenario 3
        scenario3Description: "There are two passages in the stairwell: one filled with smoke but closer, the other smoke-free but farther. Which escape route do you choose?",
        scenario3Option1: "Farther from me but smoke-free",
        scenario3Option2: "Closer to me but with smoke",
        scenario3FeedbackCorrect: "Correct! Choose smoke-free routes regardless of distance. Smoke inhalation is a leading cause of fire deaths.",
        scenario3FeedbackIncorrect: "Incorrect. Never go through smoke even if it seems faster. Smoke inhalation can be fatal.",
        // Scenario 4
        scenario4Description: "If you cannot escape and are trapped indoors, what would you do?",
        scenario4Option1: "Call for help and wave bright-colored clothing/light source",
        scenario4Option2: "The adjacent room has no fire, try climbing over from the window",
        scenario4FeedbackCorrect: "Correct! Signal for help from a safe location. This helps rescuers find you quickly.",
        scenario4FeedbackIncorrect: "Dangerous! Never attempt climbing maneuvers during a fire. Stay safe and signal for help.",
        
        // Language Switcher
        language: "Language",
        english: "English",
        traditionalChinese: "繁體中文",
        
        // Kiosk Interface
        welcomeToTraining: "Welcome to Disaster Emergency Training",
        selectTrainingModule: "Select a training module to begin",
        
        // Training Overview
        trainingOverview: "Training Overview",
        totalPracticeSessions: "Total Practice Sessions",
        averagePerformance: "Average Performance",
        trainingStatus: "Training Status",
        complete: "Complete",
        inProgress: "In Progress",
        notStarted: "Not Started"
    },
    zh_TW: {
        // Navigation
        home: "首頁",
        progress: "進度",
        backToHome: "返回首頁",
        
        // Header
        platformTitle: "SilverCare 災難應急學習平台",
        
        // Status Panel
        activeMode: "活動模式：",
        currentState: "當前狀態",
        currentActivity: "當前活動：",
        completionProgress: "完成進度",
        completion: "完成度：",
        weight: "重量：",
        mainMenu: "主選單",
        messageMode: "訊息模式",
        gaussianMode: "高斯模式",
        thunderstormMode: "雷暴模式",
        hintQuestion: "根據指南，毛巾和面罩應該放在哪裡以便最快取用？",
        pdfReference: "(PDF 第6頁)",
        referenceAlert: "參考資料：PDF 第6頁",
        
        // Recommendations
        recommendation: "建議：",
        recommendationText: "建議先從應急包訓練開始",
        
        // Training Modules
        trainingModules: "訓練模組",
        emergencyBagPacking: "應急包打包",
        emergencyBagDescription: "學習打包緊急疏散所需的基本物品",
        fireEscapeSimulation: "火災逃生模擬",
        fireEscapeDescription: "練習消防安全和疏散程序",
        recommended: "推薦",
        startTraining: "開始訓練",
        
        // Emergency Bag Training
        emergencyBagTraining: "應急包訓練",
        availableItems: "可用物品",
        safetyScore: "安全分數",
        emergencyBag: "應急包",
        topEasyAccess: "頂部 / 易取",
        topDescription: "疏散時立即需要的物品",
        middleMain: "中間 / 主層",
        middleDescription: "重要的通訊和身份識別物品",
        sideSmall: "側邊 / 小袋",
        sideDescription: "醫療用品和小型必需品",
        dragItemsHere: "將物品拖到這裡",
        completeToSeeScore: "完成後查看分數",
        placeAllItemsToContinue: "放置所有物品以繼續",
        emergencyHotline: "緊急熱線",
        
        // Items
        wetTowel: "濕毛巾",
        smokeMask: "防煙面罩",
        phonePowerbank: "手機/充電寶",
        keysDocuments: "鑰匙/文件",
        firstAidMedicine: "急救藥品",
        
        // Completion Screen
        emergencyBagTrainingComplete: "應急包訓練完成！",
        finalScore: "最終分數：",
        totalWeight: "總重量：",
        achievementBadges: "成就徽章",
        achievements: "成就",
        achievementUnlocked: "成就解鎖",
        distributionQuestions: "分配相關問題",
        quickResponse: "快速反應",
        perfectEscape: "完美逃生",
        locked: "已鎖定",
        unlocked: "已解鎖",
        tryAgain: "再試一次",
        continueToFireEscape: "繼續火災逃生訓練",
        placeAllItemsToContinue: "放置所有物品以繼續",
        voice: "語音",
        pointer: "指標",
        
        // Progress Page
        trainingProgress: "訓練進度",
        trackPerformance: "追蹤您的災難應急訓練表現。",
        inProgress: "進行中",
        oneModuleCompleted: "已完成一個模組。繼續完成剩餘訓練以建立全面的應急準備。",
        completed: "已完成",
        averageScore: "平均分數",
        totalPoints: "總分",
        totalAttempts: "總嘗試次數",
        trainingModulesSection: "訓練模組",
        status: "狀態",
        statusColon: "狀態：",
        bestScore: "最佳分數",
        bestScoreColon: "最佳分數：",
        attempts: "嘗試次數",
        attemptsColon: "嘗試次數：",
        performance: "表現：",
        notStarted: "尚未開始",
        trainingBestPractices: "訓練最佳實踐",
        practiceRegularly: "定期練習",
        practiceRegularlyDesc: "重複練習有助於強化應急程序。多次嘗試每個模組。",
        applyKnowledge: "應用知識",
        applyKnowledgeDesc: "使用此訓練來準備您的家園。制定逃生計劃並打包應急包。",
        reviewFeedback: "檢視回饋",
        reviewFeedbackDesc: "了解為什麼某些選擇更安全有助於您做出更好的決定。",
        setGoals: "設定目標",
        setGoalsDesc: "在所有模組中達到 90% 或更高分數，以確保全面的準備。",
        
        // Fire Escape
        fireEscapeSimulationComplete: "火災逃生模擬完成！",
        time: "時間：",
        escapeSimulation: "逃生模擬",
        networkTimer: "網路計時器",
        elevatorWarning: "不要使用電梯！使用樓梯逃生！",
        scenario: "情境",
        of: "/",
        scenario1of4: "情境 1 / 4",
        nextScenario: "下一個情境",
        fourWeekTrainingProgram: "4週訓練計劃",
        week1FireDetection: "第1週：火災偵測",
        week2EscapeRoutes: "第2週：逃生路線（當前）",
        week3EmergencySupplies: "第3週：應急物資",
        week4FamilyPlanning: "第4週：家庭計劃",
        // Scenario 1
        scenario1Description: "您正在客廳休息時，突然注意到廚房冒出濃煙。火勢正在蔓延。您需要做出正確的決定來保護您的安全。",
        scenario1Option1: "立即撥打999並準備應急包",
        scenario1Option2: "前往廚房檢查火勢並嘗試撲滅",
        scenario1FeedbackCorrect: "正確！始終先撥打緊急服務電話。未經適當訓練，切勿嘗試撲滅正在蔓延的火災。",
        scenario1FeedbackIncorrect: "錯誤。切勿自己嘗試撲滅正在蔓延的火災。立即撥打999並撤離。",
        // Scenario 2
        scenario2Description: "準備逃生。面對一扇關閉的門，您應該如何檢查？",
        scenario2Option1: "用手指測試門把溫度",
        scenario2Option2: "直接打開門檢查情況",
        scenario2FeedbackCorrect: "正確！在火災期間打開門之前，始終檢查門的溫度。熱門表示另一側有火災。",
        scenario2FeedbackIncorrect: "危險！打開通往火災的門可能導致閃燃。始終先檢查熱度。",
        // Scenario 3
        scenario3Description: "樓梯間有兩條通道：一條充滿煙霧但較近，另一條無煙但較遠。您選擇哪條逃生路線？",
        scenario3Option1: "距離較遠但無煙",
        scenario3Option2: "距離較近但有煙",
        scenario3FeedbackCorrect: "正確！無論距離如何，選擇無煙路線。吸入煙霧是火災死亡的主要原因。",
        scenario3FeedbackIncorrect: "錯誤。即使看起來更快，也永遠不要穿過煙霧。吸入煙霧可能是致命的。",
        // Scenario 4
        scenario4Description: "如果您無法逃生並被困在室內，您會怎麼做？",
        scenario4Option1: "呼救並揮動鮮豔的衣物/光源",
        scenario4Option2: "相鄰房間沒有火災，嘗試從窗戶爬過去",
        scenario4FeedbackCorrect: "正確！從安全位置發出求救信號。這有助於救援人員快速找到您。",
        scenario4FeedbackIncorrect: "危險！在火災期間永遠不要嘗試攀爬動作。保持安全並發出求救信號。",
        
        // Language Switcher
        language: "語言",
        english: "English",
        traditionalChinese: "繁體中文",
        
        // Kiosk Interface
        welcomeToTraining: "歡迎使用災難應急訓練",
        selectTrainingModule: "選擇訓練模組開始",
        
        // Training Overview
        trainingOverview: "訓練總覽",
        totalPracticeSessions: "總練習次數",
        averagePerformance: "平均表現",
        trainingStatus: "訓練狀態",
        complete: "已完成",
        inProgress: "進行中",
        notStarted: "尚未開始"
    }
};

// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageLanguage();
    updateLanguageSwitcher();
}

function getText(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function updatePageLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = getText(key);
        
        if (element.tagName === 'INPUT' && element.type === 'button') {
            element.value = text;
        } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
            element.placeholder = text;
        } else {
            // Preserve HTML structure if element contains SVG or other HTML
            if (element.querySelector('svg') || element.querySelector('.completion-badge-check')) {
                // Only update text nodes, not HTML structure
                const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === 3);
                if (textNodes.length > 0) {
                    textNodes[0].textContent = text;
                } else {
                    // If no text node exists, append text after HTML content
                    const htmlContent = element.innerHTML;
                    const textMatch = htmlContent.match(/>([^<]+)</);
                    if (textMatch) {
                        element.innerHTML = htmlContent.replace(textMatch[1], text);
                    }
                }
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = getText(key);
    });
    
    // Trigger custom event for page-specific updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLanguage } }));
}

// Update language switcher buttons
function updateLanguageSwitcher() {
    document.querySelectorAll('.language-button, .kiosk-language-button').forEach(button => {
        const lang = button.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
        if (lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLanguage;
    updatePageLanguage();
    updateLanguageSwitcher();
    
    // Re-update language switcher after language change
    window.addEventListener('languageChanged', () => {
        updateLanguageSwitcher();
    });
});

