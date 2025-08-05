<script lang="ts">
    let loginResponse: string = ''
  
  
    const handleKakaoLogin = async () => {
      try {
        const res = await fetch('http://52.78.113.147:8080/login/oauth2/code/kakao', {
          method: 'GET',
        })
  
        if (!res.ok) throw new Error('카카오 로그인 요청 실패')
  
        const result = await res.text()
        loginResponse = `응답 성공: ${result}`
      } catch (e: any) {
        loginResponse = `에러 발생: ${e.message}`
      }
    }
  
    const navigateToKakaoLogin = () => {
      const kakaoClientId = import.meta.env.VITE_KAKAO_CLIENT_ID
      const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URL
      
      if (kakaoClientId === 'your_kakao_client_id_here') {
        alert('환경 변수가 설정되지 않았습니다. .env 파일에 VITE_KAKAO_CLIENT_ID를 설정해주세요.')
        return
      }
      
      window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`
    }
  </script>
  
  <div class="container">
    <h1>카카오 OAuth 로그인 테스트</h1>
    
    <div class="login-section">
      <h2>로그인 방법 선택</h2>
      
      <div class="button-group">
        <button class="kakao-btn" on:click={navigateToKakaoLogin}>
          카카오 로그인
        </button>
        
        <button class="api-btn" on:click={handleKakaoLogin}>
          API 직접 호출 테스트
        </button>
      </div>
      
      {#if loginResponse}
        <div class="response-section">
          <h3>API 응답:</h3>
          <pre>{loginResponse}</pre>
        </div>
      {/if}
    </div>
    
    <div class="info-section">
      <h3>설정 정보</h3>
      <p><strong>Client ID:</strong> {import.meta.env.VITE_KAKAO_CLIENT_ID || '설정되지 않음'}</p>
      <p><strong>Redirect URI:</strong> {import.meta.env.VITE_KAKAO_REDIRECT_URL || '설정되지 않음'}</p>
    </div>
  </div>

<style>
  .container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    margin: 0;
  }
  
  .login-section {
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  
  .button-group {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .kakao-btn {
    background-color: #FEE500;
  }
  
  .kakao-btn:hover {
    background-color: #FDD800;
  }
  
  .api-btn {
    background-color: #edafec;
  }
  
  .api-btn:hover {
    background-color: rgb(217, 138, 231);
  }
  
  .response-section {
    margin-top: 20px;
    text-align: left;
  }
  
  .response-section h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    border: 1px solid #ddd;
  }
  
  .info-section {
    background-color: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
  }
  
  .info-section h3 {
    color: #1976d2;
    margin-bottom: 15px;
  }
  
  .info-section p {
    margin: 8px 0;
    color: #555;
  }
</style>
  