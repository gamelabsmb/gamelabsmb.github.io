// ------------------------------------------------------------
// TARJETAS DE GRUPOS PARA OPERACIÓN INCLUSIÓN
// ------------------------------------------------------------
// Tarjetas con iconos únicos por grupo para diferenciación visual
const groupCards = {
    1: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 1 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 1 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 1 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 1 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 1 }
    ],
    2: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 2 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 2 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 2 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 2 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 2 }
    ],
    3: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 3 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 3 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 3 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 3 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 3 }
    ],
    4: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 4 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 4 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 4 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 4 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 4 }
    ],
    5: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 5 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 5 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 5 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 5 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 5 }
    ],
    6: [
        { symbol: "fas fa-eye", letter: "V", fact: "Órbita Visual: Observación y representación", group: 6 },
        { symbol: "fas fa-headphones", letter: "A", fact: "Órbita Auditiva: Escucha y discriminación", group: 6 },
        { symbol: "fas fa-lightbulb", letter: "L", fact: "Órbita Lógica: Planificación y patrones", group: 6 },
        { symbol: "fas fa-handshake", letter: "S", fact: "Órbita Social: Decisiones y casos reales", group: 6 },
        { symbol: "fas fa-clock", letter: "T", fact: "Órbita Temporal: Metacognición y autorregulación", group: 6 }
    ]
};

// Estado del selector
let selectorState = {
    selectedCards: [],
    allCards: []
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeSelector();
});

function initializeSelector() {
    const cardGrid = document.getElementById('cardGrid');
    const allCards = [];
    
    // Crear todas las tarjetas mezcladas
    Object.keys(groupCards).forEach(group => {
        groupCards[group].forEach(card => {
            allCards.push({
                ...card,
                group: parseInt(group)
            });
        });
    });
    
    // Mezclar las tarjetas
    shuffleArray(allCards);
    selectorState.allCards = allCards;
    
    // Crear elementos HTML para las tarjetas
    allCards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardGrid.appendChild(cardElement);
    });
    
    updateGroupStatus();
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-selector border-2 border-slate-700 bg-slate-950/70 rounded-lg p-4 cursor-pointer transition-all hover:border-sky-500 hover:bg-slate-900/50 hover:transform hover:scale-105';
    cardDiv.dataset.group = card.group;
    cardDiv.dataset.index = index;
    
    // Determinar color según grupo
    const groupColors = {
        1: 'text-sky-400 border-sky-600',
        2: 'text-sky-400 border-sky-600',
        3: 'text-emerald-400 border-emerald-600',
        4: 'text-emerald-400 border-emerald-600',
        5: 'text-amber-400 border-amber-600',
        6: 'text-amber-400 border-amber-600'
    };
    
    const colorClass = groupColors[card.group] || 'text-slate-400 border-slate-600';
    
    cardDiv.innerHTML = `
        <div class="text-center">
            <div class="text-4xl mb-3 ${colorClass}">
                <i class="${card.symbol}"></i>
            </div>
            <div class="text-2xl font-bold mb-2 ${colorClass}">${card.letter}</div>
            <div class="text-xs text-slate-300">${card.fact}</div>
        </div>
    `;
    
    cardDiv.addEventListener('click', () => selectCard(cardDiv, card));
    
    return cardDiv;
}

function selectCard(cardElement, card) {
    if (cardElement.classList.contains('selected')) {
        // Deseleccionar
        cardElement.classList.remove('selected', 'bg-sky-900/50', 'border-sky-400', 'ring-2', 'ring-sky-400');
        selectorState.selectedCards = selectorState.selectedCards.filter(c => c.index !== cardElement.dataset.index);
    } else {
        // Seleccionar
        if (selectorState.selectedCards.length < 5) {
            cardElement.classList.add('selected', 'bg-sky-900/50', 'border-sky-400', 'ring-2', 'ring-sky-400');
            selectorState.selectedCards.push({
                ...card,
                index: cardElement.dataset.index,
                element: cardElement
            });
        } else {
            showNotification('Máximo 5 tarjetas por grupo', 'error');
        }
    }
    
    updateGroupStatus();
    
    // Verificar si se puede formar un grupo
    if (selectorState.selectedCards.length === 5) {
        checkGroupFormation();
    }
}

function checkGroupFormation() {
    const groups = selectorState.selectedCards.map(card => card.group);
    const uniqueGroups = [...new Set(groups)];
    
    if (uniqueGroups.length === 1) {
        // Grupo válido formado
        const groupNumber = uniqueGroups[0];
        showNotification(`¡Grupo ${groupNumber} formado correctamente!`, 'success');
        
        // Redirigir al grupo correspondiente
        setTimeout(() => {
            window.location.href = `index-grupo${groupNumber}.html`;
        }, 1500);
    } else {
        showNotification('Las tarjetas seleccionadas no pertenecen al mismo grupo', 'error');
        
        // Deseleccionar todas las tarjetas para empezar de nuevo
        setTimeout(() => {
            selectorState.selectedCards.forEach(card => {
                if (card.element) {
                    card.element.classList.remove('selected', 'bg-sky-900/50', 'border-sky-400', 'ring-2', 'ring-sky-400');
                }
            });
            selectorState.selectedCards = [];
            updateGroupStatus();
        }, 2000);
    }
}

function updateGroupStatus() {
    const statusEl = document.getElementById('groupStatus');
    const countEl = document.getElementById('selectedCount');
    
    if (countEl) {
        countEl.textContent = `${selectorState.selectedCards.length}/5`;
    }
    
    if (statusEl) {
        if (selectorState.selectedCards.length === 0) {
            statusEl.innerHTML = '<span class="text-slate-300">Selecciona 5 tarjetas del mismo grupo</span>';
            statusEl.className = 'text-center p-4 bg-slate-900/50 border border-slate-700 rounded-lg';
        } else if (selectorState.selectedCards.length < 5) {
            statusEl.innerHTML = `<span class="text-slate-300">Seleccionadas ${selectorState.selectedCards.length} de 5 tarjetas</span>`;
            statusEl.className = 'text-center p-4 bg-slate-900/50 border border-slate-700 rounded-lg';
        } else {
            const groups = selectorState.selectedCards.map(card => card.group);
            const uniqueGroups = [...new Set(groups)];
            
            if (uniqueGroups.length === 1) {
                statusEl.innerHTML = `<span class="text-emerald-400 font-semibold">✓ Grupo ${uniqueGroups[0]} formado correctamente</span>`;
                statusEl.className = 'text-center p-4 bg-emerald-900/20 border border-emerald-500 rounded-lg';
            } else {
                statusEl.innerHTML = '<span class="text-rose-400 font-semibold">✗ Las tarjetas no pertenecen al mismo grupo</span>';
                statusEl.className = 'text-center p-4 bg-rose-900/20 border border-rose-500 rounded-lg';
            }
        }
    }
}

function showNotification(message, type) {
    // Crear notificación toast simple
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-emerald-600 text-white' : 
        type === 'error' ? 'bg-rose-600 text-white' : 
        'bg-slate-800 text-slate-200'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

