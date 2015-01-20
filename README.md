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

<h4>Dropdown</h4>
<p>Dropdown is a simple directive which will toggle a dropdown menu on click or programmatically. You can either use is-open to toggle or add inside a <a dropdown-toggle> element to toggle it when is clicked. There is also the on-toggle(open) optional expression fired when dropdown changes state.</p>

<h4>Modal</h4>
<p><code>$modal</code> is a service to quickly create AngularJS-powered modal windows.
Creating custom modals is straightforward: create a partial view, its controller and reference them when using the service.</p>

<p>The <code>$modal</code> service has only one method: <code>open(options)</code> where available options are like follows:</p>

<ul>
<li><code>templateUrl</code> - a path to a template representing modal's content</li>
<li><code>template</code> - inline template representing the modal's content</li>
<li><code>scope</code> - a scope instance to be used for the modal's content (actually the <code>$modal</code> service is going to create a child scope of a provided scope). Defaults to <code>$rootScope</code></li>
<li><code>controller</code> - a controller for a modal instance - it can initialize scope used by modal. Accepts the "controller-as" syntax in the form 'SomeCtrl as myctrl'; can be injected with <code>$modalInstance</code></li>
<li><code>controllerAs</code> - an alternative to the controller-as syntax, matching the API of directive definitions. Requires the <code>controller</code> option to be provided as well</li>
<li><code>resolve</code> - members that will be resolved and passed to the controller as locals; it is equivalent of the <code>resolve</code> property for AngularJS routes</li>
<li><code>backdrop</code> - controls presence of a backdrop. Allowed values: true (default), false (no backdrop), <code>'static'</code> - backdrop is present but modal window is not closed when clicking outside of the modal window.</li>
<li><code>keyboard</code> - indicates whether the dialog should be closable by hitting the ESC key, defaults to true</li>
<li><code>backdropClass</code> - additional CSS class(es) to be added to a modal backdrop template</li>
<li><code>windowClass</code> - additional CSS class(es) to be added to a modal window template</li>
<li><code>windowTemplateUrl</code> - a path to a template overriding modal's window template</li>
<li><code>size</code> - optional size of modal window. Allowed values: <code>'sm'</code> (small) or  <code>'lg'</code> (large). Requires Bootstrap 3.1.0 or later</li>
</ul>

<p>The <code>open</code> method returns a modal instance, an object with the following properties:</p>

<ul>
<li><code>close(result)</code> - a method that can be used to close a modal, passing a result</li>
<li><code>dismiss(reason)</code> - a method that can be used to dismiss a modal, passing a reason</li>
<li><code>result</code> - a promise that is resolved when a modal is closed and rejected when a modal is dismissed</li>
<li><code>opened</code> - a promise that is resolved when a modal gets opened after downloading content's template and resolving all variables</li>
</ul>

<p>In addition the scope associated with modal's content is augmented with 2 methods:</p>

<ul>
<li><code>$close(result)</code></li>
<li><code>$dismiss(reason)</code></li>
</ul>

<p>Those methods make it easy to close a modal window without a need to create a dedicated controller.</p>

<h4>Pagination</h4>
<p>A lightweight pagination directive that is focused on ... providing pagination &amp; will take care of visualising a pagination bar and enable / disable buttons correctly!</p>

<h3>Pagination Settings</h3>

<p>Settings can be provided as attributes in the <code>&lt;pagination&gt;</code> or globally configured through the <code>paginationConfig</code>.</p>

<ul>
<li><p><code>ng-model</code> <i class="glyphicon glyphicon-eye-open"></i>
 :
 Current page number. First page is 1.</p></li>
<li><p><code>total-items</code> <i class="glyphicon glyphicon-eye-open"></i>
 :
 Total number of items in all pages.</p></li>
<li><p><code>items-per-page</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: 10)</em> :
 Maximum number of items per page. A value less than one indicates all items on one page.</p></li>
<li><p><code>max-size</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: null)</em> :
 Limit number for pagination size.</p></li>
<li><p><code>num-pages</code> <small class="badge">readonly</small>
 <em>(Defaults: angular.noop)</em> :
 An optional expression assigned the total number of pages to display.</p></li>
<li><p><code>rotate</code>
 <em>(Defaults: true)</em> :
 Whether to keep current page in the middle of the visible ones.</p></li>
<li><p><code>direction-links</code>
 <em>(Default: true)</em> :
 Whether to display Previous / Next buttons.</p></li>
