화면 하단에서 올라오는 시트형 모달입니다. `Modal`(중앙 팝업)과 헤더·버튼 규칙은 동일하고, 선택 목록·계좌 목록·약관 동의처럼 더 긴 본문을 담을 때 씁니다. Figma의 "[2.5]Modal" 문서 중 "[2.5]Bottom Sheet Modal" 섹션([node-id=4743-42135](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4743-42135))에서 가져왔습니다.

## 소비자가 제공해야 하는 것

- `open` — 표시 여부.
- `title` / `head` — `Modal`과 동일. `'title-close'`(기본, title 있을 때) / `'title'` / `'none'`.
- `bodyEmphasis` — `Modal`과 동일. Figma의 "Untitled-emphasis" 케이스용.
- `children` — 본문 내용. Figma에는 Text / Emphasis-Text / Description / Selection List / Radio List / Account List(1Row·2Row) / TOS / None 같은 body variant가 있는데, 이 컴포넌트는 그 각각을 별도 prop으로 만들지 않고 **`children`에 이미 있는 DDS 컴포넌트를 조합해서 채우는 방식**으로 열어뒀습니다 — 여러 줄 선택 목록은 `List`나 `Checkbox`/`Radio`를 나열, 약관 동의는 `Tos`/`TosItem`을 그대로 넣으면 됩니다. Figma 원본처럼 body 형태별 전용 레이아웃을 고정하기보다, 이미 만들어둔 컴포넌트를 재사용하는 게 더 일관적이라고 판단했습니다.
- `buttons` / `buttonLayout` — `Modal`과 동일 규칙(배열 길이 = 버튼 개수, 방향은 `buttonLayout`).
- `showNotch` — 하단 홈 인디케이터 바(iPhone 노치 기기용) 표시 여부. 기본값 `true`.
- `onClose` — 우측 상단 닫기(×) 버튼 클릭 시 호출됩니다.

## 참고

- `Modal`과 마찬가지로 실제로는 `position: fixed`로 화면 하단에 붙습니다. 미리보기 카드 안에서는 카드 밖으로 튀어나가지 않도록 전용 래퍼로 감쌌습니다.
- 궨님이 Figma "[2.5]Modal" 문서 전체를 확인해주신 결과 여기 정리된 head × body × bottom 조합 외에 다른 케이스는 없습니다.
- 하단 버튼 영역 아래 노치 바까지의 간격은 Figma의 "바텀간격가이드" 섹션 기준으로, 버튼이 있을 때는 버튼 아래 여백만 살짝 주고 노치 바(34px)가 이어지도록 만들었습니다.
