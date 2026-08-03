/* ==========================================================================
   INSTAGRAM UI CLONE - SEARCH DRAWER MODULE
   ========================================================================== */

(function () {
  'use strict';

  const mockUsers = [
    { username: 'alexa_rivers', name: 'Alexa Rivers', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', verified: true, subtext: 'Followed by neo_dev + 12 others' },
    { username: 'neo_dev', name: 'Neo Anderson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', verified: false, subtext: 'Follows you' },
    { username: 'sophia.vibe', name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', verified: true, subtext: 'Popular' },
    { username: 'marcus_design', name: 'Marcus Sterling', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', verified: false, subtext: 'Suggested for you' },
    { username: 'elena_art', name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80', verified: true, subtext: 'Followed by chloe_lifestyle' },
    { username: 'urban_explorer', name: 'Dave Miller', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80', verified: false, subtext: 'New on Instagram' },
    { username: 'chloe_lifestyle', name: 'Chloe Bennett', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', verified: true, subtext: 'Followed by sophia.vibe' }
  ];

  let recentSearches = ['alexa_rivers', 'neo_dev', 'marcus_design'];

  function initSearch() {
    const searchTriggerBtns = document.querySelectorAll('.search-drawer-trigger');
    const searchDrawer = document.getElementById('searchDrawer');
    const searchInput = document.getElementById('drawerSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const searchResultsContainer = document.getElementById('searchResultsContent');

    if (!searchDrawer) return;

    searchTriggerBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSearchDrawer();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 0) {
          if (clearBtn) clearBtn.style.display = 'block';
          filterSearchResults(query);
        } else {
          if (clearBtn) clearBtn.style.display = 'none';
          renderRecentSearches();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        clearBtn.style.display = 'none';
        renderRecentSearches();
      });
    }

    // Render default state
    renderRecentSearches();
  }

  function toggleSearchDrawer() {
    const drawer = document.getElementById('searchDrawer');
    const appContainer = document.querySelector('.app-container');
    if (!drawer) return;

    const isOpen = drawer.classList.toggle('open');
    if (appContainer) {
      if (isOpen) {
        appContainer.classList.add('sidebar-collapsed');
      } else {
        appContainer.classList.remove('sidebar-collapsed');
      }
    }
  }

  function renderRecentSearches() {
    const container = document.getElementById('searchResultsContent');
    if (!container) return;

    if (recentSearches.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-tertiary); padding: 40px 0; font-size: 0.875rem;">No recent searches</div>`;
      return;
    }

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 600; font-size: 0.875rem;">Recent</span>
        <button id="clearAllRecentBtn" style="color: var(--accent-blue); font-size: 0.75rem; font-weight: 600;">Clear all</button>
      </div>
      <div class="search-users-list">
    `;

    recentSearches.forEach((uname) => {
      const u = mockUsers.find((user) => user.username === uname) || {
        username: uname,
        name: uname,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        subtext: 'Recent'
      };

      html += `
        <div class="suggestion-item" style="cursor: pointer;" onclick="window.location.href='profile.html'">
          <div class="suggestion-user">
            <img src="${u.avatar}" class="suggestion-avatar" alt="${u.username}">
            <div class="suggestion-info">
              <span class="suggestion-username">${u.username} ${u.verified ? '<i class="fa-solid fa-circle-check verified-icon"></i>' : ''}</span>
              <span class="suggestion-relation">${u.name} • ${u.subtext}</span>
            </div>
          </div>
          <button class="remove-recent-btn" data-username="${u.username}" style="color: var(--text-tertiary); font-size: 0.9rem;"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    const clearAllBtn = document.getElementById('clearAllRecentBtn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        recentSearches = [];
        renderRecentSearches();
      });
    }

    container.querySelectorAll('.remove-recent-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const uname = btn.getAttribute('data-username');
        recentSearches = recentSearches.filter((item) => item !== uname);
        renderRecentSearches();
      });
    });
  }

  function filterSearchResults(query) {
    const container = document.getElementById('searchResultsContent');
    if (!container) return;

    const matches = mockUsers.filter(
      (u) => u.username.toLowerCase().includes(query) || u.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-tertiary); padding: 40px 0; font-size: 0.875rem;">No results found for "${query}"</div>`;
      return;
    }

    let html = `<div class="search-users-list">`;
    matches.forEach((u) => {
      html += `
        <div class="suggestion-item" style="cursor: pointer;" onclick="window.location.href='profile.html'">
          <div class="suggestion-user">
            <img src="${u.avatar}" class="suggestion-avatar" alt="${u.username}">
            <div class="suggestion-info">
              <span class="suggestion-username">${u.username} ${u.verified ? '<i class="fa-solid fa-circle-check verified-icon"></i>' : ''}</span>
              <span class="suggestion-relation">${u.name} • ${u.subtext}</span>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', initSearch);
  window.toggleSearchDrawer = toggleSearchDrawer;
})();
