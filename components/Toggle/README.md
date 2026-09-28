on/off 스위치입니다. Figma DDS 파일의 "Selection Controls" 문서(node-id=1906-22953)에 있던 마지막 미반영 항목 "toggle"을 옮겼습니다. 기존 Checkbox/Radio와 함께 selection controls를 완성합니다.

두 가지 컴포넌트가 있습니다.

- **Toggle** — 일반적인 on/off 스위치(`switch-default`).
- **CurrencyToggle** — 원화(KRW)/달러(USD)를 전환하는 알약형 스위치로, 켜지면 knob 안에 `$` 아이콘이 뜹니다(`switch-dollars`). 실제 화면 예시에서 통화 표시 단위를 바꿀 때 쓰입니다.

## 소비자가 제공해야 하는 것

**Toggle**

- `checked` — on/off 상태. 기본값 `false`.
- `onChange` — 클릭 시 호출됩니다.

**CurrencyToggle**

- `checked` — `true`면 달러(USD, 오른쪽) 상태, `false`면 원화(KRW, 왼쪽) 상태. 기본값 `false`.
- `onChange` — 클릭 시 호출됩니다.

## 참고

- **Toggle**: 트랙 46×24px, knob 20px 원형, 트랙 안쪽 여백 2px. Off는 트랙 `neutral-container-high`(#E8E8EB) + knob `main-container-low`(#FFFFFF), On은 트랙 `on-main`(#7066F4) + knob `main-container-high`(#E8E6FD)입니다 — knob이 순백색이 아니라 옅은 라벤더색인 점까지 Figma 실측값 그대로 반영했습니다.
- **CurrencyToggle**: 트랙 50×30px, knob 26px 원형(안쪽 `$` 텍스트, 12px/700). Off는 트랙 `neutral-container-high`(#E8E8EB) + knob `neutral-container-low`(#FFFFFF), On은 트랙 `main-container`(#F4F3FE) + knob `inverse-main-container`(#7066F4) + `$` 텍스트 `inverse-on-main`(#FFFFFF)입니다.
- 두 컴포넌트 모두 색상이 tokens.json의 기존 토큰과 정확히 일치해서 하드코딩 없이 전부 토큰으로 구현했습니다.
