# Inheritance

* Scenario
  * We created 2 components: `BasicDetail` is the `parent` component and `OpportunityDetail` is the `child` component

* resources
  * ApexController.cls (`getObject()`)
  * BasicDetail (aura)
  * OpportunityDetail (aura)

* notes
  * [the example was based on this article](http://peterknolle.com/lightning-component-inheritance/)
  * [a trick when ".getDef().getHelper()" is not available - however, I didn't use it since the inheritance seemed work fine naturally](http://salesforce.stackexchange.com/questions/128895/lightning-component-locker-service-issue/128978)

* demo
  * if I use `BasicDetail` (I created an `App Page` item with this component via `Lightning App Builder`), it worked fine and its own helper method `setMessage` got called to set the correct message
    ![1.gif](/screenshots/inheritance/1.gif)

  * if I use `OpportunityDetail` (I created a `Lightning App` called `InheritanceDemoApp` and accessed it directly), it worked fine too and the child component's overwritten helper method `setMessage` got called to set the correct message
    * `InheritanceDemoApp`
      ```
        <aura:application >
            <c:OpportunityDetail recordId="00646000003g9GFAAY"/>
        </aura:application>
      ```
    * `OpportunityDetail` take `recordId` attribute from markup, and set `objectType` and `fields` attributes by itself in the code
    * the `<div>{!v.body}</div>` markup in parent component (`BasicDetail`) got rendered correctly with child component's content (`OpportunityDetail`)
    * the `helper.setMessage(component);` method in patent component's js controller called child component's overwritten one
      ![2.gif](/screenshots/inheritance/2.gif)
