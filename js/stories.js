/* ==========================================================================
   INSTAGRAM UI CLONE - STORIES MODULE & STORY VIEWER
   ========================================================================== */

(function () {
  'use strict';

  // 20 Demo Users dataset for Stories
  const storyUsers = [
    { id: 1, username: 'your_story', name: 'Your Story', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', isUser: true, seen: false },
    { id: 2, username: 'cyber_alexa', name: 'Alexa Rivers', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80' },
    { id: 3, username: 'neo_dev', name: 'Neo Anderson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
    { id: 4, username: 'sophia.vibe', name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
    { id: 5, username: 'marcus_design', name: 'Marcus Sterling', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80' },
    { id: 6, username: 'elena_art', name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80', seen: true, storyImg: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80' },
    { id: 7, username: 'urban_explorer', name: 'Dave Miller', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
    { id: 8, username: 'chloe_lifestyle', name: 'Chloe Bennett', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
    { id: 9, username: 'liam_clicks', name: 'Liam Vance', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', seen: true, storyImg: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80' },
    { id: 10, username: 'aria_tunes', name: 'Aria Montgomery', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80' },
    { id: 11, username: 'ethan_fit', name: 'Ethan Hunt', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { id: 12, username: 'zoe_gourmet', name: 'Zoe Kravitz', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80', seen: true, storyImg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
    { id: 13, username: 'lucas_wander', name: 'Lucas Scott', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1476514525535-ce74f45814ce?auto=format&fit=crop&w=600&q=80' },
    { id: 14, username: 'maya_architect', name: 'Maya Lin', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
    { id: 15, username: 'noah_code', name: 'Noah James', avatar: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=200&q=80', seen: true, storyImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80' },
    { id: 16, username: 'isabella_vogue', name: 'Isabella Rossi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80' },
    { id: 17, username: 'gabe_skate', name: 'Gabriel Thorne', avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80' },
    { id: 18, username: 'hannah_botanics', name: 'Hannah Abbott', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80', seen: true, storyImg: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80' },
    { id: 19, username: 'oliver_tech', name: 'Oliver Stark', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
    { id: 20, username: 'clara_sunset', name: 'Clara Oswald', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=80', seen: false, storyImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' }
  ];

  let currentStoryIndex = 0;
  let storyTimer = null;
  let progressInterval = null;
  let isPaused = false;

  function renderStories() {
    const storiesWrapper = document.getElementById('storiesScrollWrapper');
    if (!storiesWrapper) return;

    storiesWrapper.innerHTML = '';

    storyUsers.forEach((user, index) => {
      const storyEl = document.createElement('div');
      storyEl.className = `story-item ${user.seen ? 'seen' : ''}`;
      storyEl.setAttribute('tabindex', '0');
      storyEl.setAttribute('role', 'button');
      storyEl.setAttribute('aria-label', `View story by ${user.username}`);

      storyEl.innerHTML = `
        <div class="story-avatar-wrapper">
          <div class="story-avatar-inner">
            <img src="${user.avatar}" alt="${user.username}" class="story-avatar" loading="lazy">
          </div>
        </div>
        <span class="story-username">${user.username}</span>
      `;

      storyEl.addEventListener('click', () => {
        if (user.isUser) {
          if (window.showToast) window.showToast('Add to story clicked');
        } else {
          openStoryViewer(index);
        }
      });

      storyEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          storyEl.click();
        }
      });

      storiesWrapper.appendChild(storyEl);
    });

    initStoryScrollControls();
  }

  function initStoryScrollControls() {
    const wrapper = document.getElementById('storiesScrollWrapper');
    const prevBtn = document.getElementById('storiesPrevBtn');
    const nextBtn = document.getElementById('storiesNextBtn');

    if (!wrapper || !prevBtn || !nextBtn) return;

    function updateNavState() {
      if (wrapper.scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
      } else {
        prevBtn.classList.remove('hidden');
      }

      if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 10) {
        nextBtn.classList.add('hidden');
      } else {
        nextBtn.classList.remove('hidden');
      }
    }

    prevBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: 300, behavior: 'smooth' });
    });

    wrapper.addEventListener('scroll', updateNavState);
    updateNavState();
  }

  /* FULLSCREEN STORY VIEWER OVERLAY */
  function openStoryViewer(index) {
    currentStoryIndex = index;
    const modal = document.getElementById('storyViewerModal');
    if (!modal) return;

    const user = storyUsers[currentStoryIndex];
    if (!user || user.isUser) return;

    user.seen = true;
    renderStories();

    modal.classList.add('active');
    updateStoryViewerContent();
  }

  function updateStoryViewerContent() {
    const modal = document.getElementById('storyViewerModal');
    if (!modal) return;

    const user = storyUsers[currentStoryIndex];
    if (!user) {
      closeStoryViewer();
      return;
    }

    const avatarImg = modal.querySelector('.story-viewer-avatar');
    const usernameEl = modal.querySelector('.story-viewer-username');
    const mediaImg = modal.querySelector('.story-viewer-media');
    const fillEl = modal.querySelector('.story-progress-fill');

    if (avatarImg) avatarImg.src = user.avatar;
    if (usernameEl) usernameEl.textContent = user.username;
    if (mediaImg) mediaImg.src = user.storyImg || user.avatar;

    // Reset Progress
    if (fillEl) fillEl.style.width = '0%';
    startStoryProgress();
  }

  function startStoryProgress() {
    clearInterval(progressInterval);
    const fillEl = document.querySelector('#storyViewerModal .story-progress-fill');
    let width = 0;
    const duration = 4000; // 4 seconds per story
    const step = 50;

    progressInterval = setInterval(() => {
      if (!isPaused) {
        width += (step / duration) * 100;
        if (fillEl) fillEl.style.width = `${width}%`;

        if (width >= 100) {
          clearInterval(progressInterval);
          nextStory();
        }
      }
    }, step);
  }

  function nextStory() {
    if (currentStoryIndex < storyUsers.length - 1) {
      currentStoryIndex++;
      updateStoryViewerContent();
    } else {
      closeStoryViewer();
    }
  }

  function prevStory() {
    if (currentStoryIndex > 1) {
      currentStoryIndex--;
      updateStoryViewerContent();
    } else {
      closeStoryViewer();
    }
  }

  function closeStoryViewer() {
    clearInterval(progressInterval);
    const modal = document.getElementById('storyViewerModal');
    if (modal) modal.classList.remove('active');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderStories();

    const storyModal = document.getElementById('storyViewerModal');
    if (storyModal) {
      const closeBtn = storyModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeStoryViewer);
      }

      storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) closeStoryViewer();
      });

      // Story Tap Navigation (Left vs Right half)
      const storyCard = storyModal.querySelector('.story-viewer-card');
      if (storyCard) {
        storyCard.addEventListener('click', (e) => {
          if (e.target.closest('.modal-close-btn')) return;
          const rect = storyCard.getBoundingClientRect();
          const clickX = e.clientX - rect.left;

          if (clickX < rect.width / 3) {
            prevStory();
          } else {
            nextStory();
          }
        });
      }

      // Keyboard Controls
      document.addEventListener('keydown', (e) => {
        if (!storyModal.classList.contains('active')) return;
        if (e.key === 'ArrowRight') nextStory();
        if (e.key === 'ArrowLeft') prevStory();
        if (e.key === 'Escape') closeStoryViewer();
      });
    }
  });

  window.openStoryViewer = openStoryViewer;
})();
