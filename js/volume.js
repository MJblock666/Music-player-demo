document.addEventListener('DOMContentLoaded', function() {
    // 获取音量控制按钮
    const volumeButton = document.getElementById('volumeButton');
    
    // 创建音量控制横框
    const volumeControl = document.createElement('div');
    volumeControl.className = 'volume-control';
    volumeControl.innerHTML = `
      <input type="range" id="volumeSlider" min="0" max="100">
    `;
    
    // 添加横框到页面，但最初隐藏
    document.body.appendChild(volumeControl);
    volumeControl.style.display = 'none';
  
    // 标记当前是否为静音状态
    let isMuted = false;
  
    // 为音量控制按钮添加点击事件
    volumeButton.addEventListener('click', () => {
      if (isMuted) {
        // 切换为非静音状态
        isMuted = false;
        volumeButton.innerHTML = '<i class="fas fa-play"></i>';
        // 这里添加取消静音的逻辑
      } else {
        // 切换为静音状态
        isMuted = true;
        volumeButton.innerHTML = '<i class="fas fa-pause"></i>';
        // 这里添加静音的逻辑
      }
    });
  
    // 为音量控制按钮添加悬停事件
    volumeButton.addEventListener('mouseenter', () => {
      // 显示音量控制横框
      volumeControl.style.display = 'block';
    });
  
    // 为音量控制横框添加鼠标离开事件
    volumeControl.addEventListener('mouseleave', () => {
      // 隐藏音量控制横框
      volumeControl.style.display = 'none';
    });
  });