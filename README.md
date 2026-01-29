# Next.js Template

Next.js + TypeScript 프로젝트를 위한 기본 설정 템플릿입니다.

## 포함된 설정

### ESLint
- Next.js core-web-vitals
- TypeScript 규칙
- React Query 규칙
- import 자동 정렬
- Prettier 연동

### Prettier
- 싱글 쿼트, 세미콜론, 후행 쉼표
- Tailwind CSS 클래스 자동 정렬

### Git Hooks (Husky + lint-staged)
- **pre-commit**: staged 파일에 ESLint + Prettier 자동 적용
- **commit-msg**: 커밋 메시지 형식 검증

### Commitlint
이모지 기반 커밋 메시지 형식:

| 타입 | 용도 |
|------|------|
| ✨ Feat | 새로운 기능/페이지 추가 |
| 🐛 Fix | 버그 수정 |
| ♻️ Refactor | 코드 리팩토링 |
| ⚙️ Chore | 설정, 빌드, 패키지 등 |
| 🎨 Style | 스타일/포맷팅 변경 |
| 📝 Docs | 문서 관련 |
| 🚚 Rename | 파일/폴더명 변경 |
| 🔥 Remove | 코드/파일 삭제 |

예시: `✨ Feat: 로그인 페이지 추가`

## 사용 방법

### 1. 템플릿으로 새 프로젝트 생성

GitHub에서 "Use this template" 버튼 클릭 또는:

```bash
gh repo create my-new-project --template your-username/nextjs-template --clone
cd my-new-project
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

## 커스터마이징

### React Query를 사용하지 않는 경우

`eslint.config.mjs`에서 React Query 관련 설정을 제거하고, `package.json`에서 `@tanstack/eslint-plugin-query`를 삭제하세요.

### Tailwind CSS를 사용하지 않는 경우

`.prettierrc`에서 `plugins` 배열을 제거하고, `package.json`에서 `prettier-plugin-tailwindcss`를 삭제하세요.
