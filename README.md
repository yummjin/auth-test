# 카카오 OAuth 로그인 테스트

카카오 OAuth 로그인 테스트 애플리케이션입니다.

## 설정 방법

### 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음과 같은 내용을 추가합니다.

```env
VITE_KAKAO_CLIENT_ID=your_kakao_client_id_here
VITE_KAKAO_REDIRECT_URI=http://localhost:5173/oauth
```

### 2. 카카오 개발자 설정

1. [카카오 개발자 콘솔](https://developers.kakao.com/)에 로그인
2. 애플리케이션 생성
3. 플랫폼 > Web 플랫폼 등록
4. 카카오 로그인 > Redirect URI 등록: `http://localhost:5173/oauth`
5. 앱 키 > REST API 키를 복사하여 `.env` 파일의 `VITE_KAKAO_CLIENT_ID`에 설정

### 3. 개발 서버 실행

```bash
pnpm install
pnpm run dev
```

## 기능

- 카카오 OAuth 로그인
- OAuth 콜백 처리
- API 직접 호출 테스트
- 환경 변수 상태 확인
