작은 텍스트를 강조해서 보여주는 뱃지입니다. Storybook(storybook.dndn.io/?path=/docs/badge--docs)에서 렌더링된 스타일을 그대로 옮겼습니다.

## variant 세 가지

- **primary (기본값)** — danger(빨강) 톤. "NEW"처럼 시선을 끌어야 하는 뱃지에 씁니다.
- **secondary** — 브랜드 보라 톤. 일반적인 강조 표시.
- **tertiary** — 중립 회색 톤. 덜 중요한 보조 정보.

## size 세 가지

- **small / medium (기본값) / large** — 높이 16 / 18 / 20px, 텍스트 크기 10 / 10 / 11px로 커집니다.

## 소비자가 제공해야 하는 것

- `label` — 뱃지 안에 들어갈 텍스트.
- `size`, `variant` — 위 옵션 참고.

## 참고

- 실제 컴포넌트는 완전한 캡슐 모양(반원 양끝)이라 `radius-full` 토큰을 그대로 썼습니다.
