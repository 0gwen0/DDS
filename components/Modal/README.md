화면을 어둡게 덮고 중앙에 뜨는 확인/알림 모달입니다. Storybook(storybook.dndn.io/?path=/docs/modal--docs)에서 렌더링된 스타일을 기본으로 하되, Figma의 "[2.5]Modal" 문서([node-id=4743-42135](https://www.figma.com/design/H2uP5oFWb1lXIapvdZvWV3/DDS?node-id=4743-42135))에 정리된 head/body/bottom 조합을 모두 props로 표현할 수 있게 확장했습니다.

## 소비자가 제공해야 하는 것

- `open` — 표시 여부.
- `title` — 제목. `head`가 `'title-close'` 또는 `'title'`일 때 표시됩니다.
- `head` — 헤더 형태. `'title-close'`(제목+닫기, 기본값), `'title'`(제목만), `'none'`(헤더 없음). Figma의 "Head=Title + Close" / "Head=Title" / "Head=Untitled-Default" / "Head=Untitled-emphasis"에 대응합니다 (Untitled 두 가지는 모두 `head="none"`이고, emphasis는 아래 `bodyEmphasis`로 구분).
- `bodyEmphasis` — true면 본문이 20px/700(제목급)으로 크고 굵게 보입니다. `head="none"`과 같이 써서 Figma의 "Untitled-emphasis" 케이스를 표현합니다.
- `children` — 본문 내용 (텍스트 또는 다른 요소).
- `buttons` — 하단 버튼 배열. Button 컴포넌트의 props를 그대로 씁니다. 배열 길이가 곧 Figma의 버튼 구성입니다 — 0개(Bottom=None), 1개(1Button), 2~3개(Horizontal/Vertical 2B·3B, 아래 `buttonLayout`으로 방향 결정).
- `buttonLayout` — `'horizontal'`(기본값, 가로로 나란히) 또는 `'vertical'`(세로로 쌓기). `layout="fullscreen"`일 때는 쓰이지 않습니다(아래 참고).
- `layout` — `'centered'`(기본값, 화면 중앙 팝업) / `'padded'`(화면 여백을 두고 더 크게) / `'fullscreen'`(화면 하단에 붙는 프로모션·배너형). [storybook.dndn.io Modal 문서](https://storybook.dndn.io/?path=/docs/modal--docs)에서 실제 컴포넌트에 `layout` prop(기본값 `'padded'`)이 있는 걸 확인하고 반영했습니다.
- `onClose` — 우측 상단 닫기(×) 버튼을 눌렀을 때 호출됩니다.

## `layout="fullscreen"`

Storybook의 "Fullscreen" 스토리를 참고했습니다. Figma 문서에는 이 케이스가 없었는데, 궨님이 알려주신 Storybook 링크에서 실제로 존재하는 걸 확인했습니다:

- 화면 하단에 여백(16px)을 두고 붙는 카드 형태이고, 상단 `title-close` 헤더 대신 자유로운 `children`(프로모션 문구·이미지 등)이 바로 옵니다.
- `buttons`가 채워진 버튼 대신 **좌/우로 나뉜 텍스트 링크**로 표시됩니다 — Storybook 예시에서는 왼쪽에 옅은 색 "다시보지 않기", 오른쪽에 굵은 검정 "닫기"가 있었고, 이 컴포넌트는 `buttons` 배열의 첫 번째/마지막 항목을 그 두 자리에 그대로 매핑합니다(배열 길이가 꼭 2일 필요는 없지만, Storybook 예시는 2개 구성입니다).
- Storybook 컴포넌트에는 이 외에도 `content`(HTML 문자열), `footers`(버튼 배열 — 이 컴포넌트의 `buttons`에 대응), `width`, `toast`, `keepDialog`, `isVerticalLayout`(이 컴포넌트의 `buttonLayout`에 대응), `showCloseButton` prop이 있는 걸 확인했습니다. 이 컴포넌트는 DDS의 기존 prop 네이밍(`children`/`buttons`/`buttonLayout`)을 그대로 쓰고 `layout`만 새로 반영했고, `toast`/`keepDialog`/`width` 같은 세부 동작 prop까지는 옮기지 않았습니다 — 필요해지면 추가로 요청해 주세요.

## 참고

- 실제로는 `position: fixed`로 전체 화면을 덮습니다. 이 미리보기 카드 안에서는 카드 밖으로 튀어나가지 않도록 미리보기 전용 래퍼에 `transform`을 걸어 카드 내부에 고정되게 했을 뿐, 실제 화면에서는 뷰포트 전체를 덮습니다.
- 제목 스타일은 `heading-xs`(20px/700), 본문은 `body-md`(15px/400)와 정확히 일치해서 새 토큰 없이 기존 스케일을 그대로 재사용했습니다.
- 궨님이 Figma "[2.5]Modal" 문서를 확인해주신 결과, 그 문서에 정리된 head × body × bottom 조합(위 표) 외에 다른 케이스는 없습니다. 다만 Figma 문서 밖에 있던 `layout="fullscreen"`(프로모션/배너형)은 위에서 별도로 Storybook을 참고해 반영했습니다.
- Figma에는 화면 하단에서 올라오는 별도의 "Bottom Sheet Modal"도 함께 정의되어 있어서, 그건 이 컴포넌트가 아니라 `BottomSheetModal` 컴포넌트로 따로 만들었습니다.
