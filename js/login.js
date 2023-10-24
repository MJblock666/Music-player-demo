//Thanks Chatgpt for this js file
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const loginButton = document.getElementById('loginButton');
  
    // 获取登录区域和用户信息区域
    const loginArea = document.getElementById('loginArea');
    const userInfoArea = document.getElementById('userInfoArea');
    const usernameSpan = document.getElementById('usernameSpan');
  
    // 为按钮添加点击事件监听器
    loginButton.addEventListener('click', async () => {
      const { value: formValues } = await Swal.fire({
        title: 'Login',
        icon : 'info',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Username">' +
          '<input id="swal-input2" type="password" class="swal2-input" placeholder="Password">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          const username = document.getElementById('swal-input1').value;
          const password = document.getElementById('swal-input2').value;
  
          // 在这里添加你的用户名和密码验证逻辑
          if (username === 'admin' && password === '123456') {
            return [username, password];
          } else {
            Swal.showValidationMessage('Invalid username or password');
            return false;
          }
        }
      });
  
      if (formValues) {
        // 隐藏登录区域，显示用户信息区域，并设置用户名
        loginArea.style.display = 'none';
        userInfoArea.style.display = 'block';
        usernameSpan.textContent = formValues[0];
  
        // 保存用户名到Cookie，有效期设置为7天
        const username = formValues[0];
        document.cookie = `username=${username}; max-age=${60 * 60 * 24 * 7}`;
  
        // 弹出通知消息
        Swal.fire('Login Successful', `Welcome, ${username}!`, 'success');
      }
    });
  
    // 检查Cookie以确定是否自动显示 userInfoArea
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'username') {
        // Cookie中有用户名，显示 userInfoArea
        loginArea.style.display = 'none';
        userInfoArea.style.display = 'block';
        usernameSpan.textContent = value;
        break;
      }
    }
  });