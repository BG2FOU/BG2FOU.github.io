document.addEventListener('DOMContentLoaded', function() {
  // 获取所有需要懒加载的图片
  const lazyImages = document.querySelectorAll('.img-loading');
  
  // 创建 IntersectionObserver 实例
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        loadImage(img);
        observer.unobserve(img);
      }
    });
  });
  
  // 监控每个图片
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  // 加载图片的函数
  function loadImage(img) {
    const src = img.getAttribute('data-src');
    img.style.backgroundImage = `url('${src}')`;
    img.classList.add('img-loaded');
  }
});