<li><p><code>previous-text</code>
 <em>(Default: 'Previous')</em> :
 Text for Previous button.</p></li>
<li><p><code>next-text</code>
 <em>(Default: 'Next')</em> :
 Text for Next button.</p></li>
<li><p><code>boundary-links</code>
 <em>(Default: false)</em> :
 Whether to display First / Last buttons.</p></li>
<li><p><code>first-text</code>
 <em>(Default: 'First')</em> :
 Text for First button.</p></li>
<li><p><code>last-text</code>
 <em>(Default: 'Last')</em> :
 Text for Last button.</p></li>
</ul>

<h3>Pager Settings</h3>

<p>Settings can be provided as attributes in the <code>&lt;pager&gt;</code> or globally configured through the <code>pagerConfig</code>. <br />
For <code>ng-model</code>, <code>total-items</code>, <code>items-per-page</code> and <code>num-pages</code> see pagination settings. Other settings are:</p>

<ul>
<li><p><code>align</code>
 <em>(Default: true)</em> :
 Whether to align each link to the sides.</p></li>
<li><p><code>previous-text</code>
 <em>(Default: '« Previous')</em> :
 Text for Previous button.</p></li>
<li><p><code>next-text</code>
 <em>(Default: 'Next »')</em> :
 Text for Next button.</p></li>
</ul>

<h4>Popover </h4>
<p>A lightweight, extensible directive for fancy popover creation. The popover
directive supports multiple placements, optional transition animation, and more.</p>

<p>Like the Bootstrap jQuery plugin, the popover <strong>requires</strong> the tooltip
module.</p>

<p>The popover directives provides several optional attributes to control how it
will display:</p>

<ul>
<li><code>popover-title</code>: A string to display as a fancy title.</li>
<li><code>popover-placement</code>: Where to place it? Defaults to "top", but also accepts
"bottom", "left", "right".</li>
<li><code>popover-animation</code>: Should it fade in and out? Defaults to "true".</li>
<li><code>popover-popup-delay</code>: For how long should the user have to have the mouse
over the element before the popover shows (in milliseconds)? Defaults to 0.</li>
<li><code>popover-trigger</code>: What should trigger the show of the popover? See the
<code>tooltip</code> directive for supported values.</li>
<li><code>popover-append-to-body</code>: Should the tooltip be appended to <code>$body</code> instead of
the parent element?</li>
</ul>

<p>The popover directives require the <code>$position</code> service.</p>

<p>The popover directive also supports various default configurations through the
$tooltipProvider.</p>

<h4>Progressbar</h4>
<p>A progress bar directive that is focused on providing feedback on the progress of a workflow or action.</p>

<p>It supports multiple (stacked) bars into the same <code>&lt;progress&gt;</code> element or a single <code>&lt;progressbar&gt;</code> elemtnt with optional <code>max</code> attribute and transition animations.</p>

<h3>Settings</h3>

<h4><code>&lt;progressbar&gt;</code></h4>

<ul>
<li><p><code>value</code> <i class="glyphicon glyphicon-eye-open"></i>
 :
 The current value of progress completed.</p></li>
<li><p><code>type</code>
 <em>(Default: null)</em> :
 Style type. Possible values are 'success', 'warning' etc.</p></li>
<li><p><code>max</code>
 <em>(Default: 100)</em> :
 A number that specifies the total value of bars that is required.</p></li>
<li><p><code>animate</code>
 <em>(Default: true)</em> :
 Whether bars use transitions to achieve the width change.</p></li>
</ul>

<h3>Stacked</h3>

<p>Place multiple <code>&lt;bars&gt;</code> into the same <code>&lt;progress&gt;</code> element to stack them.
<code>&lt;progress&gt;</code> supports <code>max</code> and <code>animate</code> &amp;  <code>&lt;bar&gt;</code> supports  <code>value</code> and <code>type</code> attributes.</p>

<h4>Rating</h4>
<p>Rating directive that will take care of visualising a star rating bar.</p>

<h3>Settings</h3>

<h4><code>&lt;rating&gt;</code></h4>

<ul>
<li><p><code>ng-model</code> <i class="glyphicon glyphicon-eye-open"></i>
 :
 The current rate.</p></li>
<li><p><code>max</code>
 <em>(Defaults: 5)</em> :
 Changes the number of icons.</p></li>
