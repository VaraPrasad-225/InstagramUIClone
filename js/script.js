/* ==========================================================================
   INSTAGRAM UI CLONE - CORE CONTROLLER & FEED INTERACTIONS (2026 EDITION)
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     15 REALISTIC FEED POSTS DATASET
     -------------------------------------------------------------------------- */
  const mockPosts = [
    {
      id: 1,
      username: 'cyber_alexa',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Tokyo, Japan',
      time: '2h',
      media: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      likes: 12450,
      isLiked: false,
      isSaved: false,
      caption: 'Late night vibes in Shibuya 🌌 Cyberpunk aesthetic is real here! #tokyo #japan #cyberpunk #neon',
      comments: [
        { username: 'neo_dev', text: 'Insane shot! Which lens are you using?' },
        { username: 'sophia.vibe', text: 'Take me back! 🇯🇵' }
      ]
    },
    {
      id: 2,
      username: 'neo_dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'San Francisco, CA',
      time: '4h',
      media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      likes: 8930,
      isLiked: true,
      isSaved: true,
      caption: 'Building next-gen web interfaces without frameworks ⚡ Pure Vanilla JS power! #frontend #webdev #code #javascript',
      comments: [
        { username: 'marcus_design', text: 'Clean syntax my friend 🔥' },
        { username: 'noah_code', text: '100% vanilla is the way!' }
      ]
    },
    {
      id: 3,
      username: 'sophia.vibe',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Amalfi Coast, Italy',
      time: '6h',
      media: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      likes: 34100,
      isLiked: false,
      isSaved: false,
      caption: 'Summer endless horizons 🌊 Sunshine, lemon trees, and ocean breeze. #italy #amalfi #travel #summer',
      comments: [
        { username: 'elena_art', text: 'Looks like a postcard 😍' },
        { username: 'chloe_lifestyle', text: 'Stunning view!' }
      ]
    },
    {
      id: 4,
      username: 'marcus_design',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Design Studio, NYC',
      time: '9h',
      media: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      likes: 5420,
      isLiked: false,
      isSaved: false,
      caption: 'Minimalist glassmorphism UI exploration. Less is always more. ✨ #ui #ux #design #minimalism',
      comments: [
        { username: 'neo_dev', text: 'The color hierarchy is spot on.' }
      ]
    },
    {
      id: 5,
      username: 'elena_art',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Paris, France',
      time: '12h',
      media: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      likes: 42800,
      isLiked: true,
      isSaved: false,
      caption: 'Bonjour Paris! Morning coffee with a view of the Eiffel Tower ☕🥐 #paris #eiffel #france #art',
      comments: [
        { username: 'sophia.vibe', text: 'Paris mon amour! ❤️' },
        { username: 'isabella_vogue', text: 'Chic as always!' }
      ]
    },
    {
      id: 6,
      username: 'urban_explorer',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Swiss Alps',
      time: '14h',
      media: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      likes: 19600,
      isLiked: false,
      isSaved: true,
      caption: 'Standing above the clouds at 4,000 meters 🏔️ Nature never fails to amaze. #alps #mountains #hiking',
      comments: [
        { username: 'ethan_fit', text: 'Breathtaking elevation, brother!' }
      ]
    },
    {
      id: 7,
      username: 'chloe_lifestyle',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Los Angeles, California',
      time: '16h',
      media: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      likes: 27300,
      isLiked: false,
      isSaved: false,
      caption: 'Home decor refresh! Loving these cozy warm interior accents 🌿🏡 #interiordesign #la #lifestyle',
      comments: [
        { username: 'hannah_botanics', text: 'Those indoor plants look super healthy!' }
      ]
    },
    {
      id: 8,
      username: 'liam_clicks',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Iceland',
      time: '1d',
      media: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80',
      likes: 31200,
      isLiked: false,
      isSaved: false,
      caption: 'Chasing Northern Lights across black sand beaches 🌌 Aurora magic. #iceland #aurora #nature',
      comments: [
        { username: 'urban_explorer', text: 'Bucket list destination right there!' }
      ]
    },
    {
      id: 9,
      username: 'aria_tunes',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Sound Studio 4',
      time: '1d',
      media: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      likes: 15800,
      isLiked: false,
      isSaved: false,
      caption: 'New album track drops this Friday! Who is ready? 🎵🎤 #music #studio #newalbum #vibes',
      comments: [
        { username: 'cyber_alexa', text: 'Ready for repeat mode!' }
      ]
    },
    {
      id: 10,
      username: 'ethan_fit',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Gym Arena',
      time: '2d',
      media: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      likes: 9400,
      isLiked: false,
      isSaved: false,
      caption: 'Consistency is key. 5 AM workouts pay off 💪 #fitness #motivation #workout #health',
      comments: [
        { username: 'gabe_skate', text: 'Beast mode!' }
      ]
    },
    {
      id: 11,
      username: 'zoe_gourmet',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Michelin Kitchen',
      time: '2d',
      media: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      likes: 22100,
      isLiked: true,
      isSaved: true,
      caption: 'Artisan hand-rolled pasta with black truffle cream sauce 🍝 Chef kiss! #foodie #gourmet #pasta',
      comments: [
        { username: 'sophia.vibe', text: 'My mouth is watering!' }
      ]
    },
    {
      id: 12,
      username: 'lucas_wander',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Santorini, Greece',
      time: '3d',
      media: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      likes: 38400,
      isLiked: false,
      isSaved: false,
      caption: 'White domes against deep blue seas. Santorini sunsets hit different. 🌅 #greece #santorini #travel',
      comments: [
        { username: 'elena_art', text: 'Paradise on earth.' }
      ]
    },
    {
      id: 13,
      username: 'maya_architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Berlin, Germany',
      time: '3d',
      media: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      likes: 11200,
      isLiked: false,
      isSaved: false,
      caption: 'Modern organic architecture seamlessly blending with nature. 🏢🌿 #architecture #design #berlin',
      comments: [
        { username: 'marcus_design', text: 'Love the spatial flow!' }
      ]
    },
    {
      id: 14,
      username: 'isabella_vogue',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      verified: true,
      location: 'Milan Fashion Week',
      time: '4d',
      media: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      likes: 49000,
      isLiked: false,
      isSaved: true,
      caption: 'Runway highlights from Milan 💃 Haute couture elegance. #fashion #milan #style #vogue',
      comments: [
        { username: 'chloe_lifestyle', text: 'Obsessed with that trench coat!' }
      ]
    },
    {
      id: 15,
      username: 'clara_sunset',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80',
      verified: false,
      location: 'Bali, Indonesia',
      time: '5d',
      media: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      likes: 26700,
      isLiked: false,
      isSaved: false,
      caption: 'Golden hour at Uluwatu 🌊 Ocean serenity. #bali #indonesia #goldenhour #sunset',
      comments: [
        { username: 'lucas_wander', text: 'Pure tranquility!' }
      ]
    }
  ];

  /* --------------------------------------------------------------------------
     TOAST NOTIFICATION MANAGER
     -------------------------------------------------------------------------- */
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    // Trigger reflow & show
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     FEED RENDERER WITH SKELETON LOADER
     -------------------------------------------------------------------------- */
  function initFeed() {
    const feedContainer = document.getElementById('postsFeedContainer');
    if (!feedContainer) return;

    // Display Loading Skeletons first
    renderFeedSkeletons(feedContainer, 3);

    // Simulate snappy network fetch (400ms)
    setTimeout(() => {
      feedContainer.innerHTML = '';
      mockPosts.forEach((post) => {
        const postCard = createPostElement(post);
        feedContainer.appendChild(postCard);
      });
    }, 400);
  }

  function renderFeedSkeletons(container, count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const skel = document.createElement('div');
      skel.className = 'post-card';
      skel.innerHTML = `
        <div class="post-header">
          <div class="post-user-info">
            <div class="skeleton skeleton-circle" style="width: 38px; height: 38px;"></div>
            <div style="display:flex; flex-direction:column; gap: 6px;">
              <div class="skeleton" style="width: 100px; height: 12px;"></div>
              <div class="skeleton" style="width: 60px; height: 10px;"></div>
            </div>
          </div>
        </div>
        <div class="skeleton" style="width: 100%; height: 380px;"></div>
        <div style="padding: 16px; display:flex; flex-direction:column; gap: 10px;">
          <div class="skeleton" style="width: 120px; height: 12px;"></div>
          <div class="skeleton" style="width: 80%; height: 12px;"></div>
        </div>
      `;
      container.appendChild(skel);
    }
  }

  function createPostElement(post) {
    const card = document.createElement('article');
    card.className = 'post-card page-transition';
    card.dataset.postId = post.id;

    const formattedLikes = post.likes.toLocaleString();

    let commentsHtml = '';
    post.comments.forEach((c) => {
      commentsHtml += `
        <div class="comment-row">
          <div>
            <span class="username">${c.username}</span>
            <span>${c.text}</span>
          </div>
          <i class="fa-regular fa-heart comment-like-small" onclick="this.classList.toggle('fa-solid'); this.classList.toggle('liked');"></i>
        </div>
      `;
    });

    card.innerHTML = `
      <header class="post-header">
        <div class="post-user-info">
          <img src="${post.avatar}" alt="${post.username}" class="post-user-avatar" loading="lazy">
          <div class="post-user-details">
            <div class="post-username-row">
              <a href="profile.html" class="post-username">${post.username}</a>
              ${post.verified ? '<i class="fa-solid fa-circle-check verified-icon" title="Verified"></i>' : ''}
              <span class="post-time">• ${post.time}</span>
            </div>
            ${post.location ? `<span class="post-location">${post.location}</span>` : ''}
          </div>
        </div>
        <button class="post-more-btn" aria-label="More options"><i class="fa-solid fa-ellipsis"></i></button>
      </header>

      <div class="post-media-container" tabindex="0" role="img" aria-label="Photo by ${post.username}">
        <img src="${post.media}" alt="Post by ${post.username}" class="post-media" loading="lazy">
        <i class="fa-solid fa-heart post-double-click-heart"></i>
      </div>

      <div class="post-actions">
        <div class="post-actions-left">
          <button class="action-btn like-btn ${post.isLiked ? 'liked' : ''}" aria-label="Like post">
            <i class="${post.isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <button class="action-btn comment-btn" aria-label="Comment on post">
            <i class="fa-regular fa-comment"></i>
          </button>
          <button class="action-btn share-btn" aria-label="Share post">
            <i class="fa-regular fa-paper-plane"></i>
          </button>
        </div>
        <button class="action-btn bookmark-btn ${post.isSaved ? 'saved' : ''}" aria-label="Save post">
          <i class="${post.isSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}"></i>
        </button>
      </div>

      <div class="post-details">
        <div class="post-likes-count"><span class="likes-num">${formattedLikes}</span> likes</div>
        <div class="post-caption">
          <a href="profile.html" class="username">${post.username}</a>
          <span>${formatHashtags(post.caption)}</span>
        </div>
        ${post.comments.length > 0 ? `<button class="view-comments-btn">View all ${post.comments.length} comments</button>` : ''}
        <div class="post-comments-preview">
          ${commentsHtml}
        </div>
      </div>

      <div class="add-comment-container">
        <button class="action-btn" aria-label="Emoji picker" style="font-size: 1.1rem;"><i class="fa-regular fa-face-smile"></i></button>
        <textarea class="comment-input" placeholder="Add a comment..." rows="1"></textarea>
        <button class="comment-post-btn">Post</button>
      </div>
    `;

    // Attach Interactivity Handlers
    const mediaContainer = card.querySelector('.post-media-container');
    const heartIcon = card.querySelector('.post-double-click-heart');
    const likeBtn = card.querySelector('.like-btn');
    const likesNumEl = card.querySelector('.likes-num');
    const bookmarkBtn = card.querySelector('.bookmark-btn');
    const shareBtn = card.querySelector('.share-btn');
    const commentInput = card.querySelector('.comment-input');
    const postCommentBtn = card.querySelector('.comment-post-btn');
    const commentsPreview = card.querySelector('.post-comments-preview');

    // Double-click heart
    let lastTap = 0;
    mediaContainer.addEventListener('click', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 300 && tapLength > 0) {
        triggerDoubleTapLike(post, card, heartIcon, likeBtn, likesNumEl);
      }
      lastTap = currentTime;
    });

    // Like Button Click
    likeBtn.addEventListener('click', () => {
      toggleLikePost(post, likeBtn, likesNumEl);
    });

    // Bookmark Toggle
    bookmarkBtn.addEventListener('click', () => {
      post.isSaved = !post.isSaved;
      bookmarkBtn.classList.toggle('saved');
      const icon = bookmarkBtn.querySelector('i');
      if (post.isSaved) {
        icon.className = 'fa-solid fa-bookmark';
        showToast('Post saved to your collection');
      } else {
        icon.className = 'fa-regular fa-bookmark';
        showToast('Post removed from saved');
      }
    });

    // Share Button
    shareBtn.addEventListener('click', () => {
      showToast('Link copied to clipboard');
    });

    // Comment Input & Submit
    commentInput.addEventListener('input', () => {
      if (commentInput.value.trim().length > 0) {
        postCommentBtn.classList.add('active');
      } else {
        postCommentBtn.classList.remove('active');
      }
    });

    postCommentBtn.addEventListener('click', () => {
      const text = commentInput.value.trim();
      if (!text) return;

      const newRow = document.createElement('div');
      newRow.className = 'comment-row fade-in';
      newRow.innerHTML = `
        <div>
          <span class="username">you</span>
          <span>${escapeHtml(text)}</span>
        </div>
        <i class="fa-regular fa-heart comment-like-small" onclick="this.classList.toggle('fa-solid'); this.classList.toggle('liked');"></i>
      `;

      commentsPreview.appendChild(newRow);
      commentInput.value = '';
      postCommentBtn.classList.remove('active');
      showToast('Comment posted!');
    });

    return card;
  }

  function triggerDoubleTapLike(post, card, heartIcon, likeBtn, likesNumEl) {
    if (!post.isLiked) {
      post.isLiked = true;
      post.likes += 1;
      likeBtn.classList.add('liked');
      likeBtn.querySelector('i').className = 'fa-solid fa-heart';
      likesNumEl.textContent = post.likes.toLocaleString();
    }

    heartIcon.classList.remove('animate-heart-explode');
    // Force reflow
    void heartIcon.offsetWidth;
    heartIcon.classList.add('animate-heart-explode');
  }

  function toggleLikePost(post, likeBtn, likesNumEl) {
    post.isLiked = !post.isLiked;
    const icon = likeBtn.querySelector('i');

    if (post.isLiked) {
      post.likes += 1;
      likeBtn.classList.add('liked');
      icon.className = 'fa-solid fa-heart';
      likeBtn.classList.add('animate-heart-pulse');
      setTimeout(() => likeBtn.classList.remove('animate-heart-pulse'), 350);
    } else {
      post.likes -= 1;
      likeBtn.classList.remove('liked');
      icon.className = 'fa-regular fa-heart';
    }

    likesNumEl.textContent = post.likes.toLocaleString();
  }

  function formatHashtags(text) {
    return text.replace(/(#[a-zA-Z0-9_]+)/g, '<span class="hashtag">$1</span>');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* --------------------------------------------------------------------------
     BACK TO TOP BUTTON & SIDEBAR DRAWERS
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* CREATE POST MODAL */
  function initCreatePostModal() {
    const modal = document.getElementById('createPostModal');
    const triggerBtns = document.querySelectorAll('.create-modal-trigger');
    if (!modal) return;

    triggerBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    });

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    const shareBtn = modal.querySelector('#shareNewPostBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        showToast('Your post has been shared!');
      });
    }
  }

  /* NOTIFICATIONS DRAWER */
  function initNotificationsDrawer() {
    const drawer = document.getElementById('notificationsDrawer');
    const triggers = document.querySelectorAll('.notifications-drawer-trigger');
    if (!drawer) return;

    triggers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = drawer.classList.toggle('open');
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
          if (isOpen) {
            appContainer.classList.add('sidebar-collapsed');
          } else {
            appContainer.classList.remove('sidebar-collapsed');
          }
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initFeed();
    initBackToTop();
    initCreatePostModal();
    initNotificationsDrawer();
  });
})();
