가장 기본이 되는 액션 버튼입니다. Storybook(storybook.dndn.io/?path=/docs/button--docs)에서 렌더링된 6가지 색상 변형을 그대로 옮겼습니다. 실제 Storybook 데모에도 "든든 바로가기"라는 예시 텍스트가 쓰여 있었어요.

## variant 여섯 가지

- **primary (기본값)** — 브랜드 보라 배경(`on-main`)에 흰 글씨. 화면당 하나, 가장 중요한 액션에.
- **secondary** — 옅은 보라 배경(`main-container`)에 보라 글씨.
- **tertiary** — 중립 회색 배경에 회색 글씨.
- **warning** — 빨강 배경. 파괴적 액션(삭제 등)에 제한적으로.
- **outline** — 배경 없이 테두리만.
- **text** — 배경도 테두리도 없이 텍스트만.

## 소비자가 제공해야 하는 것

- `label` (필수에 가까움) — 버튼 텍스트.
- `subLabel` — 라벨 아래 옅게 표시되는 보조 텍스트 (가격 부연 설명 등에 사용).
- `disabled` — 비활성화. 배경이 `neutral-container-higher`로 바뀌지만 글자색은 그대로 흰색으로 유지됩니다 (Storybook 원본 그대로).
- `loading` — 중복 클릭 방지용 상태 표시자. 실제 스피너 애니메이션까지는 재현하지 못했고 텍스트를 "···"로만 바꿔서 표시합니다.
- `href` — 지정하면 `<a>` 태그로 렌더링됩니다.

## 참고

- 모서리 반경 6px는 기존 8단계 라운드 스케일에 없는 값이라 `radius-btn` 토큰을 새로 추가했습니다 (Tooltip의 `radius-tooltip`과 값은 같지만 컴포넌트 맥락이 달라 이름을 분리했습니다).
- Floating, Modal의 버튼 그룹(취소/확인 나란히 배치)도 이 Button을 그대로 사용합니다.
