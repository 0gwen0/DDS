약관 동의 화면에 쓰이는 체크리스트입니다. Figma DDS 파일의 "TOS(2.5)" 문서(node-id=5076-13277)에 있는 여러 조각(`tos-list`, `tos-allcheck`, `tos-set-list`, `tos-set-allcheck`)을 하나의 컴포넌트로 합쳤습니다.

실제 화면 예시(회원가입, 본인인증 등)를 보면 "전체 동의하기" 바가 있는 버전과, 제목만 있고 전체 동의 바는 없는 버전 두 가지가 섞여 쓰이고 있어서, `showAllCheck`로 두 형태를 모두 지원합니다.

## 소비자가 제공해야 하는 것

- `items` (필수) — 약관 목록. 각 항목은 `{ label, description?, checked? }`. `description`을 주면 라벨 아래 회색 보조 설명이 한 줄 붙습니다(단독 약관 항목 강조용 — Figma의 "with caption=on" 변형).
- `title` — 리스트 위에 붙는 제목 텍스트 (예: "구독 서비스 이용약관"). `showAllCheck`가 true면 무시됩니다(전체 동의 바가 제목 역할을 대신함).
- `showAllCheck` — 상단에 "전체 동의하기" 바를 붙일지 여부. 기본값 `false`.
- `allCheckLabel` — 전체 동의 바의 텍스트. 기본값 `'전체 동의하기'`.
- `allChecked` — 전체 동의 바의 체크 상태.
- `onAllCheckToggle` — 전체 동의 바 클릭 시 호출됩니다.
- `onItemToggle(index)` — 개별 항목의 체크박스 영역 클릭 시 호출됩니다.
- `onItemDetailClick(index)` — 개별 항목 우측 화살표(`>`) 클릭 시 호출됩니다. 약관 전문 보기 등 상세 이동에 씁니다.
- `caption` — 리스트 맨 아래 붙는 옅은 보조 문구 (선택).

## 참고

- 체크 아이콘은 Figma에서 `checkbox-none-emp`라는 이름으로 되어 있는데, 기존 Checkbox 컴포넌트(사각형 테두리)와 달리 테두리 없이 체크 모양만 있는 형태입니다. 원격 자산이 만료되는 SVG라 벡터를 그대로 가져오는 대신 동일한 형태의 체크마크 도형으로 재현했습니다. 색상은 미체크 `neutral-container-highest`(#D1D1D6), 체크됨 `on-main`(#7066F4)을 썼습니다 — tokens.json에 "Checkbox/Radio 선택 색상"으로 이미 지정된 규칙을 그대로 따른 것입니다.
- 우측 화살표(`>`) 아이콘도 같은 이유로 라인 아이콘을 인라인 도형으로 재현했습니다(`on-neutral-micro` 색상).
- "전체 동의하기" 바는 배경 `neutral-layer`, 모서리 `radius-sm`(8px), 패딩 16px/12px이며, 이 바가 있을 때는 목록 각 항목에 좌우 12px 패딩이 추가로 붙습니다(Figma의 tos-set-allcheck 스펙).
- 항목 사이 간격은 16px, 제목·전체동의바와 목록 사이 간격은 20px입니다.
- 라벨은 body-lg-medium(16px/500), 보조 설명(description)은 13px/400/줄간격 18px·색상 `on-neutral-micro`(#B0B0B9)로 Figma 실측값을 그대로 반영했습니다(기존 타이포 스케일에 정확히 일치하는 항목이 없어 하드코딩).
- 맨 아래 `caption`은 Figma 문서에 있던 부가 캡션 인스턴스를 일반화한 것으로, 정확한 원문 카피는 확인하지 못해 스타일만(13px, `on-neutral-caption`) 옮겼습니다. 실제 카피가 필요하면 알려주세요.
