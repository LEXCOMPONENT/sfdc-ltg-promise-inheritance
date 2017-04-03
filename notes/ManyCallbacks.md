# ManyCallbacks

* functionality
  * click the button and component's javascript controller would call 3 server side apex method sequentially via promise

* resources
  * AuraPromise.resource
  * ApexController.cls (`getContact()`,`getAccount()`,`getUser()`)
  * ManyCallbacks (aura)

* notes
  * understand how to deploy component for `Lightning Experience Record Page` and for `Custom Actions`

    * For `Lightning Experience Record Page`
      * `flexipage:availableForRecordHome,flexipage:availableForAllPageTypes,force:hasRecordId`
      * [Configure Components for Lightning Experience Record Pages](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
      * [Add the lightning component to your record page layout](http://www.forcewizard.com/blog/adding-lightning-components-lightning-experience)
      
    * For `Custom Actions`
      * `force:lightningQuickAction`
      * [Global Quick Actions vs Object-Specific Quick Actions](https://trailhead.salesforce.com/modules/salesforce1_mobile_app)
        * global actions - create global action from `SETUP/User Interface/Global Actions/Global Actions`, and deploy global action from `SETUP/User Interface/Global Actions/Publisher Layouts` (global actions can be found in Home/Chatter tab for classic version or the right corner's plus sign dropdown list for lightning version)
        * object-specific action - create object-specific action from each object's `Buttons, links, and Actions`, and deploy object-specific action in each object's Page Layout (object-specific actions can be found in Record page)
        ![1.png](/screenshots/manycallbacks/1.png)
        ![2.png](/screenshots/manycallbacks/2.png)
      * [Configure Components for Custom Actions](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)

  * [Use Base Lightning Components and Layout](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm)
    * especially the `lightning:layout` and `lightning:layoutItem`, the second and third demos below (component used via object-specific actions) looks ugly since we haven't specified mobile-first layout (using `size`, `smallDeviceSize`, `mediumDeviceSize` in `lightning:layoutItem`)

* demo
  * component deployed and used in `Lightning Experience Record Page`
    ![1.gif](/screenshots/manycallbacks/1.gif)
  * component deployed and used via `object-specific action`
    ![2.gif](/screenshots/manycallbacks/2.gif)
    ![3.gif](/screenshots/manycallbacks/3.gif)
