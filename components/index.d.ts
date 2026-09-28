export interface TextFieldProps {
  /** 필드 위에 표시되는 라벨 텍스트. */
  label?: string;
  /** 입력값이 없을 때 표시되는 안내 텍스트. */
  placeholder?: string;
  /** 초기값 (비제어形, defaultValue로 렌더링). */
  value?: string;
  /** 비활성화 상태. true면 회색 배경(neutral-disabled)으로 표시되고 입력이 막힙니다. */
  disabled?: boolean;
  /** 읽기 전용 상태. */
  readonly?: boolean;
  /** 에러 메시지 목록. 하나 이상 있으면 라벨/테두리/힌트가 danger 컬러로 바뀌고 descriptions 대신 표시됩니다. */
  errorMessages?: string[];
  /** 평상시 보여줄 보조 설명 텍스트 목록 (에러가 없을 때만 표시). */
  descriptions?: string[];
}

/** 텍스트 입력 필드. Storybook(storybook.dndn.io) TextField 컴포넌트와 동일한 스타일 규칙을 따릅니다. */
export declare function TextField(props: TextFieldProps): JSX.Element;

export interface TooltipProps {
  /** 툴팁 안에 보여줄 텍스트. */
  content: string;
  /** "info": 마우스를 올렸을 때만 보이는 어두운 툴팁(기본값). "guide": 항상 보이는 보라색 안내 팝오버. */
  variant?: 'info' | 'guide';
  /** variant가 "guide"일 때만 동작. true면 우측 상단에 닫기(×) 버튼이 표시됩니다. */
  showCloseButton?: boolean;
}

/** 정보/가이드 툴팁. Storybook Tooltip 컴포넌트와 동일한 배경색·패딩·모서리를 따릅니다. */
export declare function Tooltip(props: TooltipProps): JSX.Element;