<li><p><code>readonly</code> <i class="icon-eye-open"></i>
 <em>(Defaults: false)</em> :
 Prevent user's interaction.</p></li>
<li><p><code>on-hover(value)</code>
 :
 An optional expression called when user's mouse is over a particular icon.</p></li>
<li><p><code>on-leave()</code>
 :
 An optional expression called when user's mouse leaves the control altogether.</p></li>
<li><p><code>state-on</code>
 <em>(Defaults: null)</em> :
 A variable used in template to specify the state (class, src, etc) for selected icons.</p></li>
<li><p><code>state-off</code>
 <em>(Defaults: null)</em> :
 A variable used in template to specify the state for unselected icons.</p></li>
<li><p><code>rating-states</code>
 <em>(Defaults: null)</em> :
 An array of objects defining properties for all icons. In default template, <code>stateOn</code> &amp; <code>stateOff</code> property is used to specify the icon's class.</p></li>

 <h4>Tabs </h4>
 <p>AngularJS version of the tabs directive.</p>

<h3>Settings</h3>

<h4><code>&lt;tabset&gt;</code></h4>

<ul>
<li><p><code>vertical</code>
 <em>(Defaults: false)</em> :
 Whether tabs appear vertically stacked.</p></li>
<li><p><code>justified</code>
 <em>(Defaults: false)</em> :
 Whether tabs fill the container and have a consistent width.</p></li>
<li><p><code>type</code>
 <em>(Defaults: 'tabs')</em> :
 Navigation type. Possible values are 'tabs' and 'pills'.</p></li>
</ul>

<h4><code>&lt;tab&gt;</code></h4>

<ul>
<li><p><code>heading</code> or <code>&lt;tab-heading&gt;</code>
 :
 Heading text or HTML markup.</p></li>
<li><p><code>active</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: false)</em> :
 Whether tab is currently selected.</p></li>
<li><p><code>disabled</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: false)</em> :
 Whether tab is clickable and can be activated.</p></li>
<li><p><code>select()</code>
 <em>(Defaults: null)</em> :
 An optional expression called when tab is activated.</p></li>
<li><p><code>deselect()</code>
 <em>(Defaults: null)</em> :
 An optional expression called when tab is deactivated.</p></li>
</ul>

<h4>Timepicker </h4>
<p>A lightweight &amp; configurable timepicker directive.</p>

<h3>Settings</h3>

<p>All settings can be provided as attributes in the <code>&lt;timepicker&gt;</code> or globally configured through the <code>timepickerConfig</code>.</p>

<ul>
<li><p><code>ng-model</code> <i class="glyphicon glyphicon-eye-open"></i>
 :
 The Date object that provides the time state.</p></li>
<li><p><code>hour-step</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: 1)</em> :
  Number of hours to increase or decrease when using a button.</p></li>
<li><p><code>minute-step</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: 1)</em> :
  Number of minutes to increase or decrease when using a button.</p></li>
<li><p><code>show-meridian</code> <i class="glyphicon glyphicon-eye-open"></i>
 <em>(Defaults: true)</em> :
 Whether to display 12H or 24H mode.</p></li>
<li><p><code>meridians</code>
 <em>(Defaults: null)</em> :
  Meridian labels based on locale. To override you must supply an array like ['AM', 'PM'].</p></li>
<li><p><code>readonly-input</code>
 <em>(Defaults: false)</em> :
  Whether user can type inside the hours &amp; minutes input.</p></li>
<li><p><code>mousewheel</code>
 <em>(Defaults: true)</em> :
  Whether user can scroll inside the hours &amp; minutes input to increase or decrease it's values.</p></li>
</ul>

<h4>Tooltip </h4>
<p>A lightweight, extensible directive for fancy tooltip creation. The tooltip
directive supports multiple placements, optional transition animation, and more.</p>

<p>There are two versions of the tooltip: <code>tooltip</code> and <code>tooltip-html-unsafe</code>. The
former takes text only and will escape any HTML provided. The latter takes
whatever HTML is provided and displays it in a tooltip; it called "unsafe"
because the HTML is not sanitized. <em>The user is responsible for ensuring the
content is safe to put into the DOM!</em></p>

<p>The tooltip directives provide several optional attributes to control how they
will display:</p>

