설정 화면 등에서 쓰는 한 줄짜리 리스트 행. 왼쪽 타이틀과 오른쪽 콘텐츠(값 텍스트/화살표/토글)로 구성됩니다.

## variant

- `value-chevron` (기본값) — 오른쪽에 값 텍스트 + 화살표. 다른 화면으로 이동하며 현재 설정값을 보여줄 때.
- `value` — 값 텍스트만.
- `chevron` — 화살표만. 값 표시 없이 이동만 할 때.
- `toggle` — 오른쪽에 온/오프 스위치(`Toggle` 컴포넌트 재사용). `checked`/`onChange`로 제어합니다.

`toggle`이 아닌 variant에서 `onClick`을 주면 행 전체가 클릭 가능한 버튼이 됩니다.

## 참고

- Figma의 "Common-1Row" 문서([node-id=378-20655](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=378-20655))에서 직접 가져왔습니다. Figma의 네 variant(Text+Text+Icon / Text+Text / Text+Chevron / Text+Toggle)를 각각 `value-chevron` / `value` / `chevron` / `toggle`로 옮겼습니다.
- 타이틀 색(`#2A3652`)과 값 텍스트 색(`#21399B`)은 DDS 토큰 중 정확히 일치하는 값이 없어 Figma 실측값 그대로 하드코딩했습니다. Usage Guidelines 예시 화면들을 보면 이 문서 자체가 다른 컴포넌트들의 기준인 최신 컬러 파운데이션(on-neutral-primary #20202D, on-main #7066F4 등)보다 이전 버전의 색을 쓰고 있어서, 실측값과 현재 토큰이 정확히 어긋나는 몇 안 되는 컴포넌트입니다 — 나중에 최신 컬러로 맞출지 궨님 확인이 필요합니다.
- 오른쪽 화살표 아이콘은 `on-neutral-micro` 토큰 색을 재사용한 인라인 SVG로 만들었습니다 (Figma 아이콘 에셋의 정확한 회색값은 확인하지 못함).
- `toggle` variant는 새로 만들지 않고 이미 있는 `Toggle` 컴포넌트를 그대로 재사용합니다.
