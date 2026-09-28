화면 하단에 잠깐 떴다 사라지는 짧은 안내 메시지(토스트)입니다. Storybook(storybook.dndn.io/?path=/docs/snackbar--docs)에서 렌더링된 스타일을 그대로 옮겼습니다.

## 소비자가 제공해야 하는 것

- `message` (필수) — 표시할 텍스트.
- `visible` — 표시 여부 (기본값 true).

## 참고

- 실제 Storybook 컴포넌트는 컴포넌트를 배치해두고 `showToast(message, duration?)` 함수를 호출해서 전역으로 띄우는 방식(딜레이 기본 2000ms)입니다. 이 미리보기는 그 결과로 보이는 알약 모양 토스트만 정적으로 재현한 것이라, 자동으로 사라지는 타이머 동작은 포함하지 않았습니다.
- 실제로는 `position: fixed`로 화면 최하단에 붙습니다.
