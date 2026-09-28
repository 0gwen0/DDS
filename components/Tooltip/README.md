가벼운 안내 문구를 보여주는 툴팁입니다. Storybook(storybook.dndn.io/?path=/docs/tooltip--docs)에서 렌더링된 두 가지 variant를 그대로 옮겼습니다.

## variant 두 가지

- **info (기본값)** — 물음표(`?`) 아이콘에 마우스를 올렸을 때만 나타나는 어두운(`inverse-neutral-container`, #20202D) 툴팁. 필드나 용어 옆에 짧은 설명을 붙일 때 씁니다.
- **guide** — 항상 떠 있는 보라색(`on-main`, #7066F4) 안내 팝오버. 온보딩처럼 "이 버튼을 눌러보세요" 같은 능동적인 안내에 씁니다. `showCloseButton`을 켜면 우측 상단에 닫기 버튼이 생기고, 누르면 사라집니다.

## 소비자가 제공해야 하는 것

- `content` (필수) — 툴팁 안에 들어갈 텍스트.
- `variant` — `"info"` 또는 `"guide"`.
- `showCloseButton` — `guide`일 때만 의미가 있습니다.

## 참고

- 툴팁 모서리 반경(6px)은 이 시스템의 기존 8단계 라운드 스케일 어디에도 없는 값이라 `radius-tooltip` 토큰을 새로 추가했습니다.
- 실제 코드는 `info` 툴팁이 CSS 마우스오버로만 동작하고(그래서 키보드 접근성을 위해 `:focus-within`도 함께 추가했습니다), `guide` 툴팁은 항상 렌더링되어 있다가 닫기 버튼으로 사라지는 방식이었어요.
