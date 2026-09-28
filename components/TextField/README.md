라벨과 보조 설명(또는 에러 메시지)이 붙는 기본 텍스트 입력 필드입니다. 실제 코드 Storybook(storybook.dndn.io/?path=/docs/textfield--docs)에서 렌더링된 스타일을 그대로 옮겼습니다.

## 언제 쓰나요

이름, 이메일, 검색어 등 한 줄짜리 텍스트를 입력받을 때 씁니다. 여러 줄 입력이 필요하면 이 컴포넌트를 그대로 쓰지 말고 별도 텍스트에어리어가 필요하다고 알려주세요 (아직 이 시스템에는 없습니다).

## 상태

- **기본(default)** — `neutral-surface-high` 배경, `radius-sm`(8px) 모서리.
- **비활성화(disabled)** — `disabled` prop을 켜면 배경이 `neutral-disabled`로 바뀌고 입력이 막힙니다.
- **읽기 전용(readonly)** — `readonly` prop. 값은 보이지만 수정은 안 됩니다.
- **에러(error)** — `errorMessages` 배열에 하나라도 문자열을 넣으면 라벨·테두리·힌트 텍스트가 모두 `on-danger`(#FF2541) 색으로 바뀌고, 평소 보이던 `descriptions` 대신 에러 메시지가 표시됩니다.

## 소비자가 제공해야 하는 것

- `label` — 필드 위에 보여줄 라벨 (없으면 라벨 영역 자체가 생략됩니다).
- `placeholder` — 값이 비어 있을 때 보여줄 안내 문구.
- `descriptions` — 평소에 보여줄 도움말 (선택).
- `errorMessages` — 유효성 검사 실패 시 보여줄 문구 (선택, 있으면 descriptions보다 우선).

## 참고

- 라벨의 13px/세미볼드(600) 스타일은 이 시스템의 다른 곳에 없던 새로운 스타일이라 `label-sm` 타이포 토큰으로 새로 추가했습니다.
- placeholder 색상은 Storybook 코드에서 브라우저 기본값(`rgb(117,117,117)`)처럼 보여서, 의도된 디자인 토큰이 아니라고 판단해 가장 가까운 기존 토큰인 `on-neutral-quaternary`로 대체했습니다. 실제로 다른 색을 의도하신 거라면 알려주세요.