export interface BadgeProps {
  /** 뱃지 안에 들어갈 텍스트. */
  label?: string;
  /** 크기. 기본값 "medium". */
  size?: 'small' | 'medium' | 'large';
  /** 색상 변형. primary는 danger(빨강) 톤이며 "NEW" 같은 강조용, secondary는 브랜드 보라, tertiary는 중립 회색. 기본값 "primary". */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

/** 작은 알림/상태 뱃지. */
export declare function Badge(props: BadgeProps): JSX.Element;

export interface ButtonProps {
  /** 버튼 텍스트. */
  label?: string;
  /** 라벨 아래/옆에 옅게 표시되는 보조 텍스트. */
  subLabel?: string;
  /** 비활성화 상태. */
  disabled?: boolean;
  /** 중복 클릭 방지를 위한 로딩 상태. 외적인 변화는 없고 텍스트가 "···"로 바뀝니다 (실제 스피너는 Storybook 원본에서도 슬롯으로 위임됩니다). */
  loading?: boolean;
  /** 지정하면 button 대신 a 태그로 렌더링됩니다. */
  href?: string;
  /** 색상 변형. 기본값 "primary". */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'outline' | 'text';
}

/** 기본 액션 버튼. 6가지 색상 변형을 지원합니다. */
export declare function Button(props: ButtonProps): JSX.Element;

export interface FloatingProps {
  /** 화면 하단에 고정 표시할 버튼들 (보통 취소/확인 2개). */
  footers?: ButtonProps[];
  /** true면 버튼을 세로로 쌓습니다. 기본값 false(가로 배열). */
  isVerticalLayout?: boolean;
}

/** 화면 하단에 고정되는 버튼 영역. */
export declare function Floating(props: FloatingProps): JSX.Element;

export interface IndicatorProps {
  /** 활성화된 아이템의 index. */
  index?: number;
  /** 점 개수(숫자) 또는 각 단계의 라벨 배열. 배열로 전달하면 현재 index의 라벨이 함께 표시됩니다. */
  length?: number | string[];
}

/** 온보딩/캐러셀 등에 쓰는 단계 표시 점(dot) 인디케이터. */
export declare function Indicator(props: IndicatorProps): JSX.Element;

export interface ModalProps {
  /** 모달 표시 여부. */
  open?: boolean;
  /** 모달 제목. head가 'title-close' 또는 'title'일 때 표시됩니다. */
  title?: string;
  /** 헤더 형태. 'title-close'(제목+닫기, title이 있으면 기본값) | 'title'(제목만) | 'none'(헤더 없음, title이 없으면 기본값). Figma의 "Untitled-Default"/"Untitled-emphasis" 헤드에 해당합니다. */
  head?: 'title-close' | 'title' | 'none';
  /** true면 본문 텍스트가 크고 굵게(20px/700) 표시됩니다. head가 'none'일 때 강조 문구를 보여주는 "Untitled-emphasis" 케이스에 씁니다. */
  bodyEmphasis?: boolean;
  /** 본문에 표시할 내용. */
  children?: any;
  /** 하단 버튼 목록. 0개(=Bottom "None"), 1개(=1Button), 2개(=Horizontal/Vertical 2B), 3개(=Vertical 3B) 모두 buttons 배열 길이와 buttonLayout으로 표현합니다. */
  buttons?: ButtonProps[];
  /** 버튼이 2개 이상일 때 가로로 나란히(horizontal, 기본값) 배치할지 세로로 쌓을지(vertical). buttons가 1개 이하면 의미 없습니다. */
  buttonLayout?: 'horizontal' | 'vertical';
  /** 모달 레이아웃. 'centered'(기본, 중앙 팝업) | 'padded'(화면 여백을 두고 크게) | 'fullscreen'(storybook.dndn.io Modal "Fullscreen" 스토리의 프로모션/배너형 — 화면 하단에 붙고, buttons는 채워진 버튼 대신 좌/우로 나뉜 텍스트 링크(예: "다시보지 않기"/"닫기")로 표시됩니다). */
  layout?: 'centered' | 'padded' | 'fullscreen';
  /** 우측 상단 닫기(×) 버튼 클릭 시 호출됩니다. */
  onClose?: () => void;
}

/** 배경을 어둡게 깔고 중앙에 뜨는 확인/알림 모달. */
export declare function Modal(props: ModalProps): JSX.Element;

export interface BottomSheetModalProps {
  /** 표시 여부. */
  open?: boolean;
  /** 제목. head가 'title-close' 또는 'title'일 때 표시됩니다. */
  title?: string;
  /** 헤더 형태. 'title-close' | 'title' | 'none'. Modal과 동일한 규칙입니다. */
  head?: 'title-close' | 'title' | 'none';
  /** true면 본문 텍스트가 크고 굵게 표시됩니다 ("Untitled-emphasis" 케이스). */
  bodyEmphasis?: boolean;
  /** 본문 내용. 자유 형식이며, 선택 목록/라디오 목록/계좌 목록/약관 동의(TOS) 등 Figma의 body variant들은 이 안에 `List`/`Radio`/`Checkbox`/`Tos` 같은 기존 컴포넌트를 조합해서 채우는 걸 권장합니다. */
  children?: any;
  /** 하단 버튼 목록. Modal과 동일하게 배열 길이로 1Button/2B/3B/None을 표현합니다. */
  buttons?: ButtonProps[];
  /** 버튼 가로/세로 배치. 기본값 'horizontal'. */
  buttonLayout?: 'horizontal' | 'vertical';
  /** 하단 홈 인디케이터 바 표시 여부. 기본값 true. */
  showNotch?: boolean;
  /** 우측 상단 닫기(×) 버튼 클릭 시 호출됩니다. */
  onClose?: () => void;
}

/** 화면 하단에서 올라오는 시트형 모달. Modal(중앙 팝업)과 헤더/버튼 규칙은 같고, 본문에 선택 목록·계좌 목록·약관 동의 같은 더 긴 콘텐츠를 담을 때 씁니다. */
export declare function BottomSheetModal(props: BottomSheetModalProps): JSX.Element;

export interface SnackbarProps {
  /** 표시할 메시지. */
  message: string;
  /** 표시 여부. 기본값 true. 실제 Storybook 컴포넌트는 showToast(message, duration?) 함수 호출로 전역 노출되는 방식이며, 이 컴포넌트는 그 보이는 결과(pill)만 재현합니다. */
  visible?: boolean;
}

/** 화면 하단에 잠깐 떴다 사라지는 짧은 안내 메시지(토스트). */
export declare function Snackbar(props: SnackbarProps): JSX.Element;

export interface CheckboxProps {
  /** 선택 여부 (비제어形, defaultChecked로 렌더링). */
  checked?: boolean;
  /** true면 사각형 테두리가 있는 라운드 스타일, false면 테두리 없이 체크 아이콘만 표시됩니다. */
  rounded?: boolean;
}

/** 체크박스. */
export declare function Checkbox(props: CheckboxProps): JSX.Element;

export interface RadioOption {
  /** 실제 값. */
  value: string | number;
  /** 화면에 표시할 라벨. */
  label: string;
}

export interface RadioGroupProps {
  /** 라디오 옵션 목록 (필수). */
  options: RadioOption[];
  /** 현재 선택된 값. */
  checked?: string | number;
  /** true면 각 라디오를 세로로 배치합니다. */
  isVerticalLayout?: boolean;
  /** true면 옵션마다 한 줄 전체를 차지하는 블록 레이아웃으로 배치합니다 (간격이 더 넓습니다). */
  isBlock?: boolean;
  /** input의 name 속성 (같은 그룹은 동일한 값을 가져야 합니다). */
  name?: string;
}

/** 여러 옵션 중 하나를 고르는 라디오 그룹. */
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;

export interface CardProps {
  /** 카드 레이아웃. "full"(기본값)은 한 줄 전체를 차지하는 큰 카드, "half"는 두 개씩 나란히 배치하는 작은 카드. */
  layout?: 'full' | 'half';
  /** 선택 여부. true면 브랜드 보라 배경(main-layer) + 테두리(on-main) + medium 굵기 텍스트로 강조됩니다. */
  selected?: boolean;
  /** "half" 레이아웃에서만 표시되는 아이콘(이모지 등 짧은 문자). full에는 표시되지 않습니다. */
  icon?: string;
  /** 카드 안에 표시할 텍스트. */
  text?: string;
  /** 클릭 시 호출됩니다. */
  onClick?: () => void;
}

/** 여러 선택지 중 하나를 고르는 카드형 컨테이너(Choice Card). 여러 개를 감싸는 컨테이너(12px 간격 flex)에 나열해 카드 세트를 구성합니다. */
export declare function Card(props: CardProps): JSX.Element;

export interface DescriptionProps {
  /** 불릿으로 나열할 문자열 목록 (필수). */
  items: string[];
  /** 상단에 아이콘 + 제목을 표시할지 여부. 기본값 true. */
  title?: boolean;
  /** title이 true일 때 표시되는 제목 텍스트. 기본값 "꼭 확인하세요". */
  titleText?: string;
}

/** 캡션 크기의 보조 설명/유의사항 블록(description=caption). 불릿 리스트와 선택적 제목으로 구성됩니다. */
export declare function Description(props: DescriptionProps): JSX.Element;

export interface DividerProps {
  /** 두께. "thin"(기본값, 1px, neutral-container)은 같은 섹션 내 항목 구분, "thick"(10px, neutral-layer)은 화면 섹션 전체를 구분할 때 씁니다. */
  thickness?: 'thin' | 'thick';
}

/** 영역을 구분하는 가로 구분선. */
export declare function Divider(props: DividerProps): JSX.Element;

export interface DimProps {
  /** 표시 여부. 기본값 true. false면 아무것도 렌더링하지 않습니다. */
  visible?: boolean;
  /** 딤 영역 클릭 시 호출됩니다 (바깥 영역 클릭으로 닫기 등에 사용). */
  onClick?: () => void;
}

/** 화면 전체를 어둡게 까는 딤(dim) 처리. rgba(0,0,0,0.4) 고정 배경이며, Modal도 내부적으로 같은 스타일을 공유합니다. */
export declare function Dim(props: DimProps): JSX.Element;

export interface TosItemProps {
  /** 약관 이름 텍스트. */
  label: string;
  /** 라벨 아래 표시되는 보조 설명 (선택). */
  description?: string;
  /** 체크 여부. */
  checked?: boolean;
  /** "전체 동의하기" 바가 있는 리스트에서 좌우 12px 패딩을 추가할지 여부. */
  inset?: boolean;
  /** 체크 영역 클릭 시 호출됩니다. */
  onToggle?: () => void;
  /** 우측 화살표(상세보기) 클릭 시 호출됩니다. */
  onDetailClick?: () => void;
}

/** 약관 동의 목록의 개별 항목(체크박스 + 라벨 + 화살표). Tos 컴포넌트 내부에서 쓰이며 단독으로도 쓸 수 있습니다. */
export declare function TosItem(props: TosItemProps): JSX.Element;

export interface TosListItem {
  /** 약관 이름 텍스트. */
  label: string;
  /** 라벨 아래 표시되는 보조 설명 (선택). */
  description?: string;
  /** 체크 여부. */
  checked?: boolean;
}

export interface TosProps {
  /** 리스트 위에 붙는 제목. showAllCheck가 true면 무시됩니다. */
  title?: string;
  /** 상단에 "전체 동의하기" 바를 표시할지 여부. 기본값 false. */
  showAllCheck?: boolean;
  /** 전체 동의 바의 텍스트. 기본값 "전체 동의하기". */
  allCheckLabel?: string;
  /** 전체 동의 바의 체크 상태. */
  allChecked?: boolean;
  /** 약관 목록 (필수). */
  items: TosListItem[];
  /** 리스트 맨 아래 붙는 보조 캡션 (선택). */
  caption?: string;
  /** 전체 동의 바 클릭 시 호출됩니다. */
  onAllCheckToggle?: () => void;
  /** 개별 항목의 체크 영역 클릭 시 호출됩니다. 인자로 항목의 index를 받습니다. */
  onItemToggle?: (index: number) => void;
  /** 개별 항목의 화살표 클릭 시 호출됩니다. 인자로 항목의 index를 받습니다. */
  onItemDetailClick?: (index: number) => void;
}

/** 약관 동의 화면에 쓰이는 체크리스트. "전체 동의하기" 바가 있는 형태와 제목만 있는 형태를 모두 지원합니다. */
export declare function Tos(props: TosProps): JSX.Element;

export interface TopNavigationProps {
  /** "default"(기본값, 48px 뒤로가기/타이틀/닫기 앱바) 또는 "profile"(60px 사용자 이름 + 설정 아이콘 바). */
  variant?: 'default' | 'profile';
  /** variant="default"일 때: 왼쪽 뒤로가기 아이콘 표시 여부. 기본값 true. */
  showLeft?: boolean;
  /** variant="default"일 때: 가운데 타이틀 텍스트. */
  title?: string;
  /** variant="default"일 때: 오른쪽 닫기(×) 아이콘 표시 여부. 기본값 false. */
  showRight?: boolean;
  /** variant="default"일 때: 왼쪽 아이콘 클릭 시 호출됩니다. */
  onLeftClick?: () => void;
  /** variant="default"일 때: 오른쪽 아이콘 클릭 시 호출됩니다. */
  onRightClick?: () => void;
  /** variant="profile"일 때: 표시할 사용자 이름. */
  name?: string;
  /** variant="profile"일 때: 오른쪽 설정 아이콘 표시 여부. 기본값 true. */
  showSettings?: boolean;
  /** variant="profile"일 때: 이름 영역 클릭 시 호출됩니다. */
  onNameClick?: () => void;
  /** variant="profile"일 때: 설정 아이콘 클릭 시 호출됩니다. */
  onSettingsClick?: () => void;
}

/** 화면 최상단 앱바. 기본(뒤로가기/타이틀/닫기, 48px)과 프로필(사용자 이름/설정, 60px) 두 변형을 지원합니다. */
export declare function TopNavigation(props: TopNavigationProps): JSX.Element;

export interface TabsProps {
  /** 탭 라벨 목록 (필수). 2개, 3개 외에 몇 개든 가능합니다. */
  items: string[];
  /** 현재 선택된 탭의 index. 기본값 0. */
  selected?: number;
  /** 탭 클릭 시 호출됩니다. 인자로 클릭된 탭의 index를 받습니다. */
  onChange?: (index: number) => void;
}

/** 밑줄형 탭. 모든 탭에 하단 밑줄이 있고 선택된 탭만 진하게 강조됩니다. */
export declare function Tabs(props: TabsProps): JSX.Element;

export interface EmptyProps {
  /** 표시할 안내 문구 (필수). 예: "내역이 없습니다". */
  message: string;
}

/** 리스트/화면에 표시할 내용이 없을 때 쓰는 빈 상태. 아이콘 + 안내 문구로 구성됩니다. */
export declare function Empty(props: EmptyProps): JSX.Element;

export interface ChipProps {
  /** 칩 안에 표시할 텍스트 (필수). */
  label: string;
  /** 선택 여부. 기본값 false. */
  selected?: boolean;
  /** 클릭 시 호출됩니다. */
  onClick?: () => void;
}

/** 필터/카테고리 선택용 알약(pill) 모양 칩. */
export declare function Chip(props: ChipProps): JSX.Element;

export interface ChipGroupProps {
  /** 칩 라벨 목록 (필수). */
  items: string[];
  /** 현재 선택된 칩의 index. 기본값 0. */
  selected?: number;
  /** 칩 클릭 시 호출됩니다. 인자로 클릭된 칩의 index를 받습니다. */
  onChange?: (index: number) => void;
}

/** 여러 칩을 가로로 나열한 필터 그룹. 한 번에 하나만 선택됩니다. */
export declare function ChipGroup(props: ChipGroupProps): JSX.Element;

export interface BottomNavigationItem {
  /** 탭 라벨 텍스트. */
  label: string;
  /** 아이콘 종류. 생략하면 아이콘 없이 라벨만 표시됩니다. */
  icon?: 'home' | 'invest' | 'lounge' | 'more';
}

export interface BottomNavigationProps {
  /** 탭 목록 (필수). */
  items: BottomNavigationItem[];
  /** 현재 선택된 탭의 index. 기본값 0. */
  selected?: number;
  /** 탭 클릭 시 호출됩니다. 인자로 클릭된 탭의 index를 받습니다. */
  onChange?: (index: number) => void;
  /** 하단 홈 인디케이터 바(iPhone 노치 기기용) 표시 여부. 기본값 true. */
  showNotch?: boolean;
}

/** 화면 하단 탭 메뉴. */
export declare function BottomNavigation(props: BottomNavigationProps): JSX.Element;

export interface AccordionItem {
  /** 소제목. */
  title: string;
  /** 설명 텍스트. */
  description: string;
}

export interface AccordionProps {
  /** 접었을 때도 항상 보이는 상단 제목 (필수). */
  title: string;
  /** 펼침 여부. 기본값 false. */
  open?: boolean;
  /** 헤더 클릭 시 호출됩니다. */
  onToggle?: () => void;
  /** 펼쳤을 때 보여줄 내용 목록. open이 false면 렌더링되지 않습니다. */
  items?: AccordionItem[];
}

/** 펼치고 접을 수 있는 아코디언. */
export declare function Accordion(props: AccordionProps): JSX.Element;

export interface ToggleProps {
  /** on/off 상태. 기본값 false. */
  checked?: boolean;
  /** 클릭 시 호출됩니다. */
  onChange?: () => void;
}

/** 일반적인 on/off 스위치. */
export declare function Toggle(props: ToggleProps): JSX.Element;

export interface CurrencyToggleProps {
  /** true면 달러(USD, 오른쪽), false면 원화(KRW, 왼쪽). 기본값 false. */
  checked?: boolean;
  /** 클릭 시 호출됩니다. */
  onChange?: () => void;
}

/** 원화/달러 표시 단위를 전환하는 알약형 스위치. 켜지면 knob 안에 "$" 아이콘이 뜹니다. */
export declare function CurrencyToggle(props: CurrencyToggleProps): JSX.Element;

export interface LogoProps {
  /** 'full'(심볼+워드마크), 'symbol'(심볼만), 'wordmark'(워드마크만). 기본값 'full'. */
  variant?: 'full' | 'symbol' | 'wordmark';
  /** 'color'(보라 그라데이션 심볼, 기본값), 'mono-black'(단색 다크 심볼 + 검정 워드마크), 'mono-white'(단색 화이트 심볼 + 흰색 워드마크). mono 톤에서는 color prop이 무시됩니다. */
  tone?: 'color' | 'mono-black' | 'mono-white';
  /** tone이 'color'일 때만 적용. 'primary'(밝은 배경용, 검정 워드마크), 'reverse'(어두운/브랜드컬러 배경용, 흰색 워드마크; 심볼은 반전됩니다). 기본값 'primary'. */
  color?: 'primary' | 'reverse';
  /** 로고 높이(px). 'full'일 때는 심볼 높이 기준이며 워드마크는 비례해 작아집니다. 기본값 32. */
  size?: number;
}

/** 든든 로고 (심볼 + "dndn" 워드마크). */
export declare function Logo(props: LogoProps): JSX.Element;

export interface ListProps {
  /** 왼쪽 타이틀 텍스트 (필수). */
  title: string;
  /** 오른쪽에 보여줄 값 텍스트. variant가 'value-chevron' 또는 'value'일 때만 표시됩니다. */
  value?: string;
  /** 'value-chevron'(값+화살표, 기본값), 'value'(값만), 'chevron'(화살표만), 'toggle'(스위치). */
  variant?: 'value-chevron' | 'value' | 'chevron' | 'toggle';
  /** variant가 'toggle'일 때의 on/off 상태. */
  checked?: boolean;
  /** variant가 'toggle'일 때 스위치 클릭 시 호출됩니다. */
  onChange?: () => void;
  /** 행 클릭 시 호출됩니다 (variant가 'toggle'이 아닐 때만 동작; 행 전체가 버튼이 됩니다). */
  onClick?: () => void;
}

/** 설정 화면 등에서 쓰는 한 줄짜리 리스트 행. 타이틀 + (값 텍스트/화살표/토글) 조합. */
export declare function List(props: ListProps): JSX.Element;

export type IconLineName = 'help-circle' | 'warning-circle' | 'cancel-circle' | 'add-circle' | 'close' | 'check' | 'chevron-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'arrow-forward' | 'refresh';
export type IconFillName = 'cancel-circle' | 'add-circle' | 'help-circle' | 'warning-circle' | 'check' | 'edit' | 'backspace' | 'mail' | 'call' | 'invest';
export type IconEmphName = 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'close' | 'check' | 'share' | 'setting';
export type IconBottombarName = 'home' | 'benefit' | 'invest' | 'more' | 'lounge';

export interface IconProps {
  /** 아이콘 이름. style에 따라 사용 가능한 이름 목록이 다릅니다 (IconLineName / IconFillName / IconEmphName / IconBottombarName). */
  name: IconLineName | IconFillName | IconEmphName | IconBottombarName;
  /** 'line'(기본, 얇은 선), 'fill'(채워진 아이콘), 'emph'(강조용 굵은 선, 주로 네비게이션 바), 'bottombar'(하단 탭 전용). 기본값 'line'. */
  style?: 'line' | 'fill' | 'emph' | 'bottombar';
  /** 아이콘 크기(px). 기본값 24. 'bottombar' style은 항상 24px 고정입니다. */
  size?: number;
}

/** 든든 시스템 아이콘 카탈로그. 색은 CSS `color`(line/emph/bottombar) 또는 `currentColor`을 상속하는 부모 요소로 조절합니다. */
export declare function Icon(props: IconProps): JSX.Element;
