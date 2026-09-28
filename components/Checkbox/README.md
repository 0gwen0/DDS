체크박스입니다. Storybook(storybook.dndn.io/?path=/docs/selection-controls-checkbox--docs)에서 렌더링된 스타일을 그대로 옮겼습니다.

## 소비자가 제공해야 하는 것

- `checked` — 선택 여부.
- `rounded` — true면 사각형 테두리가 있는 라운드 스타일. false(기본값)면 테두리 없이 체크 아이콘만 색이 바뀌는 미니멀한 스타일입니다.

## 참고

- 기본(테두리 없는) 스타일은 체크 아이콘 자체가 항상 그려져 있고, 선택 여부에 따라 아이콘 색만 `neutral-container-higher`(미선택) ↔ `on-main`(선택)으로 바뀝니다.
- rounded 스타일의 모서리 반경 6px는 Button과 값을 공유하는 `radius-btn` 토큰을 그대로 썼습니다.
