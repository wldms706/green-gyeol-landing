# Notion 방문자 트래킹 설정 가이드

## 📋 개요
이 시스템은 웹사이트 방문자 데이터를 자동으로 Notion 데이터베이스에 기록합니다.

## 🔧 설정 방법

### 1. Notion 데이터베이스 구조 확인
Notion 데이터베이스에 다음 속성(Properties)이 있는지 확인하세요:

| 속성 이름 | 타입 | 설명 |
|---------|------|------|
| Timestamp | Date | 방문 시간 |
| Page URL | URL | 방문한 페이지 URL |
| Referrer | Text | 유입 경로 (어디서 왔는지) |
| User Agent | Text | 브라우저 및 기기 정보 |
| Screen Resolution | Text | 화면 해상도 |
| Language | Select | 선택한 언어 (en, zh) |
| Timezone | Text | 사용자 시간대 |
| Session Duration | Number | 페이지 체류 시간 (초) |

### 2. Vercel 계정 설정

1. [Vercel](https://vercel.com) 계정 생성 (GitHub 연동 권장)
2. Vercel CLI 설치:
```bash
npm install -g vercel
```

### 3. 환경 변수 설정

1. 프로젝트 루트에서 Vercel 로그인:
```bash
vercel login
```

2. 환경 변수 추가:
```bash
vercel env add NOTION_API_KEY
# 입력: your_notion_integration_token

vercel env add NOTION_DATABASE_ID
# 입력: your_notion_database_id
```

### 4. 프로젝트 배포

1. 의존성 설치:
```bash
npm install
```

2. Vercel에 배포:
```bash
vercel --prod
```

3. 배포 완료 후 제공되는 URL을 복사 (예: `https://greengyeol.vercel.app`)

### 5. API 엔드포인트 설정

**옵션 A: Vercel에 전체 사이트 배포 (권장)**
- 전체 프로젝트를 Vercel에 배포하면 상대 경로(`/api/track-visitor`)가 자동으로 작동합니다
- [visitor-tracker.js](visitor-tracker.js)의 6번째 줄을 그대로 유지

**옵션 B: GitHub Pages + Vercel API**
- HTML/CSS/JS는 GitHub Pages에서 호스팅
- API만 Vercel에서 호스팅
- [visitor-tracker.js](visitor-tracker.js)의 6번째 줄을 다음과 같이 수정:

```javascript
// 변경 전
const API_ENDPOINT = '/api/track-visitor';

// 변경 후 (배포된 Vercel URL 사용)
const API_ENDPOINT = 'https://your-project.vercel.app/api/track-visitor';
```

### 6. 테스트

1. 웹사이트를 열고 5초 이상 머무르기
2. Notion 데이터베이스 확인
3. 새로운 방문자 데이터가 추가되었는지 확인

## 📊 추적되는 데이터

- **Timestamp**: 방문 시간
- **Page URL**: 현재 페이지 URL
- **Referrer**: 유입 경로 (예: Google, Instagram, 직접 방문)
- **User Agent**: 브라우저 및 운영체제 정보
- **Screen Resolution**: 방문자의 화면 크기
- **Language**: 선택한 언어 (EN/中文)
- **Timezone**: 방문자의 시간대
- **Session Duration**: 페이지에 머문 시간 (초)

## 🎯 트래킹 시점

방문자 데이터는 다음 시점에 기록됩니다:

1. 페이지 로드 후 5초 경과 시
2. 언어 변경 버튼 클릭 시
3. 예약 버튼 클릭 시
4. 페이지 이탈 시

## 🔒 보안

- API 키는 서버 측 환경 변수에 안전하게 저장
- 클라이언트에 API 키가 노출되지 않음
- CORS 정책으로 허용된 도메인만 API 접근 가능

## 🚀 대안: GitHub Pages + 외부 서버

현재 GitHub Pages를 사용 중이라면:

**옵션 1**: Vercel로 완전 마이그레이션
- GitHub 저장소를 Vercel에 연결
- 자동 배포 설정
- 커스텀 도메인 유지 가능

**옵션 2**: GitHub Pages + Vercel Functions
- HTML/CSS/JS는 GitHub Pages에서 계속 호스팅
- API만 Vercel에서 호스팅
- visitor-tracker.js에서 Vercel API URL 사용

## 📝 문제 해결

### 데이터가 기록되지 않는 경우

1. 브라우저 콘솔에서 에러 확인
2. Notion Integration이 데이터베이스에 연결되었는지 확인
3. Vercel 환경 변수가 올바르게 설정되었는지 확인
4. API 엔드포인트 URL이 정확한지 확인

### CORS 에러가 발생하는 경우

[api/track-visitor.js](api/track-visitor.js)에서 허용된 도메인 확인:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
// 또는
res.setHeader('Access-Control-Allow-Origin', 'https://wldms706.github.io'); // 특정 도메인만 허용
```

## 📞 도움이 필요하시면

- Vercel 문서: https://vercel.com/docs
- Notion API 문서: https://developers.notion.com
