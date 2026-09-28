카드 형태의 선택형 컨테이너(Choice Card)입니다. Figma DDS 파일의 "Choice Card" 컴포넌트(node-id=5098-18702, 궨이 "확정된 버전"으로 확인해준 프레임)를 그대로 옮겼습니다. README 상단 체크리스트의 "card (container)"는 이 패턴을 기준으로 반영했습니다.

## layout 두 가지

- **full (기본값)** — 한 줄 전체를 차지하는 큰 카드. 문장형 선택지에 씁니다.
- **half** — 두 개씩 나란히 배치하는 작은 카드. 아이콘 + 짧은 텍스트 조합에 씁니다.

## 소비자가 제공해야 하는 것

- `text` — 카드 안에 표시할 텍스트.
- `selected` — 선택 여부. true면 main-layer 배경 + on-main 테두리 + medium 굵기 텍스트로 바뀝니다.
- `icon` — half 레이아웃에서만 쓰이는 아이콘(이모지 문자 등). full에는 아이콘이 없습니다.
- `layout` — `'full'`(기본값) 또는 `'half'`.
- `onClick` — 클릭 시 호출됩니다.
- 여러 장을 세로로 쌓아 "Set"을 구성하려면, 바깥에서 12px 간격의 flex column으로 감싸면 됩니다. half는 그 안에서 두 개씩 12px 간격의 행으로 한 번 더 묶어주세요 (Figma "Choice Card Set - Full/Half" 구조 그대로).

## 참고

- 선택 시 테두리(1.4px, on-main)가 추가되어도 카드 크기가 변하지 않도록, 미선택 상태에도 투명한 1.4px 테두리를 항상 깔아둡니다. Figma 원본은 미선택일 때 테두리가 아예 없지만, 웹 구현에서 크기 밀림을 막기 위해 흔히 쓰는 방식입니다.
- 모서리는 `radius-sm`(8px), 배경은 `neutral-layer`(미선택)/`main-layer`(선택), 테두리는 `on-main`, 텍스트 색은 `on-neutral-tertiary`이며 글자 스타일은 `body-md`(미선택)/`body-md-medium`(선택)을 씁니다.
- Figma 파일 안의 "Usage Guidelines(TBD)"와 "Spec(TBD)" 섹션은 아직 비어 있어서, 세트 구성 간격 등 일부 규칙은 확정되지 않았습니다. 확정되면 알려주시면 반영하겠습니다.
