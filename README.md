# angular-ui
This repository contains a set of native AngularJS directives based on Bootstrap's markup and CSS.

<h3>Accordion</h3>
<p>The accordion directive builds on top of the collapse directive to provide a list of items, with collapsible bodies that are collapsed or expanded by clicking on the item's header.</p>

<h3>Alert</h3>
<p>Alert is an AngularJS-version of bootstrap's alert.</p>
<p>This directive can be used to generate alerts from the dynamic model data (using the <code>ng-repeat</code> directive);</p>
<p>The presence of the <code>close</code> attribute determines if a close button is displayed</p></div>

<h3>Buttons</h3>
<p>There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.</p>

<h3>Carousel</h3>
<p>Carousel creates a carousel similar to bootstrap's image carousel.</p>
<p>The carousel also offers support for touchscreen devices in the form of swiping. To enable swiping, load the <code>ngTouch</code> module as a dependency.</p>
<p>Use a <code>carousel</code> element with <code>slide</code> elements inside it.  It will automatically cycle through the slides at a given rate, and a current-index variable will be kept in sync with the currently visible slide.</p>

<h3>Collapse</h3>
<p>AngularJS version of Bootstrap's collapse plugin. Provides a simple way to hide and show an element with a css transition</p>

<h3>Datepicker</h3>
<p>A clean, flexible, and fully customizable date picker.</p>
<p>User can navigate through months and years. The datepicker shows dates that come from other than the main month being displayed. 
These other dates are also selectable.</p>
<p>Everything is formatted using the date filter and thus is also localized.</p>

<h3>Datepicker Settings</h3>
<h4>All settings can be provided as attributes in the datepicker or globally configured through the datepickerConfig:</h4>
<ul>
  <li>ng-model  : The date object.</li>
  <li>datepicker-mode  (Defaults: 'day') : Current mode of the datepicker (day|month|year). Can be used to initialize datepicker to specific mode.</li>
  <li>min-date  (Default: null) : Defines the minimum available date.</li>
  <li>max-date  (Default: null) : Defines the maximum available date.</li>
  <li>date-disabled (date, mode) (Default: null) : An optional expression to disable visible options based on passing date and current mode (day|month|year).</li>
  <li>show-weeks (Defaults: true) : Whether to display week numbers.</li>
  <li>starting-day (Defaults: 0) : Starting day of the week from 0-6 (0=Sunday, ..., 6=Saturday).</li>
  <li>init-date : The initial date view when no model value is not specified.</li>
  <li>min-mode (Defaults: 'day') : Set a lower limit for mode.</li>
  <li>max-mode (Defaults: 'year') : Set an upper limit for mode.</li>
  <li>format-day (Default: 'dd') : Format of day in month.</li>
  <li>format-month (Default: 'MMMM') : Format of month in year.</li>
  <li>format-year (Default: 'yyyy') : Format of year in year range.</li>
  <li>format-day-header (Default: 'EEE') : Format of day in week header.</li>
  <li>format-day-title (Default: 'MMMM yyyy') : Format of title when selecting day.</li>
  <li>format-month-title (Default: 'yyyy') : Format of title when selecting month.</li>
  <li>year-range (Default: 20) : Number of years displayed in year selection.</li>
</ul>

<h4>Popup Settings</h4>
<p>Options for datepicker can be passed as JSON using the datepicker-options attribute. Specific settings for the datepicker-popup, that can globally configured through the datepickerPopupConfig, are:</p>
<li>datepicker-popup (Default: 'yyyy-MM-dd') : The format for displayed dates.</li>
<li>show-button-bar (Default: true) : Whether to display a button bar underneath the datepicker.</li>
<li>current-text (Default: 'Today') : The text to display for the current day button.</li>
<li>clear-text (Default: 'Clear') : The text to display for the clear button.</li>
<li>close-text (Default: 'Done') : The text to display for the close button.</li>
<li>close-on-date-selection (Default: true) : Whether to close calendar when a date is chosen.</li>
<li>datepicker-append-to-body (Default: false): Append the datepicker popup element to body, rather than inserting after datepicker-popup. For global configuration, use datepickerPopupConfig.appendToBody.</li>

<h4>Keyboard Support</h4>
<p>Depending on datepicker's current mode, the date may reffer either to day, month or year. Accordingly, the term view reffers either to a month, year or year range.<p>

<li>Left: Move focus to the previous date. Will move to the last date of the previous view, if the current date is the first date of a view.</li>
<li>Right: Move focus to the next date. Will move to the first date of the following view, if the current date is the last date of a view.</li>
<li>Up: Move focus to the same column of the previous row. Will wrap to the appropriate row in the previous view.</li>
<li>Down: Move focus to the same column of the following row. Will wrap to the appropriate row in the following view.</li>
<li>PgUp: Move focus to the same date of the previous view. If that date does not exist, focus is placed on the last date of the month.</li>
<li>PgDn: Move focus to the same date of the following view. If that date does not exist, focus is placed on the last date of the month.</li>
<li>Home: Move to the first date of the view.</li>
<li>End: Move to the last date of the view.</li>
<li>Enter/Space: Select date.</li>
<li>Ctrl+Up: Move to an upper mode.</li>
<li>Ctrl+Down: Move to a lower mode.</li>
<li>Esc: Will close popup, and move focus to the input.</li>