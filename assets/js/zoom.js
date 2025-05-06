$(document).ready(function () {
  const zoom = mediumZoom('[data-zoomable]', {
    background: getComputedStyle(document.documentElement)
      .getPropertyValue('--global-bg-color') + 'ee'
  });

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (
          node.nodeType === 1 &&
          node.classList.contains('medium-zoom-image--opened')
        ) {
          node.style.maxWidth = '70vw';
          node.style.maxHeight = '70vh';
          node.style.transformOrigin = 'center center';
          node.style.transition = 'transform 0.3s ease-in-out';
          node.style.transform = node.style.transform.replace(/scale\([^)]+\)/, 'scale(7.5)');

          window.addEventListener('scroll', preventZoomClose, true);
        }
      }
    }
  });

  function preventZoomClose(e) {
    // 取消 medium-zoom 的 scroll 触发 close 行为
    e.stopImmediatePropagation();
  }

  zoom.on('closed', ({ target }) => {
    target.style.transform = '';
    target.style.maxWidth = '';
    target.style.maxHeight = '';

    // 释放 scroll 拦截器
    window.removeEventListener('scroll', preventZoomClose, true);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
