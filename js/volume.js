// 单击音量控制按钮时切换音量和图标
volumeControlButton.addEventListener('click', function() {
  isMuted = !isMuted;
  if (isMuted) {
    currentVolume = audioElement.volume;
    audioElement.volume = 0; // 静音
    volumeControlButton.innerHTML = '<i class="fas fa-volume-off" style="color: white;"></i>'; // 静音图标（白色）
  } else {
    audioElement.volume = currentVolume; // 取消静音，还原音量
    if (currentVolume >= 0.5) {
      volumeControlButton.innerHTML = '<i class="fas fa-volume-high" style="color: white;"></i>'; // 音量高图标（白色）
    } else {
      volumeControlButton.innerHTML = '<i class="fas fa-volume-low" style="color: white;"></i>'; // 音量低图标（白色）
    }
  }
});

// ...

// 创建音量控制横框
const volumeControlBar = document.createElement('input');
volumeControlBar.type = 'range';
volumeControlBar.min = 0;
volumeControlBar.max = 1;
volumeControlBar.step = 0.1;
volumeControlBar.value = currentVolume;
volumeControlBar.addEventListener('input', function() {
  // 更新音量并保持静音状态
  audioElement.volume = parseFloat(volumeControlBar.value);
  isMuted = false;
  if (currentVolume >= 0.5) {
    volumeControlButton.innerHTML = '<i class="fas fa-volume-high" style="color: white;"></i>'; // 音量高图标（白色）
  } else {
    volumeControlButton.innerHTML = '<i class="fas fa-volume-low" style="color: white;"></i>'; // 音量低图标（白色）
  }
});