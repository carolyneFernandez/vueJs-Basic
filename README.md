# vueJs-Basic
Vue js course with exercises

<h3>Methods vs Computed vs Watch</h3>

<h4>Methods</h4>
Use whith event binding OR data binding
Data binding: Method is executed for every "render" cycle of the component
Use for event or data that really needs to be revaluated all the time

<h4>Computed</h4>
Use whith data binding
Compured propertiers are only re-evaluated if one of their  "used values" chaged
Use for data that depends on other data

<h4>Watch</h4>
Not used directly in template
Allow you to run any code in reaction to some changed data(e.g send Http request etc...)
Use for any non-data update you want to make