<ul>
<li><code>tooltip-placement</code>: Where to place it? Defaults to "top", but also accepts
"bottom", "left", "right".</li>
<li><code>tooltip-animation</code>: Should it fade in and out? Defaults to "true".</li>
<li><code>tooltip-popup-delay</code>: For how long should the user have to have the mouse
over the element before the tooltip shows (in milliseconds)? Defaults to 0.</li>
<li><code>tooltip-trigger</code>: What should trigger a show of the tooltip?</li>
<li><code>tooltip-append-to-body</code>: Should the tooltip be appended to <code>$body</code> instead of
the parent element?</li>
</ul>

<p>The tooltip directives require the <code>$position</code> service.</p>

<p><strong>Triggers</strong></p>

<p>The following show triggers are supported out of the box, along with their
provided hide triggers:</p>

<ul>
<li><code>mouseenter</code>: <code>mouseleave</code></li>
<li><code>click</code>: <code>click</code></li>
<li><code>focus</code>: <code>blur</code></li>
</ul>

<p>For any non-supported value, the trigger will be used to both show and hide the
tooltip.</p>

<p><strong>$tooltipProvider</strong></p>

<p>Through the <code>$tooltipProvider</code>, you can change the way tooltips and popovers
behave by default; the attributes above always take precedence. The following
methods are available:</p>

<ul>
<li><code>setTriggers( obj )</code>: Extends the default trigger mappings mentioned above
with mappings of your own. E.g. <code>{ 'openTrigger': 'closeTrigger' }</code>.</li>
<li><p><code>options( obj )</code>: Provide a set of defaults for certain tooltip and popover
attributes. Currently supports 'placement', 'animation', 'popupDelay', and
<code>appendToBody</code>. Here are the defaults:</p>

<pre>
placement: 'top',
animation: true,
popupDelay: 0,
appendToBody: false
</pre></li>
</ul>


<h4>Typeahead </h4>
 <p>Typeahead is a AngularJS version of <a href="http://getbootstrap.com/2.3.2/javascript.html#typeahead">Bootstrap v2's typeahead plugin</a>.
This directive can be used to quickly create elegant typeaheads with any form text input.</p>

<p>It is very well integrated into AngularJS as it uses a subset of the
<a href="http://docs.angularjs.org/api/ng.directive:select">select directive</a> syntax, which is very flexible. Supported expressions are:</p>

<ul>
<li><em>label</em> for <em>value</em> in <em>sourceArray</em></li>
<li><em>select</em> as <em>label</em> for <em>value</em> in <em>sourceArray</em></li>
</ul>

<p>The <code>sourceArray</code> expression can use a special <code>$viewValue</code> variable that corresponds to the value entered inside the input.</p>

<p>This directive works with promises, meaning you can retrieve matches using the <code>$http</code> service with minimal effort.</p>

<p>The typeahead directives provide several attributes:</p>

<ul>
<li><p><code>ng-model</code> <i class="glyphicon glyphicon-eye-open"></i>
:
Assignable angular expression to data-bind to</p></li>
<li><p><code>typeahead</code> <i class="glyphicon glyphicon-eye-open"></i>
:
Comprehension Angular expression (see <a href="http://docs.angularjs.org/api/ng.directive:select">select directive</a>)</p></li>
<li><p><code>typeahead-append-to-body</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: false)</em> : Should the typeahead popup be appended to $body instead of the parent element?</p></li>
<li><p><code>typeahead-editable</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: true)</em> :
Should it restrict model values to the ones selected from the popup only ?</p></li>
<li><p><code>typeahead-input-formatter</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: undefined)</em> :
Format the ng-model result after selection</p></li>
<li><p><code>typeahead-loading</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: angular.noop)</em> :
Binding to a variable that indicates if matches are being retrieved asynchronously</p></li>
<li><p><code>typeahead-min-length</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: 1)</em> :
Minimal no of characters that needs to be entered before typeahead kicks-in</p></li>
<li><p><code>typeahead-on-select($item, $model, $label)</code>
<em>(Defaults: null)</em> :
A callback executed when a match is selected</p></li>
<li><p><code>typeahead-template-url</code> <i class="glyphicon glyphicon-eye-open"></i>
:
Set custom item template</p></li>
<li><p><code>typeahead-wait-ms</code> <i class="glyphicon glyphicon-eye-open"></i>
<em>(Defaults: 0)</em> :
Minimal wait time after last character typed before typeahead kicks-in</p></li>
<li><p><code>typeahead-focus-first</code>
<em>(Defaults: true)</em> :
Should the first match automatically be focused as you type?</p></li>
</ul>

