# OOTC 프로젝트

- node : v18.16.0
- npm : 9.5.1
- react : 18.2.0
- react-native : 0.74.2
- expo : ^51.0.14
- redux : latest
- react-query : ^3.39.3

```
$ npm install - 프로젝트 설치
$ npm run start - 프로젝트 실행
(안드로이드 스튜디오, 시뮬레이터 설치 필요)
```

## 프로젝트 구조

---

```
root
├─ package.json
├─ package-lock.json
├─ babel.config.js
├─ metro.config.js
├─ app.config.js
├─ eas.json
├─ app.json
├─ .eslintrc
├─ .prettierrc
├─ tsconfig.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ api
│  ├─ components
│  │  ├─ atoms
│  │  ├─ molecules
│  │  ├─ organism
│  │  └─ template
│  ├─ pages
│  ├─ data
│  ├─ hooks
│  ├─ layouts
│  ├─ redux
│  ├─ routes
│  ├─ types
│  ├─ utils
│  └─ static
│     ├─ icons
│     └─ img
└─ README.md
```

<br />

#### `폴더구조`

- api - axios,react-query 관련 api 모음
- components - 컴포넌트 모음(재사용 o)
- components/pages 페이지 내 컴포넌트 모음
- data - 초기값 모음
- hooks - 리액트 구성 훅 모음(재사용 o)
- hooks/pages 페이지 내 훅 모음
- layouts - 기본적인 틀 제공
- pages - 각 페이지 모음
- routes - 라우터 설정 모음
- redux - 리덕스
- types - type 정의 모음
- utils - 유틸리티 모음

#### `데이터 단방향 지향`

- hooks : 재사용 함수 구성
- hooks/pages : 페이지에 해당하는 비즈니스 로직 구성 (재사용 x)
- components : 재사용 컴포넌트
- components/pages : 페이지의 컴포넌트 (재사용 x)

#### `atomic 디자인 패턴 적용 진행중`

- atoms -> molecule -> organism -> template -> pages

<br /><br />
