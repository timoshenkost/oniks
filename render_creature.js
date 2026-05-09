function renderStat(name, stat) {
  return `
    <div>
      <div class="stat-name">${name}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-mod">${stat.mod}</div>
      <div class="stat-save" style="font-size: 0.7rem; color: var(--accent-light); min-height: 14px; margin-top: 2px;">
        ${stat.save ? `спас ${stat.save}` : '&nbsp;'}
      </div>
    </div>
  `;
}

function renderStatBlock(creature) {
  return `
    <details class="creature">
      <summary>
        ${creature.name}
      </summary>

      <div class="content">
        <div class="top-grid">
          <div><b>КЗ</b> ${creature.ac}</div>
          <div><b>Инициатива</b> ${creature.initiative}</div>
          <div><b>Хиты</b> ${creature.hp}</div>
          <div><b>Скорость</b> ${creature.speed}</div>
        </div>

        <div class="stats">
          ${renderStat("СИЛ", creature.stats.str)}
          ${renderStat("ЛОВ", creature.stats.dex)}
          ${renderStat("ТЕЛ", creature.stats.con)}
          ${renderStat("ИНТ", creature.stats.int)}
          ${renderStat("МДР", creature.stats.wis)}
          ${renderStat("ХАР", creature.stats.cha)}
        </div>

        <div class="info">
          <div><b>Размер:</b> ${creature.size}</div>
          <div><b>Чувства:</b> ${creature.senses}</div>
          <div><b>Языки:</b> ${creature.languages}</div>
          <div><b>Опасность:</b> ${creature.cr}</div>
        </div>

        ${creature.traits ? `
          <div class="section-title">Особенности</div>
          ${creature.traits.map(t => `
            <div class="action">
              <b>${t.name}.</b> ${t.desc}
            </div>
          `).join("")}
        ` : ""}

        <div class="section-title">Действия</div>
        ${creature.actions.map(a => `
          <div class="action">
            <b>${a.name}.</b> ${a.desc}
          </div>
        `).join("")}

        ${creature.bonusActions ? `
          <div class="section-title">Бонусные действия</div>
          ${creature.bonusActions.map(ba => `
            <div class="action">
              <b>${ba.name}.</b> ${ba.desc}
            </div>
          `).join("")}
        ` : ""}
      </div>
    </details>
  `;
}