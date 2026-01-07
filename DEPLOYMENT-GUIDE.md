# 🚀 배포 가이드

## 현재 상태
- ✅ Notion 데이터베이스 연결 완료
- ✅ 방문자 트래킹 코드 구현 완료
- ✅ 테스트 성공

## 다음 단계: Vercel 배포

### 방법 1: Vercel CLI로 배포 (추천)

1. **Vercel 로그인**
```bash
vercel login
```

2. **환경 변수 설정**
```bash
vercel env add NOTION_API_KEY
# 입력: your_notion_api_key_here

vercel env add NOTION_DATABASE_ID
# 입력: your_database_id_here
```

3. **프로젝트 배포**
```bash
vercel --prod
```

4. **완료!**
   - 배포 URL을 받게 됩니다 (예: `https://greengyeol.vercel.app`)
   - 이 URL로 접속하면 방문자 데이터가 자동으로 Notion에 기록됩니다

### 방법 2: Vercel Dashboard로 배포

1. **GitHub에 푸시**
```bash
git add .
git commit -m "Add visitor tracking with Notion integration"
git push
```

2. **Vercel Dashboard**
   - https://vercel.com/new 접속
   - GitHub 저장소 선택
   - 환경 변수 추가:
     - `NOTION_API_KEY`: (your Notion integration token)
     - `NOTION_DATABASE_ID`: (your database ID from Notion URL)
   - Deploy 클릭

3. **완료!**
   - 배포가 완료되면 자동으로 URL이 생성됩니다
   - 커스텀 도메인도 설정 가능합니다

## 기존 GitHub Pages 유지하면서 사용하기

GitHub Pages를 계속 사용하고 싶다면:

1. **API만 Vercel에 배포**
   - 위의 방법으로 Vercel에 배포
   - 배포 URL 복사 (예: `https://greengyeol-api.vercel.app`)

2. **visitor-tracker.js 수정**
   - 6번째 줄을 다음과 같이 수정:
   ```javascript
   const API_ENDPOINT = 'https://greengyeol-api.vercel.app/api/track-visitor';
   ```

3. **GitHub Pages에 푸시**
   ```bash
   git add .
   git commit -m "Update API endpoint"
   git push
   ```

## 추적되는 데이터

방문자가 웹사이트에 방문하면 다음 정보가 Notion에 자동으로 기록됩니다:

| 데이터 | 설명 | 예시 |
|--------|------|------|
| 방문자 ID | 고유 식별자 | V-1704067200000-abc123 |
| 방문 일시 | 방문 시간 | 2025-01-07 14:30:00 |
| 페이지 URL | 방문한 페이지 | https://greengyeol.vercel.app |
| 유입 경로 | 어디서 왔는지 | Google, Instagram, Direct |
| 디바이스 | 기기 종류 | Desktop, Mobile, Tablet |
| 브라우저 | 사용 브라우저 | Chrome, Safari, Firefox |
| 국가 | 시간대 기반 | Asia, America, Europe |
| 체류 시간 | 페이지에 머문 시간 | 125초 |
| 행동 | 사용자 액션 | Page Visit, Booking Click 등 |
| 메모 | 추가 정보 | 해상도, 언어, User Agent |

## 추적되는 사용자 행동

- ✅ 페이지 방문 (5초 이상)
- ✅ 언어 변경 (EN ↔ 中文)
- ✅ 예약 버튼 클릭
- ✅ WhatsApp 연락 클릭
- ✅ 포트폴리오 섹션 조회
- ✅ 프로세스 섹션 조회
- ✅ Instagram 링크 클릭
- ✅ 스크롤 깊이 (25%, 50%, 75%)

## 테스트 확인

1. **로컬 테스트** (선택사항)
```bash
vercel dev
```
- http://localhost:3000 에서 테스트

2. **배포 후 테스트**
   - 배포된 URL 접속
   - 5초 이상 머물기
   - Notion 데이터베이스 확인
   - 새로운 방문자 데이터가 추가되었는지 확인

## 문제 해결

### "데이터가 기록되지 않아요"

1. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 에러 메시지 확인

2. **환경 변수 확인**
   ```bash
   vercel env ls
   ```
   - NOTION_API_KEY와 NOTION_DATABASE_ID가 있는지 확인

3. **Notion Integration 연결 확인**
   - Notion 페이지 → ⋯ → Connections
   - Integration이 연결되어 있는지 확인

### "CORS 에러가 발생해요"

- Vercel에 전체 프로젝트를 배포하면 CORS 문제가 없습니다
- GitHub Pages + Vercel API를 사용하는 경우, [api/track-visitor.js](api/track-visitor.js)에서 CORS 설정 확인

### "500 에러가 발생해요"

- Vercel 대시보드 → 프로젝트 → Logs 확인
- 환경 변수가 올바르게 설정되었는지 확인

## 커스텀 도메인 연결

1. **Vercel Dashboard**
   - 프로젝트 선택 → Settings → Domains
   - 커스텀 도메인 추가 (예: greengyeol.com)

2. **DNS 설정**
   - 도메인 제공업체에서 DNS 레코드 추가
   - Vercel이 제공하는 DNS 정보 입력

3. **완료!**
   - DNS 전파 대기 (최대 48시간, 보통 몇 분)
   - 커스텀 도메인으로 접속 가능

## 다음 단계

- [ ] Vercel에 배포
- [ ] 환경 변수 설정
- [ ] 실제 방문자 데이터 수집 시작
- [ ] Notion 데이터 분석
- [ ] 필요시 커스텀 도메인 연결

## 도움이 필요하시면

- Vercel 문서: https://vercel.com/docs
- Notion API 문서: https://developers.notion.com
- 이슈 제기: GitHub Issues
