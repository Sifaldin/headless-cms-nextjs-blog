import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_ICON = ["list", "border-all"]
export default function FilteringMenu({ onChange, filter }) {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={LIST_ICON[filter.view.list]}
        onClick={() => onChange('view', { list: +!filter.view.list })} />
    </div>
  )
}
