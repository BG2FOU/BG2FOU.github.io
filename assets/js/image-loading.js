document.addEventListener('DOMContentLoaded', function() {
  // 只针对文章内容区域的图片
  const articleContent = document.querySelector('.article-content');
  if (!articleContent) return;

  const articleImages = articleContent.getElementsByTagName('img');
  
  Array.from(articleImages).forEach(img => {
    // 创建包装容器
    const wrapper = document.createElement('div');
    wrapper.className = 'img-wrapper';
    
    // 创建占位元素
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    
    // 保存原始图片src
    const originalSrc = img.src;
    img.removeAttribute('src');
    img.classList.add('img-loading');
    
    // 包装图片
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(placeholder);
    wrapper.appendChild(img);
    
    // 图片加载处理
    img.onload = function() {
      img.classList.add('img-loaded');
      placeholder.style.display = 'none';
    }
    
    img.onerror = function() {
      wrapper.innerHTML = '<div class="img-error">图片加载失败</div>';
    }
    
    // 设置src开始加载
    img.src = originalSrc;
  });
});