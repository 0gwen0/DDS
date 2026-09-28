든든 시스템 아이콘 카탈로그입니다. Figma의 "[2.5]Icon" 문서([node-id=4740-5488](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4740-5488))에서 가져왔습니다. **말씀하신 대로 `ic-badge-account` 프레임(은행/증권사/보험사 등 금융기관 로고 90여 개)은 제외**했습니다 — 이건 아이콘이라기보다 금융기관 로고 배지 세트라 별도로 다뤄야 할 것 같습니다.

## style

- `line` (기본값) — 얇은 선 스타일 시스템 아이콘. 24px 기준으로 그렸고 `size`로 확대/축소해도 비율이 유지됩니다.
  - 이름: `help-circle` `warning-circle` `cancel-circle` `add-circle` `close` `check` `chevron-up` `chevron-down` `chevron-left` `chevron-right` `arrow-forward` `refresh`
- `fill` — 채워진 스타일. 원형 배경 + 흰색 글리프 또는 단색 실루엣.
  - 이름: `cancel-circle` `add-circle` `help-circle` `warning-circle` `check` `edit` `backspace` `mail` `call` `invest`
- `emph` — 강조용 굵은 선 스타일 (주로 네비게이션 바에서 사용). 색은 `on-neutral-primary`.
  - 이름: `chevron-left` `chevron-right` `chevron-up` `chevron-down` `close` `check` `share` `setting`
- `bottombar` — 하단 탭 전용 아이콘. 24px 고정. `BottomNavigation`의 `icon` prop과 이름이 같습니다.
  - 이름: `home` `benefit` `invest` `more` `lounge`

## 색상

`line`/`emph`/`bottombar`는 `currentColor`를 상속하므로 부모나 컴포넌트에 CSS `color`를 지정해서 바꿉니다. `fill`은 배경/글리프 색도 `currentColor` 기반이라 마찬가지입니다.

## 참고 / 한계

- Figma MCP가 돌려주는 아이콘은 실제 벡터 path가 아니라 만료되는 원격 SVG 파일 URL이었고, 이번 세션에서는 조직 네트워크 정책상 그 URL(`figma.com` 자산 서버)에 직접 접근할 수 없었습니다. 그래서 각 아이콘을 스크린샷으로 확인한 뒤 같은 느낌으로 새로 그린 것이며, 픽셀 단위로 원본과 동일하지는 않습니다. 정확한 벡터가 필요하면 해당 아이콘의 SVG 파일을 직접 전달해 주세요.
- **카카오(kakao)와 애플(apple) 로그인 아이콘은 의도적으로 그리지 않았습니다.** 두 아이콘 모두 카카오·애플의 브랜드 마크(로고)라 임의로 재현하지 않는 게 맞다고 판단했습니다. 실제 사용 시에는 카카오/애플이 배포하는 공식 브랜드 가이드라인 에셋을 그대로 사용해 주세요.
- `ic-fill-*` 계열 중 원형 배경이 있는 아이콘(cancel-circle, add-circle, help-circle, warning-circle, check)은 배경 원 + 흰색 글리프 구조로 만들어서, 밝은 배경 위에서 쓰는 걸 가정했습니다.
- 하단 탭 아이콘 중 `benefit`(혜택, 스마일 아이콘)은 이번에 새로 발견되어 `BottomNavigation` 컴포넌트의 `icon` prop에도 추가했습니다. `home`/`invest`/`more`/`lounge`는 기존 `BottomNavigation` 작업 때 만든 것을 그대로 재사용합니다.
- `ic-fill-call`은 원본이 배경 원 안에 별도 크기(20px)의 수화기 아이콘이 겹쳐진 구조였는데, 여기서는 단순화해서 하나의 실루엣으로 그렸습니다.
