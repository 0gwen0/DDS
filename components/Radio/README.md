여러 옵션 중 하나를 고르는 라디오 그룹입니다. Storybook(storybook.dndn.io/?path=/docs/selection-controls-radio--docs)에서 렌더링된 스타일을 그대로 옮겼습니다.

## 소비자가 제공해야 하는 것

- `options` (필수) — `{value, label}` 객체 배열.
- `checked` — 현재 선택된 값.
- `name` — 라디오 input의 name 속성. 같은 그룹은 동일한 값을 가져야 브라우저가 하나만 선택되게 처리합니다.
- `isVerticalLayout` — 세로로 배치.
- `isBlock` — 옵션마다 한 줄 전체를 차지하는 블록 레이아웃 (간격 `space-28`).

## 참고

- 기본 레이아웃은 `grid-template-columns: repeat(auto-fit, minmax(100px, auto))`라서 옵션 개수와 폭에 따라 자동으로 줄바꿈됩니다.
- 라디오 원 테두리(미선택)는 Checkbox와 같은 `neutral-container-higher`, 선택 시 안쪽 점은 `on-main`을 씁니다.
