<script lang="ts">
  import { onMount } from 'svelte'
  
  let code: string = ''
  let error: string = ''
  let loading = true
  let result: any = null
  
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search)
    code = urlParams.get('code') || ''
    error = urlParams.get('error') || ''
    
    if (code) {
      handleOAuthCallback()
    } else if (error) {
      loading = false
    } else {
      loading = false
    }
  })
  
  const handleOAuthCallback = async () => {
    try {
      const response = await fetch('http://52.78.113.147:8080/login/oauth2/code/kakao?code=' + code, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      result = await response.json()
    } catch (e: any) {
      error = e.message
    } finally {
      loading = false
    }
  }
</script>

<div class="oauth-container">
  {#if loading}
    <div class="loading">
      <h2>로그인 처리 중...</h2>
      <p>잠시만 기다려주세요.</p>
    </div>
  {:else if error}
    <div class="error">
      <h2>로그인 실패</h2>
      <p>에러: {error}</p>
      <button on:click={() => window.location.href = '/'}>홈으로 돌아가기</button>
    </div>
  {:else if result}
    <div class="success">
      <h2>로그인 성공!</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      <button on:click={() => window.location.href = '/'}>홈으로 돌아가기</button>
    </div>
  {:else}
    <div class="no-code">
      <h2>인증 코드가 없습니다</h2>
      <p>카카오 로그인을 다시 시도해주세요.</p>
      <button on:click={() => window.location.href = '/'}>홈으로 돌아가기</button>
    </div>
  {/if}
</div>

<style>
  .oauth-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
  }
  
  .loading {
    color: #666;
  }
  
  .error {
    color: #d32f2f;
  }
  
  .success {
    color: #2e7d32;
  }
  
  .no-code {
    color: #666;
  }
  
  button {
    background-color: #1976d2;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #1565c0;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
    text-align: left;
    overflow-x: auto;
    max-height: 300px;
    overflow-y: auto;
  }
</style>
