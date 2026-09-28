# 든든 DDS

든든(dndn)에서 쓰이는 디자인 시스템 "DDS"를 정리한 브랜드 북입니다. Figma 파일(`DDS`)에 등록된 컬러, 타이포그래피, 스페이싱, 코너 라운드 값을 그대로 가져와 정리했습니다.

디자이너가 상주하지 않는 상황에서, 배너·소셜 이미지·간단한 화면 목업 등을 만들 때 이 시스템에 정의된 색상·글자 크기·간격·둥글기 값을 기준으로 삼으면 브랜드 톤을 크게 벗어나지 않습니다.

## 이 저장소에 대하여

이 저장소는 [클로드(Claude) Artifact로 만든 "든든 DDS"](https://claude.ai/artifact/GP8k9wzzxtgRxH7MUKJTan) 페이지를 파일로 export한 것입니다. Artifact 페이지가 조직 정책상 외부/링크 공유가 막혀 있어서, 코드와 문서를 그대로 이 저장소로 옮겨 GitHub 등에 올려 팀과 공유할 수 있게 했습니다.

구조는 다음과 같습니다.

- `README.md` — 지금 보고 있는 이 브랜드 북/체크리스트 문서.
- `tokens.json` — 컬러·타이포그래피·스페이싱·코너 라운드 디자인 토큰.
- `components/` — 컴포넌트별 폴더(`Button`, `Modal`, `Icon` 등)에 각각 `README.md`(사용법 설명)와 `preview.html`(React 기반 미리보기 예제)가 있고, 최상위에 모든 컴포넌트를 묶은 `bundle.js`/`bundle.css`, 타입 정의 `index.d.ts`가 있습니다. `bundle.js`는 `window.React`/`window.ReactDOM`이 이미 로드된 페이지에서 `<script>` 태그로 그대로 불러 쓰는 순수 IIFE 스크립트라, 별도 번들러 설정 없이도 컴포넌트별 `preview.html`처럼 바로 확인할 수 있습니다. 실제 서비스 코드베이스에 통합할 때는 이 구현을 참고해서 프로젝트의 컴포넌트로 옮겨 쓰는 걸 권장합니다(React 버전, 번들러, 디자인 토큰 연동 방식이 프로젝트마다 다르기 때문입니다).
- `assets/` — Logo 컴포넌트가 쓰는 심볼 이미지(color/mono-black/mono-white) 3종. 원래 Claude Artifact 안에서는 내부 blob 저장소(`/_blob/...`) 경로를 썼는데, 저장소 밖에서도 동작하도록 `bundle.js`의 참조를 `../assets/...` 상대 경로로 바꿔뒀습니다. 저장소 구조를 바꾸면 이 경로도 같이 맞춰줘야 합니다.
- `fonts/` — Pretendard 폰트 파일(Regular/Medium/Bold).
- `design-system.json` — Claude Artifact 쪽에서 쓰던 메타데이터(에셋 그룹, 변경 이력 등)입니다. 실제 컴포넌트 사용에는 필요 없고, 이 문서가 Artifact에서 어떻게 관리돼왔는지 참고용으로만 남겨뒀습니다.

이후 Figma나 Storybook에서 컴포넌트가 추가·변경되면, Claude Artifact 쪽 원본을 먼저 업데이트한 뒤 이 저장소로 다시 export하는 방식을 권장합니다(반대로 이 저장소만 직접 고치면 Artifact 원본과 내용이 갈릴 수 있습니다).

## 한눈에 보기

전체 디자인 시스템 항목을 기준으로, 이 문서에 반영된 것에는 ✅ 표시했습니다.

**파운데이션**

- ✅ color
- ✅ icons (`ic-badge-account`의 금융기관 로고 세트는 제외)
- ~~graphic~~ — 별도 그래픽 가이드 없음 (궨 확인, 생략)
- ✅ logo
- ✅ corner radius
- ✅ spacing
- ✅ typography

**컴포넌트**

- ✅ accordion
- ✅ badge
- ✅ bottom navigation (menu)
- ✅ button (floating)
- ✅ chip
- ✅ card (container)
- ✅ description (=caption)
- ✅ tooltip
- ✅ divider
- ✅ dim
- ✅ empty
- ✅ indicator
- ✅ list
- ✅ modal
- ✅ selection controls (checkbox, radio, toggle)
- ✅ tabs
- ✅ textfield
- ✅ top navigation (app bar)
- ✅ Tos(term of service)
- ✅ snackbar

**branding**

- ✅ logo

아래에서 반영된 항목들을 더 자세히 설명합니다.

## 브랜드 컬러

Figma와 실제 코드 Storybook(storybook.dndn.io)의 컬러 파운데이션(v2.6)을 대조해서 두 곳이 정확히 일치하는 걸 확인했고, Storybook에 있던 더 세분화된 스케일까지 반영했습니다.

- **on-main (`#7066F4`)** — 가장 중요한 브랜드 보라색. 기본 버튼, 링크, 선택된 상태, 핵심 액션. 마케팅 자료에서도 포인트 컬러로 가장 먼저 씁니다.
- **on-success (`#0CAA6E`)** / **on-danger (`#FF2541`)** — 성공/완료, 에러/경고를 나타낼 때만 제한적으로 사용합니다. 장식용으로 쓰지 않습니다. 옅은 배경이 필요하면 각각 **success-container (`#E7F7F1`)**, **danger-container (`#FFF0F2`)**를 씁니다.
- **on-neutral-primary (`#20202D`)** → **secondary → tertiary → quaternary → caption → micro** 순으로 점점 옅어지는 6단계 텍스트 컬러입니다. 기본 본문은 primary, 캡션·placeholder는 caption이나 micro를 씁니다.
- **inverse-on-main / inverse-on-success / inverse-on-danger / inverse-on-neutral (모두 `#FFFFFF`)** — 브랜드색·성공·에러·다크 컨테이너처럼 색이 채워진 배경 위에 올라가는 글자·아이콘 색.
- **neutral-surface / neutral-layer / neutral-container** 각 3~5단계 — 중립(회색) 배경 레이어. 숫자가 커질수록(단계가 높아질수록) 더 진하게, 더 강조된 표면입니다.
- **main-surface / main-layer / main-container** 각 3~4단계 — 브랜드 톤이 은은하게 들어간 배경 레이어. 선택된 행, 강조 패널 등에 씁니다.

전체 39개 컬러 토큰의 정확한 값은 이 시스템의 tokens.json에서 확인할 수 있어요.

## 타이포그래피

서체는 **Pretendard**이며, 실제 `.woff2` 파일(Regular 400 / Medium 500 / Bold 700)을 등록해서 미리보기에도 정확한 서체가 적용됩니다. Heading은 굵게(700), Body는 두 가지 굵기(400/500)로 구성됩니다.

| 스타일 | 크기 | 용도 |
| --- | --- | --- |
| heading-xxl | 30px | 랜딩/온보딩 헤드라인 |
| heading-xl | 28px | 큰 강조 제목 |
| heading-lg | 26px | 강조 제목 |
| heading-md | 24px | 주요 화면 제목 |
| heading-sm | 22px | 기본 화면 제목 |
| heading-xs | 20px | 작은 제목, 섹션 타이틀 |
| body-lg (400/500) | 16px | 큰 본문, 버튼 라벨 |
| body-md (400/500) | 15px | 본문, 리스트 아이템 |
| body-sm (400/500) | 14px | 기본 본문 |
| body-xs (400/500) | 13px | 작은 본문 |
| body-xxs (400/500) | 12px | 캡션, 보조 정보 |

## 스페이싱 & 코너 라운드

스페이싱은 0 / 2 / 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 48 / 56px의 스케일을 사용합니다. 카드·섹션 내부는 16px, 섹션 사이는 24~32px을 기본으로 씁니다.

코너 라운드는 0 / 4 / 8 / 12 / 16 / 20 / 24px, 그리고 필/아바타/플로팅 버튼용 완전 원형(1000px)까지 8단계입니다. 버튼·입력창은 8px, 카드·모달은 12~16px을 기본으로 씁니다.

## 컴포넌트

모두 실제 코드 Storybook(storybook.dndn.io)에서 렌더링된 스타일을 실측해서 그대로 옮겼습니다. 자세한 사용법은 각 컴포넌트의 카드를 확인하세요.

- **TextField** — 라벨 + 입력창 + 보조설명/에러 메시지로 구성된 텍스트 입력 필드 (기본/비활성화/읽기전용/에러 상태 지원).
- **Tooltip** — 마우스를 올렸을 때만 보이는 어두운 `info` 툴팁과, 항상 떠 있는 보라색 `guide` 안내 팝오버.
- **Badge** — "NEW" 같은 작은 강조 뱃지. primary(danger 톤)/secondary(브랜드)/tertiary(중립) 3색 × small/medium/large 3크기.
- **Button** — 기본 액션 버튼. primary/secondary/tertiary/warning/outline/text 6가지 변형과 disabled 상태.
- **Floating** — 화면 하단에 고정되는 버튼 영역 (보통 취소/확인 버튼 2개).
- **Indicator** — 온보딩·캐러셀용 단계 표시 점(dot). 라벨과 함께 쓸 수도 있습니다.
- **Modal** — 화면을 어둡게 덮고 중앙에 뜨는 확인/알림 모달. `head`(제목+닫기/제목만/없음), `bodyEmphasis`, `buttons`+`buttonLayout`(가로/세로)로 [Figma "[2.5]Modal" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4743-42135)에 정리된 모든 head×bottom 조합을 표현합니다. 궨님 확인 결과 이 문서에 정리된 것 외에 다른 케이스는 없지만, Figma 문서 밖에 있던 Fullscreen(프로모션/배너형)은 궨님이 알려주신 [Storybook 문서](https://storybook.dndn.io/?path=/docs/modal--docs)를 참고해 `layout` prop(`'centered'`/`'padded'`/`'fullscreen'`)으로 추가했습니다.
- **BottomSheetModal** — 화면 하단에서 올라오는 시트형 모달. Modal과 헤더/버튼 규칙은 같고, 본문에 선택 목록·계좌 목록·약관 동의 같은 긴 콘텐츠를 담을 때 씁니다. 같은 Figma 문서의 "[2.5]Bottom Sheet Modal" 섹션에서 가져왔습니다.
- **Snackbar** — 화면 하단에 잠깐 떴다 사라지는 짧은 안내 메시지(토스트) 모양.
- **Checkbox** — 체크박스. 테두리 없는 기본형과 사각 테두리가 있는 rounded형.
- **Radio (RadioGroup)** — 여러 옵션 중 하나를 고르는 라디오 그룹.
- **Card** — 여러 선택지 중 하나를 고르는 카드형 컨테이너(Choice Card). full(한 줄 전체)/half(두 개씩 나란히) 두 레이아웃, 선택/미선택 상태 지원. 이 컴포넌트만 예외적으로 Storybook이 아니라 [Figma의 Choice Card 프레임](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=5098-18702)에서 직접 가져왔습니다 (궨이 "확정된 버전"으로 확인).
- **Description** — 캡션 크기의 보조 설명/유의사항 블록. 아이콘+제목(선택)과 불릿 리스트로 구성. Card와 마찬가지로 Storybook이 아니라 [Figma의 "[2.5]caution" 프레임](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4751-11157)에서 직접 가져왔습니다.
- **Divider** — 영역을 구분하는 가로선. thin(1px, neutral-container)/thick(10px, neutral-layer) 두 굵기. [Figma Divider 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4744-5390)에서 직접 가져왔습니다 (Figma 레이어 이름은 "Chip"으로 잘못 붙어 있음, 궨 확인).
- **Dim** — 화면 전체를 어둡게 까는 배경 처리(`rgba(0,0,0,0.4)`). [Figma Dim 컴포넌트](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=2007-23185)에서 직접 가져왔고, Modal 내부 배경도 이 컴포넌트와 같은 스타일(`dds-dim` 클래스)을 공유하도록 정리했습니다.
- **Tos** — 약관 동의 화면의 체크리스트. "전체 동의하기" 바가 있는 형태와 제목만 있는 형태 두 가지를 지원합니다. Card·Description·Divider와 마찬가지로 Storybook이 아니라 [Figma의 "TOS(2.5)" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=5076-13277)에서 직접 가져왔습니다.
- **TopNavigation** — 화면 최상단 앱바. 기본(뒤로가기/타이틀/닫기, 48px)과 프로필(사용자 이름 + 설정 아이콘, 60px) 두 변형. 마찬가지로 Storybook이 아니라 [Figma의 "[2.7]TopNavigation" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4769-38509)에서 직접 가져왔습니다.
- **Tabs** — 밑줄형 탭. 모든 탭에 하단 밑줄이 있고 선택된 탭만 진하게 강조됩니다. Figma에 2개/3개짜리 변형이 따로 있었는데 `items` 배열로 개수 상관없이 일반화했습니다. 마찬가지로 Storybook이 아니라 [Figma의 "[2.5]Tabs" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=5088-10483)에서 직접 가져왔습니다.
- **Empty** — 표시할 내용이 없을 때 쓰는 빈 상태(아이콘 + 안내 문구). 마찬가지로 Storybook이 아니라 [Figma의 "EmptyPage" 컴포넌트](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=376-27456)에서 직접 가져왔습니다.
- **Chip / ChipGroup** — 필터/카테고리 선택용 알약 모양 칩과, 여러 칩을 가로로 나열한 필터 그룹. 마찬가지로 Storybook이 아니라 [Figma의 "[2.5]Chip" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4744-3733)에서 직접 가져왔습니다.
- **BottomNavigation** — 화면 하단 탭 메뉴(홈/투자/라운지/더보기 등). 마찬가지로 Storybook이 아니라 [Figma의 "[2.5]BottomNavigation" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4740-4139)에서 직접 가져왔습니다.
- **Accordion** — 펼치고 접을 수 있는 아코디언(제목 + 여러 소제목·설명). 마찬가지로 Storybook이 아니라 [Figma의 "[2.5]Accordion" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4677-9397)에서 직접 가져왔습니다.
- **Toggle / CurrencyToggle** — on/off 스위치와, 원화/달러 표시 단위를 전환하는 알약형 스위치. Checkbox/Radio와 함께 selection controls를 완성합니다. 마찬가지로 Storybook이 아니라 [Figma의 "Selection Controls" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=1906-22953)에서 직접 가져왔습니다.
- **Icon** — 시스템 아이콘 카탈로그 (line/fill/emph/bottombar 4가지 스타일). Storybook이 아니라 [Figma의 "[2.5]Icon" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4740-5488)에서 가져왔습니다. `ic-badge-account`(은행·증권사·보험사 로고 세트)는 궨님 요청대로 제외했고, 카카오/애플 로그인 아이콘도 브랜드 마크라 재현하지 않았습니다. 자세한 내용과 한계는 컴포넌트 카드를 확인하세요.
- **List** — 설정 화면 등에서 쓰는 한 줄 리스트 행 (타이틀 + 값/화살표/토글). Storybook이 아니라 [Figma의 "Common-1Row" 문서](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=378-20655)에서 직접 가져왔습니다. 이 문서는 색상 파운데이션과 다른 이전 버전 컬러(#2A3652, #21399B)를 쓰고 있어 그대로 하드코딩했습니다 — 자세한 내용은 컴포넌트 카드를 확인하세요.
- **Logo** — 든든 심볼("D" 마크) + "dndn" 워드마크. `tone`으로 color(보라 그라데이션)/mono-black/mono-white를 고르고, color 톤에서는 `color`로 primary(검정 워드마크)/reverse(흰색 워드마크)를 고릅니다. 다른 컴포넌트와 달리 Figma나 Storybook이 아니라 [Notion "dndn 브랜드 리소스" 문서](https://www.notion.so/upriseinc/dndn-542cacf8dc5a45388551abf20c4d8022)와 궨님이 전달해주신 로고 파일들(컬러 SVG + 공식 mono-black/mono-white 래스터)을 기준으로 만들었습니다. 워드마크는 벡터 그대로, 심볼 세 톤은 모두 원본에 래스터로만 있어 이미지 그대로 옮겼습니다. 자세한 내용은 컴포넌트 카드를 확인하세요.

## 아직 동기화되지 않은 항목 (Not synced)

- **줄 간격(line-height)** — Figma에서 값을 확인하지 못해 임의로 채우지 않았습니다.

## 원본

Figma 파일: `DDS` (https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS)
