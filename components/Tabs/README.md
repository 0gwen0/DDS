화면 상단부에서 콘텐츠를 전환할 때 쓰는 밑줄형 탭입니다. Figma DDS 파일의 "[2.5]Tabs" 문서(node-id=5088-10483)를 그대로 옮겼습니다.

Figma에는 2개짜리(`Tabs2`)와 3개짜리(`Tabs3`) 변형이 따로 있었는데, 실제로는 탭 개수만 다른 같은 패턴이라 `items` 배열 길이로 몇 개든 지원하도록 일반화했습니다.

## 소비자가 제공해야 하는 것

- `items` (필수) — 탭 라벨 문자열 배열. 2개, 3개 외에 몇 개든 가능합니다.
- `selected` — 현재 선택된 탭의 index. 기본값 `0`.
- `onChange(index)` — 탭 클릭 시 호출됩니다.

## 참고

- 각 탭은 동일한 너비(`flex: 1`)로 나눠 가지며, 높이는 53px입니다.
- 선택된 탭은 라벨 색상 `on-neutral-primary`(#20202D) + 하단 밑줄 1px `on-neutral-primary`, 선택되지 않은 탭은 라벨 `on-neutral-micro`(#B0B0B9) + 밑줄 `neutral-container-high`(#E8E8EB)입니다. 모든 탭에 밑줄이 항상 있고, 선택된 탭만 색이 진해지는 방식입니다.
- 라벨은 16px/600(SemiBold)/줄간격 24px입니다. 기존 타이포 스케일에 SemiBold(600) 굵기가 없어 Figma 실측값을 그대로 컴포넌트에 넣었습니다.
