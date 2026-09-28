필터/카테고리 선택용 알약(pill) 모양 칩입니다. Figma DDS 파일의 "[2.5]Chip" 문서(node-id=4744-3733)에 있는 `[2.5]Chip`(단일 칩, Selected on/off)과 `[2.5]Chipset`(칩을 가로로 나열한 필터 그룹)을 함께 옮겼습니다.

## 소비자가 제공해야 하는 것

**Chip (단일 칩)**

- `label` (필수) — 칩 안에 표시할 텍스트.
- `selected` — 선택 여부. 기본값 `false`.
- `onClick` — 클릭 시 호출됩니다.

**ChipGroup (칩셋 — 여러 칩을 가로로 나열)**

- `items` (필수) — 칩 라벨 문자열 배열. 실제 화면 예시(거래내역 필터)처럼 "전체", "투자금 입금", "투자금 출금" 등을 나열할 때 씁니다.
- `selected` — 현재 선택된 칩의 index. 기본값 `0`.
- `onChange(index)` — 칩 클릭 시 호출됩니다.

## 참고

- 선택된 칩은 배경 `#323240` + 흰 글자(13px/500 medium), 선택되지 않은 칩은 배경 `neutral-container`(#F4F4F5) + 글자 `on-neutral-caption`(#92929E, 13px/400 regular)입니다.
- 선택된 배경색 `#323240`은 tokens.json의 `inverse-neutral-container`(#20202D, "어두운 배경 다크 칩/툴팁 등 컨테이너"로 이미 용도가 같다고 적혀있는 토큰)와 매우 비슷하지만 정확히 일치하지는 않아서, Figma 실측값을 그대로 하드코딩했습니다. 기존 토큰과 통일하고 싶다면 알려주세요.
- 패딩은 좌우 14px/상하 10px, 모서리는 완전 원형(`radius-full`)입니다.
- 칩 사이 간격은 8px입니다.
