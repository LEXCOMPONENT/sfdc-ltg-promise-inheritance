# Deploy Component

* implement `force:appHostable` and create `Lightning Tab`, then add the tab to `SF1 navigation`, or use the tab to create a `Lightning App` (Setup - Apps - App Manager - New Lightning App)

* implement `flexipage:availableForAllPageTypes` or `flexipage:availableForRecordHome`, and add the component to `Lightning Experience Record Page` (this actually create an item in `Lightning App Builder` with `Record Page` Type)

* implement `force:lightningQuickAction`, and deploy the component via either `Global Actions` or `Object-Specific Actions`

* implement `flexipage:availableForAllPageTypes`, and create an item via `Lightning App Builder` (this actually create an item in `Lightning App Builder` with `App Page` Type)

* create a `Lightning App`, add the component in the App, and visit the app directly `https://[my-domain]/c/[appname].app`
```
  <aura:application>
      <c:ComponentName attributeName="attributeValue"/>
  </aura:application>
```


* references
  * [Lightning Tab and Lightning App refer this](https://github.com/jacky1999cn2000/sfdc-lightning-suggestion-battle)

  * [Lightning Experience Record Page and Custom Action refer this](https://github.com/jacky1999cn2000/sfdc-ltg-promise-inheritance/blob/master/notes/ManyCallbacks.md)

  * Lightning App Builder (`App Page` Type - here we use `BasicDetail` component as example)

    * must add this `implements="flexipage:availableForAllPageTypes"`

    * if you want user to configure your component, then add the design file to expose your attributes (only String, Boolean, and Integer attributes can be exposed)
    ```
      <design:component >
          <design:attribute name="recordId" label="Record Id" description="Record Id." />
          <design:attribute name="objectType" label="Object Type" description="Object Type." />
          <design:attribute name="fields" label="Fields" description="Fields." />
      </design:component>
    ```

    * create an App Page from `Lightning App Builder`, configure the component, Save & Activate, and you can access it from menu
    ![1.gif](/screenshots/deploycomponent/1.gif)
    ![2.gif](/screenshots/deploycomponent/2.gif)
