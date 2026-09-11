import { IntlContext } from 'react-intl';

const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };


// The single source of truth for how we render a date-time. Needs an intl
// object, so callers that have one (e.g. via useIntl) can use it directly.
export function formatDateTimeString(intl, dt) {
  if (!dt) return dt;
  return `${intl.formatTime(dt, TIME_OPTIONS)}, ${intl.formatDate(dt, DATE_OPTIONS)}`;
}


// For use in JSX by callers that have no intl object of their own: picks one
// up from context and delegates to formatDateTimeString.
function formatDateTime(dt) {
  if (!dt) return dt;
  return <IntlContext.Consumer>{intl => formatDateTimeString(intl, dt)}</IntlContext.Consumer>;
}

export default formatDateTime;
