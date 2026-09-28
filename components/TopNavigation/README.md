화면 최상단 앱바입니다. Figma DDS 파일의 "[2.7]TopNavigation" 문서(node-id=4769-38509)에 있는 두 패밀리를 하나의 컴포넌트로 합쳤습니다.

- **default (48px)** — 뒤로가기(`<`) + 가운데 타이틀 + 닫기(`×`) 조합. Figma에 Left/Title/Right on·off 8가지 조합이 모두 있었는데, 실제로는 세 영역의 표시 여부만 다른 것이라 `showLeft`/`title`/`showRight` 세 prop으로 통합했습니다.
- **profile (60px)** — 홈 탭 등에서 쓰는 "김든든 〉" 같은 사용자 이름 + 설정 아이콘 조합입니다 (Figma의 "[2.7]topbar-60").

## 소비자가 제공해야 하는 것

**variant="default" (기본값)**

- `showLeft` — 왼쪽 뒤로가기 아이콘 표시 여부. 기본값 `true`.
- `title` — 가운데 타이틀 텍스트. 비우면 타이틀 영역이 빈 채로 남습니다(Figma의 Title=off와 동일).
- `showRight` — 오른쪽 닫기(×) 아이콘 표시 여부. 기본값 `false`.
- `onLeftClick` / `onRightClick` — 각 아이콘 클릭 시 호출됩니다.

**variant="profile"**

- `name` — 표시할 사용자 이름 (예: "김든든"). 옆에 작은 화살표(`>`)가 항상 붙습니다.
- `showSettings` — 오른쪽 설정(톱니바퀴) 아이콘 표시 여부. 기본값 `true`.
- `onNameClick` / `onSettingsClick` — 각 영역 클릭 시 호출됩니다.

## 참고

- default 변형은 왼쪽/오른쪽 아이콘이 안 보일 때도 24px 자리를 그대로 차지해서, 타이틀이 항상 화면 중앙에 오도록 했습니다(Figma 원본과 동일한 방식).
- 아이콘(뒤로가기 `<`, 닫기 `×`, 설정 톱니바퀴, 작은 화살표 `>`)은 원격 자산 URL이 만료되는 SVG라 동일한 형태의 인라인 벡터로 재현했습니다.
- 배경은 `neutral-surface`(#FFFFFF), 텍스트·아이콘은 `on-neutral-primary`(#20202D)를 씁니다. default 타이틀은 17px/500(medium), profile 이름은 22px/700(bold)로 Figma 실측값이며, 기존 body/heading 스케일에 정확히 일치하는 항목이 없어 하드코딩했습니다(다른 컴포넌트와 마찬가지로 줄 간격 미동기화 이슈의 연장선).
