/* @ds-bundle: {"format":4,"namespace":"DDS","components":[{"name":"TextField"},{"name":"Tooltip"},{"name":"Badge"},{"name":"Button"},{"name":"Floating"},{"name":"Indicator"},{"name":"Modal"},{"name":"Snackbar"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Card"},{"name":"Description"},{"name":"Divider"},{"name":"Dim"},{"name":"TosItem"},{"name":"Tos"},{"name":"TopNavigation"},{"name":"Tabs"},{"name":"Empty"},{"name":"Chip"},{"name":"ChipGroup"},{"name":"BottomNavigation"},{"name":"Accordion"},{"name":"Toggle"},{"name":"CurrencyToggle"},{"name":"Logo"},{"name":"List"},{"name":"Icon"},{"name":"BottomSheetModal"}]} */
(function () {
  var e = window.React.createElement;

  function TextField(props) {
    props = props || {};
    var label = props.label || '';
    var placeholder = props.placeholder || '';
    var value = props.value;
    var disabled = !!props.disabled;
    var readonly = !!props.readonly;
    var errorMessages = props.errorMessages || [];
    var descriptions = props.descriptions || [];
    var hasError = errorMessages.length > 0;
    var messages = hasError ? errorMessages : descriptions;

    var wrapClassName = 'dds-textfield-input' +
      (disabled ? ' dds-textfield-input--disabled' : '') +
      (hasError ? ' dds-textfield-input--error' : '');

    var inputProps = {
      className: 'dds-textfield-native',
      placeholder: placeholder,
      disabled: disabled,
      readOnly: readonly
    };
    if (value !== undefined) {
      inputProps.defaultValue = value;
    }

    return e(
      'div',
      { className: 'dds-textfield' },
      label
        ? e(
            'label',
            { className: 'dds-textfield-label' + (hasError ? ' dds-textfield-label--error' : '') },
            label
          )
        : null,
      e('div', { className: wrapClassName }, e('input', inputProps)),
      messages.length > 0
        ? e(
            'ul',
            { className: 'dds-textfield-message' + (hasError ? ' dds-textfield-message--error' : '') },
            messages.map(function (m, i) {
              return e('li', { key: i }, m);
            })
          )
        : null
    );
  }

  window.DDS = window.DDS || {};
  window.DDS.TextField = TextField;

  function Tooltip(props) {
    props = props || {};
    var variant = props.variant === 'guide' ? 'guide' : 'info';
    var content = props.content || '';
    var showCloseButton = variant === 'guide' && !!props.showCloseButton;
    var React = window.React;
    var useState = React.useState;
    var closedState = useState(false);
    var closed = closedState[0];
    var setClosed = closedState[1];

    var trigger = e(
      'span',
      { className: 'dds-tooltip-trigger', 'aria-hidden': 'true' },
      '?'
    );

    if (variant === 'info') {
      return e(
        'span',
        { className: 'dds-tooltip dds-tooltip--info' },
        trigger,
        e(
          'span',
          { className: 'dds-tooltip-bubble dds-tooltip-bubble--info', role: 'tooltip' },
          content
        )
      );
    }

    if (closed) {
      return trigger;
    }

    return e(
      'span',
      { className: 'dds-tooltip dds-tooltip--guide' },
      trigger,
      e(
        'span',
        { className: 'dds-tooltip-bubble dds-tooltip-bubble--guide', role: 'tooltip' },
        content,
        showCloseButton
          ? e(
              'button',
              {
                type: 'button',
                className: 'dds-tooltip-close',
                'aria-label': 'close',
                onClick: function () {
                  setClosed(true);
                }
              },
              '×'
            )
          : null
      )
    );
  }

  window.DDS.Tooltip = Tooltip;

  function Badge(props) {
    props = props || {};
    var label = props.label || '';
    var size = ['small', 'medium', 'large'].indexOf(props.size) >= 0 ? props.size : 'medium';
    var variant = ['primary', 'secondary', 'tertiary'].indexOf(props.variant) >= 0 ? props.variant : 'primary';

    return e(
      'span',
      { className: 'dds-badge dds-badge--' + size + ' dds-badge--' + variant },
      e('span', { className: 'dds-badge-inner' }, label)
    );
  }

  window.DDS.Badge = Badge;

  function Button(props) {
    props = props || {};
    var label = props.label || '';
    var subLabel = props.subLabel || '';
    var disabled = !!props.disabled;
    var loading = !!props.loading;
    var href = props.href;
    var variant = ['primary', 'secondary', 'tertiary', 'warning', 'outline', 'text'].indexOf(props.variant) >= 0
      ? props.variant
      : 'primary';

    var children = [
      e('span', { key: 'label', className: 'dds-button-label' }, loading ? '···' : label)
    ];
    if (subLabel) {
      children.push(e('span', { key: 'sub', className: 'dds-button-sub' }, subLabel));
    }

    var elProps = {
      className: 'dds-button dds-button--' + variant,
      disabled: disabled || loading
    };

    if (href) {
      elProps.href = href;
      delete elProps.disabled;
      return e('a', elProps, children);
    }

    elProps.type = 'button';
    return e('button', elProps, children);
  }

  window.DDS.Button = Button;

  function Floating(props) {
    props = props || {};
    var footers = props.footers || [];
    var isVerticalLayout = !!props.isVerticalLayout;

    return e(
      'div',
      { className: 'dds-floating' },
      footers.length > 0
        ? e(
            'div',
            { className: 'dds-floating-body dds-group-button' + (isVerticalLayout ? ' dds-group-button--vertical' : '') },
            footers.map(function (f, i) {
              return e(Button, Object.assign({ key: i }, f));
            })
          )
        : null
    );
  }

  window.DDS.Floating = Floating;

  function Indicator(props) {
    props = props || {};
    var index = typeof props.index === 'number' ? props.index : 0;
    var length = props.length;
    var labels = Array.isArray(length) ? length : null;
    var count = Array.isArray(length) ? length.length : (typeof length === 'number' ? length : 3);
    var items = [];
    for (var i = 0; i < count; i++) {
      items.push(
        e('li', {
          key: i,
          className: 'dds-indicator-item' + (i === index ? ' dds-indicator-item--active' : '')
        })
      );
    }

    return e(
      'div',
      { className: 'dds-indicator' },
      e('ul', { className: 'dds-indicator-list' }, items),
      labels && labels[index] != null
        ? e('span', { className: 'dds-indicator-label' }, String(labels[index]))
        : null
    );
  }

  window.DDS.Indicator = Indicator;

  function Modal(props) {
    props = props || {};
    var open = !!props.open;
    var title = props.title || '';
    var head = props.head || (title ? 'title-close' : 'none');
    var buttons = props.buttons || [];
    var buttonLayout = props.buttonLayout || 'horizontal';
    // layout: 'centered' (기본, 팝업형) | 'padded' | 'fullscreen' (프로모션/배너형)
    // storybook.dndn.io/?path=/docs/modal--docs 의 layout prop 참고.
    var layout = props.layout || 'centered';
    var onClose = props.onClose;

    if (!open) {
      return null;
    }

    var isLinkFooter = layout === 'fullscreen';

    return e(
      'div',
      {
        className:
          'dds-dim dds-modal-backdrop' +
          (layout !== 'centered' ? ' dds-modal-backdrop--' + layout : '')
      },
      e(
        'div',
        {
          className:
            'dds-modal-container' + (layout !== 'centered' ? ' dds-modal-container--' + layout : ''),
          role: 'dialog'
        },
        head !== 'none'
          ? e(
              'div',
              { className: 'dds-modal-header' },
              e('h2', { className: 'dds-modal-title' }, title),
              head === 'title-close'
                ? e('button', { type: 'button', className: 'dds-modal-close', 'aria-label': 'close', onClick: onClose })
                : null
            )
          : null,
        e(
          'div',
          { className: 'dds-modal-body' + (props.bodyEmphasis ? ' dds-modal-body--emphasis' : '') },
          props.children || props.body || null
        ),
        buttons.length > 0
          ? isLinkFooter
            ? e(
                'div',
                { className: 'dds-modal-linkfooter' },
                buttons.map(function (b, i) {
                  return e('button', { key: i, type: 'button', onClick: b.onClick }, b.label);
                })
              )
            : e(
                'div',
                { className: 'dds-group-button' + (buttonLayout === 'vertical' ? ' dds-group-button--vertical' : '') },
                buttons.map(function (b, i) {
                  return e(Button, Object.assign({ key: i }, b));
                })
              )
          : null
      )
    );
  }

  window.DDS.Modal = Modal;

  function BottomSheetModal(props) {
    props = props || {};
    var open = !!props.open;
    var title = props.title || '';
    var head = props.head || (title ? 'title-close' : 'none');
    var buttons = props.buttons || [];
    var buttonLayout = props.buttonLayout || 'horizontal';
    var showNotch = props.showNotch !== false;
    var onClose = props.onClose;

    if (!open) {
      return null;
    }

    return e(
      'div',
      { className: 'dds-dim dds-bottomsheet-backdrop' },
      e(
        'div',
        { className: 'dds-bottomsheet-container', role: 'dialog' },
        head !== 'none'
          ? e(
              'div',
              { className: 'dds-bottomsheet-header' },
              e('h2', { className: 'dds-bottomsheet-title' }, title),
              head === 'title-close'
                ? e('button', { type: 'button', className: 'dds-modal-close', 'aria-label': 'close', onClick: onClose })
                : null
            )
          : null,
        e(
          'div',
          { className: 'dds-bottomsheet-body' + (props.bodyEmphasis ? ' dds-modal-body--emphasis' : '') },
          props.children || props.body || null
        ),
        buttons.length > 0
          ? e(
              'div',
              { className: 'dds-group-button dds-bottomsheet-buttons' + (buttonLayout === 'vertical' ? ' dds-group-button--vertical' : '') },
              buttons.map(function (b, i) {
                return e(Button, Object.assign({ key: i }, b));
              })
            )
          : null,
        showNotch ? e('div', { className: 'dds-bottomsheet-notch' }, e('span', { className: 'dds-bottomsheet-notch-bar' })) : null
      )
    );
  }

  window.DDS.BottomSheetModal = BottomSheetModal;

  function Snackbar(props) {
    props = props || {};
    var message = props.message || '';
    var visible = props.visible !== false;

    if (!visible || !message) {
      return null;
    }

    return e(
      'div',
      { className: 'dds-snackbar' },
      e('p', { className: 'dds-snackbar-content' }, message)
    );
  }

  window.DDS.Snackbar = Snackbar;

  function Checkbox(props) {
    props = props || {};
    var checked = !!props.checked;
    var rounded = !!props.rounded;

    return e(
      'span',
      { className: 'dds-checkbox' + (rounded ? ' dds-checkbox--rounded' : '') },
      e('input', {
        type: 'checkbox',
        className: 'dds-checkbox-input',
        defaultChecked: checked
      }),
      e(
        'i',
        { className: 'dds-checkbox-img' },
        e(
          'svg',
          { width: 12, height: 12, viewBox: '0 0 12 12', fill: 'none', className: 'dds-checkbox-check' },
          e('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10.71 3.42a.7.7 0 0 0-.99-.99L4.48 8.17 2.21 5.91a.7.7 0 1 0-.99.99l3.03 3.02a.7.7 0 0 0 .99 0l6.47-6.5z',
            fill: 'currentColor'
          })
        )
      )
    );
  }

  window.DDS.Checkbox = Checkbox;

  function RadioGroup(props) {
    props = props || {};
    var options = props.options || [];
    var checked = props.checked;
    var isVerticalLayout = !!props.isVerticalLayout;
    var isBlock = !!props.isBlock;

    var groupClass = 'dds-radio-group' +
      (isVerticalLayout ? ' dds-radio-group--vertical' : '') +
      (isBlock ? ' dds-radio-group--block' : '');

    return e(
      'div',
      { className: groupClass },
      options.map(function (opt, i) {
        var isChecked = opt.value === checked;
        return e(
          'label',
          { key: i, className: 'dds-radio' },
          e('input', {
            type: 'radio',
            className: 'dds-radio-input',
            name: props.name || 'dds-radio',
            defaultChecked: isChecked
          }),
          e('span', { className: 'dds-radio-img' }),
          e('span', { className: 'dds-radio-label' }, opt.label)
        );
      })
    );
  }

  window.DDS.RadioGroup = RadioGroup;

  function Card(props) {
    props = props || {};
    var layout = props.layout === 'half' ? 'half' : 'full';
    var selected = !!props.selected;
    var icon = props.icon;
    var text = props.text || '';

    var className = 'dds-card dds-card--' + layout + (selected ? ' dds-card--selected' : '');

    var children = [];
    if (layout === 'half' && icon) {
      children.push(e('span', { key: 'icon', className: 'dds-card-icon' }, icon));
    }
    children.push(e('span', { key: 'text', className: 'dds-card-text' }, text));

    return e(
      'button',
      { type: 'button', className: className, onClick: props.onClick, 'aria-pressed': selected },
      children
    );
  }

  window.DDS.Card = Card;

  function Description(props) {
    props = props || {};
    var showTitle = props.title !== false;
    var titleText = props.titleText || '꼭 확인하세요';
    var items = props.items || [];

    return e(
      'div',
      { className: 'dds-description' },
      showTitle
        ? e(
            'div',
            { className: 'dds-description-title' },
            e('span', { className: 'dds-description-title-icon', 'aria-hidden': 'true' }, '?'),
            e('span', { className: 'dds-description-title-text' }, titleText)
          )
        : null,
      e(
        'ul',
        { className: 'dds-description-list' },
        items.map(function (item, i) {
          return e(
            'li',
            { key: i, className: 'dds-description-item' },
            e('span', { className: 'dds-description-dot', 'aria-hidden': 'true' }),
            e('span', { className: 'dds-description-text' }, item)
          );
        })
      )
    );
  }

  window.DDS.Description = Description;

  function Divider(props) {
    props = props || {};
    var thickness = props.thickness === 'thick' ? 'thick' : 'thin';

    return e('hr', {
      className: 'dds-divider dds-divider--' + thickness,
      'aria-hidden': 'true'
    });
  }

  window.DDS.Divider = Divider;

  function Dim(props) {
    props = props || {};
    var visible = props.visible !== false;

    if (!visible) {
      return null;
    }

    return e('div', {
      className: 'dds-dim',
      onClick: props.onClick,
      'aria-hidden': 'true'
    });
  }

  window.DDS.Dim = Dim;

  function TosCheckIcon(props) {
    var checked = !!(props && props.checked);
    return e(
      'svg',
      {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        className: 'dds-tos-check-icon',
        style: { color: checked ? 'var(--on-main)' : 'var(--neutral-container-highest)' }
      },
      e('path', {
        d: 'M5 12.5l4.2 4.2L19 7.3',
        stroke: 'currentColor',
        strokeWidth: 2.2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function TosArrowIcon() {
    return e(
      'svg',
      { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', className: 'dds-tos-item-arrow-icon' },
      e('path', {
        d: 'M7 4.5l4.5 4.5L7 13.5',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function TosItem(props) {
    props = props || {};
    var label = props.label || '';
    var description = props.description;
    var checked = !!props.checked;
    var inset = !!props.inset;

    return e(
      'div',
      { className: 'dds-tos-item' + (inset ? ' dds-tos-item--inset' : '') },
      e(
        'button',
        {
          type: 'button',
          className: 'dds-tos-item-check',
          onClick: props.onToggle,
          'aria-pressed': checked,
          'aria-label': label
        },
        e(TosCheckIcon, { checked: checked })
      ),
      e(
        'div',
        { className: 'dds-tos-item-body' },
        e(
          'div',
          { className: 'dds-tos-item-text' },
          e('span', { className: 'dds-tos-item-label' }, label),
          description ? e('span', { className: 'dds-tos-item-desc' }, description) : null
        ),
        e(
          'button',
          {
            type: 'button',
            className: 'dds-tos-item-arrow',
            onClick: props.onDetailClick,
            'aria-label': label + ' 상세보기'
          },
          e(TosArrowIcon, null)
        )
      )
    );
  }

  window.DDS.TosItem = TosItem;

  function TosAllCheck(props) {
    props = props || {};
    var label = props.label || '전체 동의하기';
    var checked = !!props.checked;

    return e(
      'button',
      { type: 'button', className: 'dds-tos-allcheck', onClick: props.onClick, 'aria-pressed': checked },
      e('span', { className: 'dds-tos-allcheck-check' }, e(TosCheckIcon, { checked: checked })),
      e('span', { className: 'dds-tos-allcheck-label' }, label)
    );
  }

  function Tos(props) {
    props = props || {};
    var title = props.title;
    var showAllCheck = !!props.showAllCheck;
    var allCheckLabel = props.allCheckLabel || '전체 동의하기';
    var allChecked = !!props.allChecked;
    var items = props.items || [];
    var caption = props.caption;

    return e(
      'div',
      { className: 'dds-tos' },
      showAllCheck
        ? e(TosAllCheck, { label: allCheckLabel, checked: allChecked, onClick: props.onAllCheckToggle })
        : title
        ? e('div', { className: 'dds-tos-title' }, title)
        : null,
      e(
        'div',
        { className: 'dds-tos-list' },
        items.map(function (item, i) {
          return e(TosItem, {
            key: i,
            label: item.label,
            description: item.description,
            checked: item.checked,
            inset: showAllCheck,
            onToggle: function () {
              if (props.onItemToggle) props.onItemToggle(i);
            },
            onDetailClick: function () {
              if (props.onItemDetailClick) props.onItemDetailClick(i);
            }
          });
        })
      ),
      caption ? e('span', { className: 'dds-tos-caption' }, caption) : null
    );
  }

  window.DDS.Tos = Tos;

  function TopNavBackIcon() {
    return e(
      'svg',
      { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
      e('path', {
        d: 'M15 6l-6 6 6 6',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function TopNavCloseIcon() {
    return e(
      'svg',
      { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
      e('path', {
        d: 'M6 6l12 12M18 6L6 18',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function TopNavChevronIcon() {
    return e(
      'svg',
      { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' },
      e('path', {
        d: 'M7 4.5l4.5 4.5L7 13.5',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function TopNavSettingsIcon() {
    return e(
      'svg',
      { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
      e('circle', { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.6 }),
      e('circle', { cx: 12, cy: 12, r: 7.2, stroke: 'currentColor', strokeWidth: 1.6 })
    );
  }

  function TopNavigation(props) {
    props = props || {};
    var variant = props.variant === 'profile' ? 'profile' : 'default';

    if (variant === 'profile') {
      var name = props.name || '';
      var showSettings = props.showSettings !== false;

      return e(
        'div',
        { className: 'dds-topnav dds-topnav--profile' },
        e(
          'button',
          { type: 'button', className: 'dds-topnav-profile-name', onClick: props.onNameClick },
          e('span', null, name),
          e(TopNavChevronIcon, null)
        ),
        e(
          'div',
          { className: 'dds-topnav-profile-right' },
          showSettings
            ? e(
                'button',
                { type: 'button', className: 'dds-topnav-icon-btn', onClick: props.onSettingsClick, 'aria-label': 'settings' },
                e(TopNavSettingsIcon, null)
              )
            : null
        )
      );
    }

    var showLeft = props.showLeft !== false;
    var showRight = !!props.showRight;
    var title = props.title || '';

    return e(
      'div',
      { className: 'dds-topnav' },
      e(
        'div',
        { className: 'dds-topnav-side' },
        showLeft
          ? e(
              'button',
              { type: 'button', className: 'dds-topnav-icon-btn', onClick: props.onLeftClick, 'aria-label': 'back' },
              e(TopNavBackIcon, null)
            )
          : null
      ),
      e('p', { className: 'dds-topnav-title' }, title),
      e(
        'div',
        { className: 'dds-topnav-side' },
        showRight
          ? e(
              'button',
              { type: 'button', className: 'dds-topnav-icon-btn', onClick: props.onRightClick, 'aria-label': 'close' },
              e(TopNavCloseIcon, null)
            )
          : null
      )
    );
  }

  window.DDS.TopNavigation = TopNavigation;

  function Tabs(props) {
    props = props || {};
    var items = props.items || [];
    var selected = typeof props.selected === 'number' ? props.selected : 0;

    return e(
      'div',
      { className: 'dds-tabs', role: 'tablist' },
      items.map(function (label, i) {
        var isSelected = i === selected;
        return e(
          'button',
          {
            key: i,
            type: 'button',
            role: 'tab',
            'aria-selected': isSelected,
            className: 'dds-tabs-item' + (isSelected ? ' dds-tabs-item--selected' : ''),
            onClick: function () {
              if (props.onChange) props.onChange(i);
            }
          },
          label
        );
      })
    );
  }

  window.DDS.Tabs = Tabs;

  function EmptyIcon() {
    return e(
      'svg',
      { width: 22, height: 22, viewBox: '0 0 22 22', fill: 'none' },
      e('rect', {
        x: 3,
        y: 2,
        width: 16,
        height: 18,
        rx: 3,
        stroke: 'currentColor',
        strokeWidth: 1.4
      }),
      e('path', {
        d: 'M7 8h8M7 12h8M7 16h5',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinecap: 'round'
      })
    );
  }

  function Empty(props) {
    props = props || {};
    var message = props.message || '';

    return e(
      'div',
      { className: 'dds-empty' },
      e('span', { className: 'dds-empty-icon', 'aria-hidden': 'true' }, e(EmptyIcon, null)),
      e('p', { className: 'dds-empty-text' }, message)
    );
  }

  window.DDS.Empty = Empty;

  function Chip(props) {
    props = props || {};
    var label = props.label || '';
    var selected = !!props.selected;

    return e(
      'button',
      {
        type: 'button',
        className: 'dds-chip' + (selected ? ' dds-chip--selected' : ''),
        onClick: props.onClick,
        'aria-pressed': selected
      },
      label
    );
  }

  window.DDS.Chip = Chip;

  function ChipGroup(props) {
    props = props || {};
    var items = props.items || [];
    var selected = typeof props.selected === 'number' ? props.selected : 0;

    return e(
      'div',
      { className: 'dds-chip-group' },
      items.map(function (label, i) {
        return e(Chip, {
          key: i,
          label: label,
          selected: i === selected,
          onClick: function () {
            if (props.onChange) props.onChange(i);
          }
        });
      })
    );
  }

  window.DDS.ChipGroup = ChipGroup;

  function BottomNavIcon(props) {
    var type = (props && props.type) || 'home';
    if (type === 'invest') {
      return e(
        'svg',
        { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
        e('path', {
          d: 'M5 19V13M12 19V9M19 19V5',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round'
        })
      );
    }
    if (type === 'lounge') {
      return e(
        'svg',
        { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
        e('rect', { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5, stroke: 'currentColor', strokeWidth: 1.8 }),
        e('path', { d: 'M3.5 11h17', stroke: 'currentColor', strokeWidth: 1.8 })
      );
    }
    if (type === 'more') {
      return e(
        'svg',
        { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
        e('path', {
          d: 'M4 6h16M4 12h16M4 18h16',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round'
        })
      );
    }
    if (type === 'benefit') {
      return e(
        'svg',
        { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
        e('circle', { cx: 12, cy: 12, r: 8.2, stroke: 'currentColor', strokeWidth: 1.8 }),
        e('circle', { cx: 9, cy: 10.5, r: 1, fill: 'currentColor' }),
        e('circle', { cx: 15, cy: 10.5, r: 1, fill: 'currentColor' }),
        e('path', {
          d: 'M8.5 14c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round'
        })
      );
    }
    return e(
      'svg',
      { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
      e('path', {
        d: 'M4 11l8-6 8 6',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      e('path', {
        d: 'M6 10v9h12v-9',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function BottomNavigation(props) {
    props = props || {};
    var items = props.items || [];
    var selected = typeof props.selected === 'number' ? props.selected : 0;
    var showNotch = props.showNotch !== false;

    return e(
      'div',
      { className: 'dds-bottomnav' },
      e(
        'div',
        { className: 'dds-bottomnav-tabs', role: 'tablist' },
        items.map(function (item, i) {
          var isSelected = i === selected;
          return e(
            'button',
            {
              key: i,
              type: 'button',
              role: 'tab',
              'aria-selected': isSelected,
              className: 'dds-bottomnav-tab' + (isSelected ? ' dds-bottomnav-tab--selected' : ''),
              onClick: function () {
                if (props.onChange) props.onChange(i);
              }
            },
            item.icon
              ? e('span', { className: 'dds-bottomnav-icon' }, e(BottomNavIcon, { type: item.icon }))
              : null,
            e('span', { className: 'dds-bottomnav-label' }, item.label)
          );
        })
      ),
      showNotch
        ? e(
            'div',
            { className: 'dds-bottomnav-notch' },
            e('span', { className: 'dds-bottomnav-notch-bar', 'aria-hidden': 'true' })
          )
        : null
    );
  }

  window.DDS.BottomNavigation = BottomNavigation;

  function AccordionChevron(props) {
    var open = !!(props && props.open);
    return e(
      'svg',
      { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' },
      e('path', {
        d: open ? 'M4.5 11l4.5-4.5L13.5 11' : 'M4.5 7l4.5 4.5L13.5 7',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function Accordion(props) {
    props = props || {};
    var title = props.title || '';
    var open = !!props.open;
    var items = props.items || [];

    return e(
      'div',
      { className: 'dds-accordion' },
      e(
        'button',
        { type: 'button', className: 'dds-accordion-header', onClick: props.onToggle, 'aria-expanded': open },
        e('span', { className: 'dds-accordion-title' }, title),
        e(
          'span',
          { className: 'dds-accordion-arrow' },
          e(AccordionChevron, { open: open })
        )
      ),
      open
        ? e(
            'div',
            { className: 'dds-accordion-content' },
            items.map(function (item, i) {
              return e(
                'div',
                { key: i, className: 'dds-accordion-item' },
                e('p', { className: 'dds-accordion-item-title' }, item.title),
                e('p', { className: 'dds-accordion-item-desc' }, item.description)
              );
            })
          )
        : null
    );
  }

  window.DDS.Accordion = Accordion;

  function Toggle(props) {
    props = props || {};
    var checked = !!props.checked;

    return e(
      'button',
      {
        type: 'button',
        role: 'switch',
        'aria-checked': checked,
        className: 'dds-toggle' + (checked ? ' dds-toggle--checked' : ''),
        onClick: props.onChange
      },
      e('span', { className: 'dds-toggle-knob' })
    );
  }

  window.DDS.Toggle = Toggle;

  function CurrencyToggle(props) {
    props = props || {};
    var checked = !!props.checked;

    return e(
      'button',
      {
        type: 'button',
        role: 'switch',
        'aria-checked': checked,
        className: 'dds-currency-toggle' + (checked ? ' dds-currency-toggle--checked' : ''),
        onClick: props.onChange
      },
      e('span', { className: 'dds-currency-toggle-knob' }, checked ? '$' : '')
    );
  }

  window.DDS.CurrencyToggle = CurrencyToggle;

  var LOGO_SYMBOL_SRC = {
    'color': '../assets/dndn-symbol.png',
    'mono-black': '../assets/mono-black-symbol.png',
    'mono-white': '../assets/mono-white-symbol.png'
  };
  var LOGO_SYMBOL_ASPECT_BY_TONE = {
    'color': 337 / 480,
    'mono-black': 545 / 777,
    'mono-white': 547 / 777
  };
  var LOGO_WORDMARK_PATHS = [
    'm2124.43,1134.79c-10.82-11.93-23.04-21.96-36.69-30.03-29.64-17.56-64.31-26.32-103.85-26.32-44.27,0-84.11,10.06-119.58,30.29-35.47,20.23-63.39,48.42-83.77,84.76-20.38,36.34-30.51,79.09-30.51,128.31s10.13,91.96,30.51,128.31c20.38,36.34,48.23,64.53,83.77,84.76,35.54,20.19,75.35,30.29,119.58,30.29l.04.08h.07c41.22,0,76.61-8.65,105.98-25.91,15.38-9.04,28.86-20.71,40.49-34.98v53.76h130.09v-651.89l-136.15,34.86v193.73Zm-13.6,257.24c-10.71,19.92-25.14,35.05-43.16,45.26-18.09,10.29-38.44,15.39-61.1,15.39s-42.17-5.18-60.19-15.39c-18.02-10.29-32.46-25.33-43.16-45.26-10.78-19.96-16.15-42.74-16.15-70.33s5.37-50.97,16.15-70.32c10.71-19.35,25.14-34.17,43.16-44.38,18.02-10.29,37.49-15.39,60.19-15.39s43.09,5.18,61.1,15.39c18.02,10.29,32.38,25.03,43.16,44.38,10.78,19.39,16.15,43.31,16.15,70.32s-5.45,50.4-16.15,70.33Z',
    'm2747.48,1095.12c-29.41-15.12-62.78-22.7-100.08-22.7v-.04l-.08.08c-40.23,0-76.04,8.61-107.54,25.87-18.54,10.16-34.54,22.91-48.04,38.24v-56.99h-130.25v479.62h136.38v-237.22c0-30.29,4.8-54.71,14.4-73.11,9.67-18.44,23.05-32.46,40.23-41.94,17.18-9.49,36.57-14.25,58.13-14.25,30.33,0,53.79,9.3,70.4,27.7,16.61,18.4,24.91,46.97,24.91,85.6v253.22h136.38v-274.63c0-48.72-8.42-88.72-25.33-119.92-16.95-31.16-40.08-54.32-69.52-69.52Z',
    'm3293.91,1134.8c-10.82-11.93-23.04-21.96-36.69-30.04-29.68-17.56-64.31-26.32-103.85-26.32-44.23,0-84.11,10.06-119.58,30.29-35.54,20.23-63.39,48.42-83.77,84.76-20.38,36.34-30.51,79.09-30.51,128.31s10.13,91.96,30.51,128.31c20.38,36.34,48.27,64.53,83.77,84.76,35.54,20.19,75.35,30.29,119.58,30.29v.08h.08c41.22,0,76.61-8.65,105.98-25.91,15.4-9.05,28.89-20.74,40.53-35.03v53.81h130.09v-651.89l-136.15,34.86v193.73Zm-13.6,257.24c-10.71,19.92-25.14,35.05-43.16,45.26-18.09,10.29-38.44,15.39-61.11,15.39s-42.17-5.18-60.19-15.39c-18.02-10.29-32.46-25.33-43.16-45.26-10.78-19.96-16.15-42.74-16.15-70.33s5.37-50.97,16.15-70.32c10.71-19.35,25.14-34.17,43.16-44.38,18.02-10.29,37.49-15.39,60.19-15.39s43.09,5.18,61.11,15.39c18.02,10.29,32.38,25.03,43.16,44.38,10.78,19.39,16.15,43.31,16.15,70.32s-5.45,50.4-16.15,70.33Z',
    'm3974.97,1164.65c-16.8-31.16-39.6-54.32-68.69-69.52-29.06-15.12-62.01-22.7-98.85-22.7l-.04.04c-39.73,0-75.16,8.61-106.21,25.87-18.29,10.16-34.1,22.91-47.43,38.24v-56.99h-128.65v479.62h134.71v-237.22c0-30.29,4.72-54.71,14.21-73.11,9.52-18.44,22.78-32.46,39.73-41.94,16.95-9.49,36.12-14.25,57.41-14.25,29.94,0,53.11,9.3,69.52,27.7,16.42,18.4,24.62,46.97,24.62,85.6v253.22h134.69v-274.63c0-48.72-8.34-88.72-25.03-119.92Z'
  ];
  var LOGO_WORDMARK_ASPECT = 2250 / 660;

  function LogoWordmark(props) {
    var color = props.tone === 'mono-white' || (props.tone !== 'mono-black' && props.color === 'reverse')
      ? 'var(--inverse-on-neutral)'
      : '#17171E';
    return e(
      'svg',
      {
        viewBox: '1750 906 2250 660',
        height: props.height,
        width: props.height * LOGO_WORDMARK_ASPECT,
        'aria-label': 'dndn',
        role: 'img'
      },
      e(
        'g',
        { fill: color },
        LOGO_WORDMARK_PATHS.map(function (d, i) {
          return e('path', { key: i, d: d });
        })
      )
    );
  }

  function LogoSymbol(props) {
    var tone = props.tone || 'color';
    var aspect = LOGO_SYMBOL_ASPECT_BY_TONE[tone] || LOGO_SYMBOL_ASPECT_BY_TONE.color;
    var style = { height: props.height, width: props.height * aspect, display: 'block' };
    if (tone === 'color' && props.color === 'reverse') style.filter = 'invert(1)';
    return e('img', { src: LOGO_SYMBOL_SRC[tone] || LOGO_SYMBOL_SRC.color, alt: '든든 심볼', style: style });
  }

  function Logo(props) {
    props = props || {};
    var variant = props.variant || 'full';
    var color = props.color || 'primary';
    var tone = props.tone || 'color';
    var size = props.size || 32;

    if (variant === 'symbol') {
      return e(LogoSymbol, { height: size, color: color, tone: tone });
    }
    if (variant === 'wordmark') {
      return e(LogoWordmark, { height: size, color: color, tone: tone });
    }
    return e(
      'div',
      { className: 'dds-logo', style: { gap: size * 0.28 } },
      e(LogoSymbol, { height: size, color: color, tone: tone }),
      e(LogoWordmark, { height: size * 0.72, color: color, tone: tone })
    );
  }

  window.DDS.Logo = Logo;

  function ListChevronIcon() {
    return e(
      'svg',
      { width: 22, height: 22, viewBox: '0 0 22 22', fill: 'none' },
      e('path', {
        d: 'M8.5 5.5L14 11l-5.5 5.5',
        stroke: 'var(--on-neutral-micro)',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  }

  function List(props) {
    props = props || {};
    var variant = props.variant || 'value-chevron';
    var showValue = variant === 'value-chevron' || variant === 'value';
    var showChevron = variant === 'value-chevron' || variant === 'chevron';
    var showToggle = variant === 'toggle';
    var clickable = !!props.onClick && !showToggle;

    return e(
      clickable ? 'button' : 'div',
      {
        type: clickable ? 'button' : undefined,
        className: 'dds-list-row',
        onClick: showToggle ? undefined : props.onClick
      },
      e('p', { className: 'dds-list-row-title' }, props.title),
      e(
        'div',
        { className: 'dds-list-row-right' },
        showValue && props.value != null
          ? e('span', { className: 'dds-list-row-value' }, props.value)
          : null,
        showChevron ? e(ListChevronIcon, null) : null,
        showToggle ? e(window.DDS.Toggle, { checked: props.checked, onChange: props.onChange }) : null
      )
    );
  }

  window.DDS.List = List;

  var ICON_LINE_PATHS = {
    'help-circle': [
      { t: 'circle', cx: 12, cy: 12, r: 8.25 },
      { t: 'path', d: 'M9.6 9.5a2.4 2.4 0 1 1 3.4 2.18c-.75.35-1 .77-1 1.42v.3' },
      { t: 'circle', cx: 12, cy: 16.3, r: 0.15, fillOnly: true }
    ],
    'warning-circle': [
      { t: 'circle', cx: 12, cy: 12, r: 8.25 },
      { t: 'path', d: 'M12 8.2v4.6' },
      { t: 'circle', cx: 12, cy: 16.1, r: 0.15, fillOnly: true }
    ],
    'cancel-circle': [
      { t: 'circle', cx: 12, cy: 12, r: 8.25 },
      { t: 'path', d: 'M9.5 9.5l5 5M14.5 9.5l-5 5' }
    ],
    'add-circle': [
      { t: 'circle', cx: 12, cy: 12, r: 8.25 },
      { t: 'path', d: 'M12 8.5v7M8.5 12h7' }
    ],
    'close': [{ t: 'path', d: 'M6 6l12 12M18 6L6 18' }],
    'check': [{ t: 'path', d: 'M5 12.5l4.5 4.5L19 7.5' }],
    'chevron-up': [{ t: 'path', d: 'M6 15l6-6 6 6' }],
    'chevron-down': [{ t: 'path', d: 'M6 9l6 6 6-6' }],
    'chevron-left': [{ t: 'path', d: 'M14.5 5.5L8 12l6.5 6.5' }],
    'chevron-right': [{ t: 'path', d: 'M9.5 5.5L16 12l-6.5 6.5' }],
    'arrow-forward': [{ t: 'path', d: 'M4 12h15.5M13.5 6l6 6-6 6' }],
    'refresh': [{ t: 'path', d: 'M18.4 10a6.5 6.5 0 1 0 .6 4M18.4 5.5V10h-4.5' }]
  };

  var ICON_FILL_GLYPHS = {
    'cancel-circle': [{ t: 'path', d: 'M9.5 9.5l5 5M14.5 9.5l-5 5', stroke: true }],
    'add-circle': [{ t: 'path', d: 'M12 8.5v7M8.5 12h7', stroke: true }],
    'help-circle': [
      { t: 'path', d: 'M9.6 9.5a2.4 2.4 0 1 1 3.4 2.18c-.75.35-1 .77-1 1.42v.3', stroke: true },
      { t: 'circle', cx: 12, cy: 16.3, r: 0.9, fillWhite: true }
    ],
    'warning-circle': [
      { t: 'path', d: 'M12 7.7v4.6', stroke: true },
      { t: 'circle', cx: 12, cy: 15.8, r: 0.9, fillWhite: true }
    ],
    'check': [{ t: 'path', d: 'M6.5 12.5l4 4L18 8.5', stroke: true }],
    'edit': [{ t: 'path', d: 'M6 18l.7-3 8.6-8.6a1.5 1.5 0 0 1 2.1 0l.2.2a1.5 1.5 0 0 1 0 2.1L9 17.3z', fillOnly: true }],
    'backspace': [{ t: 'path', d: 'M9 6h9a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 18 18H9l-5-6z', fillOnly: true }, { t: 'path', d: 'M12 10l4 4m0-4l-4 4', stroke: true, white: true }],
    'mail': [{ t: 'rect', x: 4, y: 6, width: 16, height: 12, rx: 2, fillOnly: true }, { t: 'path', d: 'M5 7.5l7 5 7-5', stroke: true, white: true }],
    'call': [{ t: 'path', d: 'M7.2 4.5c.6 0 1.1.4 1.3 1l1 2.6c.2.5 0 1.1-.4 1.5L8 10.7c.8 1.9 2.4 3.5 4.3 4.3l1.1-1.1c.4-.4 1-.5 1.5-.4l2.6 1c.6.2 1 .7 1 1.3v2.1c0 .9-.8 1.6-1.7 1.5-6-.6-10.7-5.3-11.3-11.3-.1-.9.6-1.6 1.5-1.6h.2z', fillOnly: true }],
    'invest': [
      { t: 'rect', x: 4, y: 4, width: 7, height: 7, rx: 1.4, fillOnly: true },
      { t: 'rect', x: 13, y: 4, width: 7, height: 7, rx: 1.4, fillOnly: true },
      { t: 'rect', x: 4, y: 13, width: 7, height: 7, rx: 1.4, fillOnly: true },
      { t: 'rect', x: 13, y: 13, width: 7, height: 7, rx: 1.4, fillOnly: true }
    ]
  };

  var ICON_EMPH_PATHS = {
    'chevron-left': 'M14.5 5.5L8 12l6.5 6.5',
    'chevron-right': 'M9.5 5.5L16 12l-6.5 6.5',
    'chevron-up': 'M6 15l6-6 6 6',
    'chevron-down': 'M6 9l6 6 6-6',
    'close': 'M6 6l12 12M18 6L6 18',
    'check': 'M5 12.5l4.5 4.5L19 7.5',
    'share': 'M12 15.5V4.5M8 8.5L12 4.5l4 4M5.5 13v5A1.5 1.5 0 0 0 7 19.5h10a1.5 1.5 0 0 0 1.5-1.5v-5'
  };

  function IconLine(props) {
    var d = ICON_LINE_PATHS[props.name];
    if (!d) return null;
    return e(
      'svg',
      { width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none' },
      d.map(function (seg, i) {
        if (seg.t === 'circle') {
          return e('circle', {
            key: i,
            cx: seg.cx,
            cy: seg.cy,
            r: seg.r,
            stroke: seg.fillOnly ? 'none' : 'currentColor',
            fill: seg.fillOnly ? 'currentColor' : 'none',
            strokeWidth: 1.5
          });
        }
        return e('path', { key: i, d: seg.d, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' });
      })
    );
  }

  function IconFill(props) {
    var glyph = ICON_FILL_GLYPHS[props.name];
    if (!glyph) return null;
    var kids = [e('circle', { key: 'bg', cx: 12, cy: 12, r: 10, fill: 'currentColor' })];
    if (props.name === 'edit' || props.name === 'backspace' || props.name === 'mail' || props.name === 'call' || props.name === 'invest') {
      kids = [];
    }
    glyph.forEach(function (seg, i) {
      var color = seg.white ? '#fff' : seg.fillWhite ? '#fff' : 'currentColor';
      if (seg.t === 'path') {
        kids.push(
          e('path', {
            key: i,
            d: seg.d,
            fill: seg.stroke ? 'none' : color,
            stroke: seg.stroke ? '#fff' : 'none',
            strokeWidth: seg.stroke ? 1.5 : 0,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })
        );
      } else if (seg.t === 'rect') {
        kids.push(e('rect', { key: i, x: seg.x, y: seg.y, width: seg.width, height: seg.height, rx: seg.rx, fill: color }));
      } else if (seg.t === 'circle') {
        kids.push(e('circle', { key: i, cx: seg.cx, cy: seg.cy, r: seg.r, fill: color }));
      }
    });
    return e('svg', { width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none' }, kids);
  }

  function IconEmph(props) {
    var d = ICON_EMPH_PATHS[props.name];
    if (props.name === 'setting') {
      return e(
        'svg',
        { width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none' },
        e('circle', { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 2 }),
        e('path', {
          d: 'M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.8 6.2l-1.5 1.5M7.7 16.3l-1.5 1.5M17.8 17.8l-1.5-1.5M7.7 7.7L6.2 6.2',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round'
        })
      );
    }
    if (!d) return null;
    return e(
      'svg',
      { width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none' },
      e('path', { d: d, stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })
    );
  }

  function Icon(props) {
    props = props || {};
    var style = props.style || 'line';
    var size = props.size || 24;
    if (style === 'fill') return e(IconFill, { name: props.name, size: size });
    if (style === 'emph') return e(IconEmph, { name: props.name, size: size });
    if (style === 'bottombar') return e(BottomNavIcon, { type: props.name });
    return e(IconLine, { name: props.name, size: size });
  }

  window.DDS.Icon = Icon;
})();
