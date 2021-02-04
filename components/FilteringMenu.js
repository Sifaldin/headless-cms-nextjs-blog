import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_ICON = ["list", "border-all"];
const LIST_DATE_ICON = ["sort-numeric-down", "sort-numeric-up"];

export default function FilteringMenu({ onChange, filter }) {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_ICON[filter.view.list]}
        onClick={() => onChange('view', { list: +!filter.view.list })} />

      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={LIST_DATE_ICON[filter.date.asc]}
        onClick={() => onChange('date', { asc: +!filter.date.asc })} />


    </div>
  )
}
