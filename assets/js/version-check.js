(function () {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    var baseurlMeta = document.querySelector('meta[name="baseurl"]');
    var baseurl = baseurlMeta ? baseurlMeta.content || '' : '';
    var normalizedBaseurl = baseurl.replace(/\/$/, '');
    var swUrl = normalizedBaseurl + '/sw.js';

    function createNotification() {
        var root = document.createElement('aside');
        root.id = 'sw-update-notification';
        root.setAttribute('role', 'alert');
        root.setAttribute('aria-live', 'assertive');
        root.setAttribute('aria-atomic', 'true');
        root.innerHTML = [
            '<div class="sw-update-head">',
            '  <button type="button" class="sw-update-close" aria-label="关闭提示">×</button>',
            '</div>',
            '<div class="sw-update-body">',
            '  <p>检测到网站新版本。</p>',
            '  <button type="button" class="sw-update-refresh" aria-label="立即刷新">立即刷新</button>',
            '</div>'
        ].join('');

        var style = document.createElement('style');
        style.textContent = [
            '#sw-update-notification {',
            '  position: fixed;',
            '  right: 1rem;',
            '  bottom: 1rem;',
            '  z-index: 9999;',
            '  width: min(24rem, calc(100vw - 2rem));',
            '  border-radius: 12px;',
            '  border: 1px solid rgba(0, 0, 0, 0.12);',
            '  background: rgba(255, 255, 255, 0.94);',
            '  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);',
            '  backdrop-filter: blur(8px);',
            '  color: #222;',
            '  opacity: 0;',
            '  transform: translateY(16px);',
            '  pointer-events: none;',
            '  transition: opacity 0.2s ease, transform 0.2s ease;',
            '}',
            '#sw-update-notification.show {',
            '  opacity: 1;',
            '  transform: translateY(0);',
            '  pointer-events: auto;',
            '}',
            '.sw-update-head {',
            '  display: flex;',
            '  justify-content: flex-end;',
            '  padding: 0.35rem 0.35rem 0;',
            '}',
            '.sw-update-close {',
            '  border: 0;',
            '  background: transparent;',
            '  font-size: 1.2rem;',
            '  line-height: 1;',
            '  cursor: pointer;',
            '  color: #666;',
            '}',
            '.sw-update-body {',
            '  padding: 0 1rem 1rem;',
            '  text-align: center;',
            '}',
            '.sw-update-body p {',
            '  margin: 0 0 0.75rem;',
            '}',
            '.sw-update-refresh {',
            '  border: 0;',
            '  border-radius: 8px;',
            '  padding: 0.45rem 0.9rem;',
            '  background: #005375;',
            '  color: #fff;',
            '  cursor: pointer;',
            '}',
            '.sw-update-refresh[disabled] {',
            '  opacity: 0.65;',
            '  cursor: not-allowed;',
            '}',
            '@media (prefers-color-scheme: dark) {',
            '  #sw-update-notification {',
            '    background: rgba(35, 35, 35, 0.94);',
            '    border-color: rgba(255, 255, 255, 0.14);',
            '    color: #f4f4f4;',
            '  }',
            '  .sw-update-close {',
            '    color: #d7d7d7;',
            '  }',
            '}',
            '@media (max-width: 640px) {',
            '  #sw-update-notification {',
            '    left: 1rem;',
            '    right: 1rem;',
            '    width: auto;',
            '  }',
            '}',
        ].join('\n');

        document.head.appendChild(style);
        document.body.appendChild(root);

        return {
            root: root,
            closeButton: root.querySelector('.sw-update-close'),
            refreshButton: root.querySelector('.sw-update-refresh')
        };
    }

    var notification = createNotification();
    var refreshing = false;

    function showNotification() {
        notification.root.classList.add('show');
    }

    function hideNotification() {
        notification.root.classList.remove('show');
    }

    notification.closeButton.addEventListener('click', function () {
        hideNotification();
    });

    navigator.serviceWorker.register(swUrl, { updateViaCache: 'none' }).then(function (registration) {
        if (registration.waiting) {
            showNotification();
        }

        registration.addEventListener('updatefound', function () {
            if (!registration.installing) {
                return;
            }

            registration.installing.addEventListener('statechange', function () {
                if (registration.waiting && navigator.serviceWorker.controller) {
                    showNotification();
                }
            });
        });

        notification.refreshButton.addEventListener('click', function () {
            if (!registration.waiting) {
                return;
            }

            notification.refreshButton.disabled = true;
            registration.waiting.postMessage('SKIP_WAITING');
            hideNotification();
        });
    }).catch(function () {
        // Keep page usable when Service Worker is unavailable.
    });

    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) {
            return;
        }

        refreshing = true;
        window.location.reload();
    });
})();
