화면 하단에 고정되는 버튼 영역입니다. Storybook(storybook.dndn.io/?path=/docs/floating--docs)의 "화면 하단에 고정되는 버튼입니다" 설명 그대로, 보통 취소/확인 버튼 2개를 화면 최하단에 띄울 때 씁니다.

## 소비자가 제공해야 하는 것

- `footers` (필수에 가까움) — 하단에 표시할 버튼들의 props 배열. 보통 `[{variant:'outline', label:'취소'}, {variant:'primary', label:'확인'}]`처럼 2개를 전달합니다. Button 컴포넌트의 props를 그대로 씁니다.
- `isVerticalLayout` — true면 버튼을 가로 대신 세로로 쌓습니다.

## 참고

- 실제로는 `position: fixed`로 화면 최하단에 붙습니다. 이 미리보기 카드 안에서는 카드 밖으로 튀어나가지 않도록 미리보기 전용 래퍼에 `transform`을 걸어 카드 내부에 고정되게 했을 뿐, 실제 화면에서는 뷰포트 최하단에 붙습니다.
- 위쪽에 흰색 그라데이션이 살짝 들어가서 스크롤되는 본문 콘텐츠와 자연스럽게 이어집니다.
